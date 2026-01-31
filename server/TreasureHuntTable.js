import BaseTable from "./BaseTable";
export default class TreasureHuntTable extends BaseTable {
    init() {
        super.init();
        this.started = false;
        this.users = [];
        this.currentTurn = 1;
        this.gameOver = false;
        this.totalMoves = 12;
        this.colClears = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.rowClears = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        this.coinsFound = 0;
        this.gemsFound = 0;
        this.emeraldFound = 0;
        //this.emeraldExist = false;
        this.map = Array.from({length: 10}, () => Array(10).fill(0));

        // top left coords of gems + emeralds
        this.gemLocations = [];

        this.MAXCOINS = 34;
        this.MAXGEMS = 3;
        this.gemChance = 5;
        this.emeraldChance = 6; // 1 in x gems (multiply w above)

        this.gemMultiplier = 25;
        this.emeraldMultiplier = 100;
    }

    addGems() {
        // bro i took the logic from the og treasure hunt swf why is it so ugly
        this.gemLocations = [];
        let coordGood = true;
        let nearbyLocations = [];
        let newCoord = new Array(2);
        let emeraldExist = false;

        for (let i = 0; i < this.MAXGEMS; i++) {
            do {
                newCoord[0] = this.getRandom(10);
                newCoord[1] = this.getRandom(10);

                coordGood = true;
                // if this coord exists alr
                for (let j = 0; j < this.gemLocations.length; j++) {
                    if (newCoord[0] === this.gemLocations[j][0] && newCoord[1] === this.gemLocations[j][1]) {
                        coordGood = false;
                        break;
                    }
                }
                // if this coord is too close to another
                for (let j = 0; j < nearbyLocations.length; j++) {
                    if (newCoord[0] === nearbyLocations[j][0] && newCoord[1] === nearbyLocations[j][1]) {
                        coordGood = false;
                        break;
                    }
                }
            } while (!coordGood);
            this.gemLocations.push([newCoord[0], newCoord[1]]);

            // asking to have 1 tile inbetween
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    if (x !== 0 || y !== 0) {
                        nearbyLocations.push([newCoord[0] + x, newCoord[1] + y]);
                    }
                }
            }
        }

        for (const gem of this.gemLocations) {
            if (gem != null) {
                let r = gem[0];
                let c = gem[1];

                // bc of condition, gems in list that have any index=9 wont get added
                if (r + 1 < 10 && c + 1 < 10) {
                    let addChance = this.getRandom(this.gemChance);
                    let chance = this.getRandom(this.emeraldChance);
                    if (chance == 1 && addChance > 2 && emeraldExist == false) {
                        // addChance == 0
                        this.map[r][c] = 3;
                        this.map[r][c + 1] = 3;
                        this.map[r + 1][c] = 3;
                        this.map[r + 1][c + 1] = 3;
                        emeraldExist = true;
                    } else if (addChance > 2) {
                        this.map[r][c] = 2;
                        this.map[r][c + 1] = 2;
                        this.map[r + 1][c] = 2;
                        this.map[r + 1][c + 1] = 2;
                    }
                }
            }
        }
    }

    getGame(args, user) {
        if (this.users.length < 2) {
            // when 1st player joins.
            // cant be done on game start cuz the 1st user wont have treasure map
            this.map = Array.from({length: 10}, () => Array(10).fill(0));
            this.gemLocations = [];
            this.addTreasure();
        }
        user.send("get_treasure_game", {
            users: this.playingUsers,
            started: this.started,
            turn: this.currentTurn,
            rows: this.rowClears,
            cols: this.colClears,
            coinsAmt: this.coinsFound,
            gemsAmt: this.gemsFound,
            emeraldAmt: this.emeraldFound,
            totalMoves: this.totalMoves,
            x: this.map,
            y: this.gemLocations,
        });
    }

    sendMove(args, user) {
        this.currentTurn = args.turn;

        if (!this.started) {
            return;
        }
        if (!this.isValidMove(args.move, args.turn)) {
            return;
        }

        this.makeMove(args.move, args.turn);

        this.totalMoves -= 1;
        this.checkStamps();

        this.send("send_treasure_move", {
            turn: this.currentTurn,
            coinsAmt: this.coinsFound,
            gemsAmt: this.gemsFound,
            emeraldAmt: this.emeraldFound,
            gameOver: this.isGameOver(),
            move: args.move, // index
        });

        if (this.isGameOver()) {
            this.sendGameOver();
            return;
        }
        this.currentTurn = this.currentTurn === 1 ? 2 : 1;
    }

    isValidMove(move, turn) {
        if (turn == 1 && this.rowClears[move] != 1) {
            return true;
        } else if (turn == 2 && this.colClears[move] != 1) {
            return true;
        }
        return false;
    }

    makeMove(move, turn) {
        if (turn == 1) {
            this.rowClears[move] = 1;
        } else {
            this.colClears[move] = 1;
        }
        this.updateTreasureArgs(move, turn);
    }

    addCoins() {
        for (let x = 0; x < this.MAXCOINS; x++) {
            let r = this.getRandom(10); // random coord
            let c = this.getRandom(10);
            if (this.map[c][r] == 0) {
                this.map[c][r] = 1;
            }
        }
    }

    updateTreasureArgs(move, turn) {
        let index = move;
        if (turn == 1) {
            // row
            for (let i = 0; i < 10; i++) {
                if (this.map[index][i] == 1) {
                    if (this.colClears[i] == 1) {
                        this.coinsFound++;
                        this.map[index][i] *= -1;
                    }
                }
                if (this.map[index][i] == 2 || this.map[index][i] == 3) {
                    if (this.colClears[i] == 1) {
                        this.map[index][i] *= -1;
                        this.hasGemFound();
                    }
                }
            }
        } else {
            for (let i = 0; i < 10; i++) {
                if (this.map[i][index] == 1) {
                    if (this.rowClears[i] == 1) {
                        this.coinsFound++;
                        this.map[i][index] *= -1;
                    }
                }
                if (this.map[i][index] == 2 || this.map[i][index] == 3) {
                    if (this.rowClears[i] == 1) {
                        this.map[i][index] *= -1;
                        this.hasGemFound();
                    }
                }
            }
        }
    }

    hasGemFound() {
        this.gemsFound = 0;
        this.emeraldFound = 0;
        for (let r = 0; r < this.MAXGEMS; r++) {
            // top-left coord
            let row = this.gemLocations[r][0];
            let col = this.gemLocations[r][1];

            // 2x2 tile
            if (
                this.map[row][col] == -2 &&
                this.map[row + 1][col] == -2 &&
                this.map[row][col + 1] == -2 &&
                this.map[row + 1][col + 1] == -2
            ) {
                this.gemsFound++;
            } else if (
                this.map[row][col] == -3 &&
                this.map[row + 1][col] == -3 &&
                this.map[row][col + 1] == -3 &&
                this.map[row + 1][col + 1] == -3
            ) {
                this.emeraldFound = 1;
            }
        }
    }

    addTreasure() {
        this.addCoins();
        this.addGems();
    }

    isGameOver() {
        if (this.totalMoves < 1) {
            return true;
        } else {
            return false;
        }
    }

    sendGameOver() {
        const totalAmt =
            this.coinsFound + this.gemsFound * this.gemMultiplier + this.emeraldFound * this.emeraldMultiplier || 0;

        this.users[0].updateCoins(totalAmt);
        this.users[1].updateCoins(totalAmt);
        this.users[0].send("game_over", {earned: totalAmt, coins: this.users[0].data.coins});
        this.users[1].send("game_over", {earned: totalAmt, coins: this.users[1].data.coins});

        this.reset();
    }

    toJSON() {
        return {
            users: this.playingUsers,
            started: this.started,
            currentTurn: this.currentTurn,
        };
    }

    getRandom(maxValue) {
        return Math.floor(Math.random() * maxValue);
    }

    checkStamps() {
        if (this.coinsFound > 7) {
            for (let i = 0; i < 2; i++) {
                // collector    416
                if (!this.users[i].stamps.includes(416)) {
                    this.users[i].stamps.add(416);
                    this.users[i].send("stamp_earned", {id: 416, name: "Collector", category: 56, difficulty: 2});
                }
            }
        }

        if (this.emeraldFound > 0) {
            for (let i = 0; i < 2; i++) {
                // in the rough 418
                if (!this.users[i].stamps.includes(418)) {
                    this.users[i].stamps.add(418);
                    this.users[i].send("stamp_earned", {id: 418, name: "In the Rough", category: 56, difficulty: 3});
                }
            }
        }

        if (this.gemsFound + this.emeraldFound > 1) {
            for (let i = 0; i < 2; i++) {
                // gem skills   414
                if (!this.users[i].stamps.includes(414)) {
                    this.users[i].stamps.add(414);
                    this.users[i].send("stamp_earned", {id: 414, name: "Gem Skills", category: 56, difficulty: 2});
                }
            }
        }

        if (this.totalMoves > 5 && this.gemsFound + this.emeraldFound > 0) {
            for (let i = 0; i < 2; i++) {
                // gem expert   420
                if (!this.users[i].stamps.includes(420)) {
                    this.users[i].stamps.add(420);
                    this.users[i].send("stamp_earned", {id: 420, name: "Gem Expert", category: 56, difficulty: 3});
                }
            }
        }

        if (this.totalMoves > 4 && this.gemsFound + this.emeraldFound > 1) {
            for (let i = 0; i < 2; i++) {
                // gem pro      422
                if (!this.users[i].stamps.includes(422)) {
                    this.users[i].stamps.add(422);
                    this.users[i].send("stamp_earned", {id: 422, name: "Gem Pro", category: 56, difficulty: 4});
                }
            }
        }
    }
}

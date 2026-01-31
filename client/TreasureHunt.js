import BaseContainer from '@scenes/base/BaseContainer'

import {Button, DraggableContainer, Draggable, Interactive, Animation} from '@components/components'
import TreasureHuntPlayer from './TreasureHuntPlayer'
import TreasureSandbox from './TreasureSandbox'

export const preload = {
    key: 'treasurehunt',
    url: 'assets/media/games/treasurehunt/treasurehunt.json',
    loadString: 'treasurehunt'
}

/* START OF COMPILED CODE */

export default class TreasureHunt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 469);

        /** @type {Phaser.GameObjects.Text} */
        this.gemsAmt;
        /** @type {Phaser.GameObjects.Text} */
        this.coinsAmt;
        /** @type {Phaser.GameObjects.Text} */
        this.totalAmt;
        /** @type {TreasureHuntPlayer} */
        this.treasureHuntPlayer1;
        /** @type {TreasureHuntPlayer} */
        this.treasureHuntPlayer2;
        /** @type {TreasureSandbox} */
        this.treasureSandbox;
        /** @type {Phaser.GameObjects.Image} */
        this.emeraldFoundBG;
        /** @type {Phaser.GameObjects.Sprite} */
        this.emeraldFoundAnim;


        // block
        const block = scene.add.rectangle(-760, -469, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0;
        this.add(block);

        // window
        const window = scene.add.image(0, 11, "treasurehunt", "bg");
        this.add(window);

        // sandBox
        const sandBox = scene.add.image(24, 86, "treasurehunt", "sandBox");
        this.add(sandBox);

        // chestIcon
        const chestIcon = scene.add.image(122, 350, "treasurehunt", "chestIcon");
        this.add(chestIcon);

        // close
        const close = scene.add.image(263, -302, "treasurehunt", "close");
        this.add(close);

        // coinIcon
        const coinIcon = scene.add.image(-69, 350, "treasurehunt", "coinIcon");
        this.add(coinIcon);

        // gemIcon
        const gemIcon = scene.add.image(-257, 350, "treasurehunt", "gemIcon");
        this.add(gemIcon);

        // gemsAmt
        const gemsAmt = scene.add.text(-229, 340, "", {});
        gemsAmt.text = "Gems: 0";
        gemsAmt.setStyle({ "fontFamily": "CCFaceFront", "fontSize": "22px" });
        this.add(gemsAmt);

        // coinsAmt
        const coinsAmt = scene.add.text(-42, 340, "", {});
        coinsAmt.text = "Coins: 0";
        coinsAmt.setStyle({ "fontFamily": "CCFaceFront", "fontSize": "22px" });
        this.add(coinsAmt);

        // totalAmt
        const totalAmt = scene.add.text(152, 340, "", {});
        totalAmt.text = "Total: 0";
        totalAmt.setStyle({ "fontFamily": "CCFaceFront", "fontSize": "22px" });
        this.add(totalAmt);

        // treasureHuntPlayer1
        const treasureHuntPlayer1 = new TreasureHuntPlayer(scene, -262, -333);
        this.add(treasureHuntPlayer1);

        // treasureHuntPlayer2
        const treasureHuntPlayer2 = new TreasureHuntPlayer(scene, -262, -273);
        this.add(treasureHuntPlayer2);

        // treasureSandbox
        const treasureSandbox = new TreasureSandbox(scene, -189, -127);
        this.add(treasureSandbox);

        // emeraldFoundBG
        const emeraldFoundBG = scene.add.image(-306, -336, "treasurehunt", "emarldFoundBG");
        emeraldFoundBG.setOrigin(0, 0);
        emeraldFoundBG.visible = false;
        this.add(emeraldFoundBG);

        // emeraldFoundAnim
        const emeraldFoundAnim = scene.add.sprite(26, 0, "treasurehunt", "emeraldFound_0014");
        emeraldFoundAnim.visible = false;
        this.add(emeraldFoundAnim);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = window;

        // block (components)
        new Interactive(block);

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => {this.close()};
        closeButton.activeFrame = false;

        // emeraldFoundAnim (components)
        const emeraldFoundAnimAnimation = new Animation(emeraldFoundAnim);
        emeraldFoundAnimAnimation.key = "emeraldFound_";
        emeraldFoundAnimAnimation.start = 14;
        emeraldFoundAnimAnimation.end = 55;
        emeraldFoundAnimAnimation.repeat = 0;
        emeraldFoundAnimAnimation.autoPlay = false;
        emeraldFoundAnimAnimation.showOnStart = true;
        emeraldFoundAnimAnimation.hideOnComplete = true;

        this.gemsAmt = gemsAmt;
        this.coinsAmt = coinsAmt;
        this.totalAmt = totalAmt;
        this.treasureHuntPlayer1 = treasureHuntPlayer1;
        this.treasureHuntPlayer2 = treasureHuntPlayer2;
        this.treasureSandbox = treasureSandbox;
        this.emeraldFoundBG = emeraldFoundBG;
        this.emeraldFoundAnim = emeraldFoundAnim;

        /* START-USER-CTR-CODE */
        // Write your code here
        this.popupPlayed = false;
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {                // before game has officially started
        this.currentTurn = 1
        this.myTurn = null

        this.started = false
        this.gameOver = false

        this.treasureSandbox.invisibleButtons(this.currentTurn, false)

        super.show()

        this.addListeners()
        this.network.send('get_treasure_game')

        this.treasureSandbox.init()
    }

    close() {
        if (!this.started) {
            return this.sendLeaveTable()
        }

        this.interface.prompt.showWindow(this.getString('quit_game_prompt'), 'dual', () => {
            this.sendLeaveTable()

            this.interface.prompt.window.visible = false
        })
    }

    addListeners() {
        this.network.events.on('get_treasure_game', this.handleGetGame, this)
        this.network.events.on('join_treasure_game', this.handleJoinGame, this)

        this.network.events.on('start_treasure_game', this.handleStartGame, this)
        this.network.events.on('close_treasure_game', this.handleCloseGame, this)

        this.network.events.on('update_treasure_game', this.handleUpdateGame, this)
        this.network.events.on('send_treasure_move', this.handleDigMove, this)
    }

    removeListeners() {
        this.network.events.off('get_treasure_game', this.handleGetGame, this)
        this.network.events.off('join_treasure_game', this.handleJoinGame, this)

        this.network.events.off('start_treasure_game', this.handleStartGame, this)
        this.network.events.off('close_treasure_game', this.handleCloseGame, this)

        this.network.events.off('update_treasure_game', this.handleUpdateGame, this)
        this.network.events.off('send_treasure_move', this.handleDigMove, this)
    }

    resetGame() {
        // map is populated w 10 rows/cols & 2 layers of sand
        // & random + uncovered coins/gems/emeralds (Map of coords)
        // changes in the map are shown thru cleared rows/cols
        this.treasureSandbox.reset()

        // & found coins/gems/emeralds (reset in server)
        this.coinsAmt.text= `Coins: 0`
        this.gemsAmt.text= `Gems: 0`
        this.totalAmt.text= `Total: 0`

        // to keep going, game relies on currentturn, users 
        this.currentTurn = 1
        this.treasureHuntPlayer1.reset()
        this.treasureHuntPlayer2.reset()

        this.started = false
        this.popupPlayed = false;
    }

    onDigClick(move){
        if (!this.isMyTurn) {
            return
        }

        this.network.send('send_treasure_move', 
        { turn: this.currentTurn,
            move: move,
        })
    }

    handleDigMove(args){
        // 1. sandbox (clear, upd8 tiles)

        if (this.currentTurn == 1 && args.move != null){
            this.treasureSandbox.rowClear(args.move)
        } else if (args.move != null) {
            this.treasureSandbox.colClear(args.move) 
        }

        // 2. 
        if(args.emeraldAmt> 0 && !this.popupPlayed) {
            this.popupPlayed = true;
            this.emeraldFoundAnim.__Animation.play()
            this.emeraldFoundBG.visible = true
            this.emeraldFoundAnim.on('animationcomplete', () => this.emeraldFoundBG.visible = false)
        }

        // 3. 
        this.updateScore(args)

        // 4. upd8 player spades & moves       
        this[`treasureHuntPlayer${this.currentTurn}`].updateSpades()

        // 5. if no moves left for either, game over    (in server)
       if (!args.gameOver){
            // change turn to other player
            this.currentTurn = (this.currentTurn == 1 ? 2 : 1) 

            // set players active
            this.treasureHuntPlayer1.setActive() 
            this.treasureHuntPlayer2.setActive()
            this.updateDigButtonStatus()
        } else { // close after 3.5s after last dig is clicked
            this.treasureSandbox.invisibleButtons(1, false)
            setTimeout(() => 
            {return this.sendLeaveTable()}, 
            2000)

        }
    }

    updateDigButtonStatus(){
        // show dig buttons only for currentturn player
        this.treasureSandbox.invisibleButtons(this.currentTurn, this.isMyTurn)
    }

    updateScore(args){
        this.coinsAmt.text =  `Coins: ${args.coinsAmt}`
        this.gemsAmt.text =  `Gems: ${(args.gemsAmt + args.emeraldAmt)}`

        const gemMultiplier = 25;
        const emeraldMultiplier = 100; 
        let total = args.coinsAmt + (args.gemsAmt * gemMultiplier) + (args.emeraldAmt * emeraldMultiplier) || 0
        this.totalAmt.text = `Total: ${total}`
    }

    handleStartGame() {
        this.started = true
        this.treasureHuntPlayer1.setActive()
        this.treasureHuntPlayer2.setActive()
        this.updateDigButtonStatus()
    }

    handleGetGame(args){
        this.currentTurn = args.turn
        this.treasureSandbox.setupMap(args.x, args.y)

        for (let user of args.users) {
            this.setPlayer(user, args.users.indexOf(user) + 1)
        }

         // for spectators--> get client up to date with server arguments
         if (args.started) { 
            this.spectatorJoin(args)
        }

        this.network.send('join_treasure_game')
    }

    spectatorJoin(args) {
        // clear their columns for when they werent there (since this is a client-side action) 
        // (no msg is sent here so its just them)
        for (let i=0; i < 10; i++){
            if (args.rows[i] == 1) {
                this.treasureSandbox.rowClear(i)
            }
            if (args.cols[i] == 1) {
                this.treasureSandbox.colClear(i)
            }
        }

        (args.emeraldAmt > 0)? this.popupPlayed=true : this.popupPlayed=false
        this.currentTurn = (args.turn == 1 ? 1 : 2) 

        // get updated spades (also client-side)
        this.treasureHuntPlayer1.updateSpadesAmt(Math.ceil((12-args.totalMoves)/2))
        this.treasureHuntPlayer2.updateSpadesAmt(Math.floor((12-args.totalMoves)/2))

        // coin arguments (bc update only after the moves here client-side)
        this.updateScore(args)
        this.treasureHuntPlayer1.setActive() 
        this.treasureHuntPlayer2.setActive()
    }

    handleJoinGame(args) {
        this.myTurn = args.turn
    }

    handleUpdateGame(args) {
        this.setPlayer(args.username, args.turn)
    }

    setPlayer(username, turn) {
        let player = this[`treasureHuntPlayer${turn}`]
        player.set(username, turn)
    }


    handleCloseGame(args) {
        if (args.username) {
            let text = this.getFormatString('player_quit_prompt', args.username)
            this.interface.prompt.showWindow(text, 'single')
        }
        // Wait for turn to finish
        if (args.gameOver) {
            this.gameOver = true
            return
        }
        this.leaveTable()
        console.log('is this how game ends?')
    }


    get isMyTurn() {
        return this.currentTurn === this.myTurn
    }

    get currentPlayer() {
        return this[`treasureHuntPlayer${this.currentTurn}`]
    }

    sendLeaveTable() {
        this.network.send('leave_table')
        this.leaveTable()
    }

    leaveTable() {
        this.removeListeners()
        this.resetGame()

        super.close()

        this.world.client.sendLeaveSeat()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

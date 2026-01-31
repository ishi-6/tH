
// You can write more code here
import { Button, Animation } from '@components/components'
import TreasureCoin from './TreasureCoin';
import TreasureGem from './TreasureGem';
import TreasureEmerald from './TreasureEmerald';
import TreasureShine from './TreasureShine'

/* START OF COMPILED CODE */

export default class TreasureSandbox extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 100, y ?? 100);

        // bottomLayer
        const bottomLayer = scene.add.container(0, 0);
        this.add(bottomLayer);

        // bottomSand
        const bottomSand = scene.add.image(0, 0, "treasurehunt", "bottomsand");
        bottomSand.setOrigin(0, 0);
        bottomLayer.add(bottomSand);

        // secondLayer
        const secondLayer = scene.add.container(0, 0);
        this.add(secondLayer);

        // row28
        const row28 = scene.add.container(0, 336);
        secondLayer.add(row28);

        // tile2_83
        const tile2_83 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile2_83.scaleX = 0.97;
        tile2_83.scaleY = 0.97;
        tile2_83.setOrigin(0, 0);
        row28.add(tile2_83);

        // tile2_82
        const tile2_82 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile2_82.scaleX = 0.97;
        tile2_82.scaleY = 0.97;
        tile2_82.setOrigin(0, 0);
        row28.add(tile2_82);

        // tile2_81
        const tile2_81 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile2_81.scaleX = 0.97;
        tile2_81.scaleY = 0.97;
        tile2_81.setOrigin(0, 0);
        row28.add(tile2_81);

        // tile2_80
        const tile2_80 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile2_80.scaleX = 0.97;
        tile2_80.scaleY = 0.97;
        tile2_80.setOrigin(0, 0);
        row28.add(tile2_80);

        // tile2_87
        const tile2_87 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile2_87.scaleX = 0.97;
        tile2_87.scaleY = 0.97;
        tile2_87.setOrigin(0, 0);
        row28.add(tile2_87);

        // tile2_86
        const tile2_86 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile2_86.scaleX = 0.97;
        tile2_86.scaleY = 0.97;
        tile2_86.setOrigin(0, 0);
        row28.add(tile2_86);

        // tile2_85
        const tile2_85 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile2_85.scaleX = 0.97;
        tile2_85.scaleY = 0.97;
        tile2_85.setOrigin(0, 0);
        row28.add(tile2_85);

        // tile2_84
        const tile2_84 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile2_84.scaleX = 0.97;
        tile2_84.scaleY = 0.97;
        tile2_84.setOrigin(0, 0);
        row28.add(tile2_84);

        // tile2_89
        const tile2_89 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile2_89.scaleX = 0.97;
        tile2_89.scaleY = 0.97;
        tile2_89.setOrigin(0, 0);
        row28.add(tile2_89);

        // tile2_88
        const tile2_88 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile2_88.scaleX = 0.97;
        tile2_88.scaleY = 0.97;
        tile2_88.setOrigin(0, 0);
        row28.add(tile2_88);

        // row27
        const row27 = scene.add.container(0, 294);
        secondLayer.add(row27);

        // tile2_73
        const tile2_73 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile2_73.scaleX = 0.97;
        tile2_73.scaleY = 0.97;
        tile2_73.setOrigin(0, 0);
        row27.add(tile2_73);

        // tile2_72
        const tile2_72 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile2_72.scaleX = 0.97;
        tile2_72.scaleY = 0.97;
        tile2_72.setOrigin(0, 0);
        row27.add(tile2_72);

        // tile2_71
        const tile2_71 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile2_71.scaleX = 0.97;
        tile2_71.scaleY = 0.97;
        tile2_71.setOrigin(0, 0);
        row27.add(tile2_71);

        // tile2_70
        const tile2_70 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile2_70.scaleX = 0.97;
        tile2_70.scaleY = 0.97;
        tile2_70.setOrigin(0, 0);
        row27.add(tile2_70);

        // tile2_77
        const tile2_77 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile2_77.scaleX = 0.97;
        tile2_77.scaleY = 0.97;
        tile2_77.setOrigin(0, 0);
        row27.add(tile2_77);

        // tile2_76
        const tile2_76 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile2_76.scaleX = 0.97;
        tile2_76.scaleY = 0.97;
        tile2_76.setOrigin(0, 0);
        row27.add(tile2_76);

        // tile2_75
        const tile2_75 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile2_75.scaleX = 0.97;
        tile2_75.scaleY = 0.97;
        tile2_75.setOrigin(0, 0);
        row27.add(tile2_75);

        // tile2_74
        const tile2_74 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile2_74.scaleX = 0.97;
        tile2_74.scaleY = 0.97;
        tile2_74.setOrigin(0, 0);
        row27.add(tile2_74);

        // tile2_79
        const tile2_79 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile2_79.scaleX = 0.97;
        tile2_79.scaleY = 0.97;
        tile2_79.setOrigin(0, 0);
        row27.add(tile2_79);

        // tile2_78
        const tile2_78 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile2_78.scaleX = 0.97;
        tile2_78.scaleY = 0.97;
        tile2_78.setOrigin(0, 0);
        row27.add(tile2_78);

        // row26
        const row26 = scene.add.container(0, 252);
        secondLayer.add(row26);

        // tile2_63
        const tile2_63 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile2_63.scaleX = 0.97;
        tile2_63.scaleY = 0.97;
        tile2_63.setOrigin(0, 0);
        row26.add(tile2_63);

        // tile2_62
        const tile2_62 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile2_62.scaleX = 0.97;
        tile2_62.scaleY = 0.97;
        tile2_62.setOrigin(0, 0);
        row26.add(tile2_62);

        // tile2_61
        const tile2_61 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile2_61.scaleX = 0.97;
        tile2_61.scaleY = 0.97;
        tile2_61.setOrigin(0, 0);
        row26.add(tile2_61);

        // tile2_60
        const tile2_60 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile2_60.scaleX = 0.97;
        tile2_60.scaleY = 0.97;
        tile2_60.setOrigin(0, 0);
        row26.add(tile2_60);

        // tile2_67
        const tile2_67 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile2_67.scaleX = 0.97;
        tile2_67.scaleY = 0.97;
        tile2_67.setOrigin(0, 0);
        row26.add(tile2_67);

        // tile2_66
        const tile2_66 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile2_66.scaleX = 0.97;
        tile2_66.scaleY = 0.97;
        tile2_66.setOrigin(0, 0);
        row26.add(tile2_66);

        // tile2_65
        const tile2_65 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile2_65.scaleX = 0.97;
        tile2_65.scaleY = 0.97;
        tile2_65.setOrigin(0, 0);
        row26.add(tile2_65);

        // tile2_64
        const tile2_64 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile2_64.scaleX = 0.97;
        tile2_64.scaleY = 0.97;
        tile2_64.setOrigin(0, 0);
        row26.add(tile2_64);

        // tile2_69
        const tile2_69 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile2_69.scaleX = 0.97;
        tile2_69.scaleY = 0.97;
        tile2_69.setOrigin(0, 0);
        row26.add(tile2_69);

        // tile2_68
        const tile2_68 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile2_68.scaleX = 0.97;
        tile2_68.scaleY = 0.97;
        tile2_68.setOrigin(0, 0);
        row26.add(tile2_68);

        // row25
        const row25 = scene.add.container(0, 210);
        secondLayer.add(row25);

        // tile2_53
        const tile2_53 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile2_53.scaleX = 0.97;
        tile2_53.scaleY = 0.97;
        tile2_53.setOrigin(0, 0);
        row25.add(tile2_53);

        // tile2_52
        const tile2_52 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile2_52.scaleX = 0.97;
        tile2_52.scaleY = 0.97;
        tile2_52.setOrigin(0, 0);
        row25.add(tile2_52);

        // tile2_51
        const tile2_51 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile2_51.scaleX = 0.97;
        tile2_51.scaleY = 0.97;
        tile2_51.setOrigin(0, 0);
        row25.add(tile2_51);

        // tile2_50
        const tile2_50 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile2_50.scaleX = 0.97;
        tile2_50.scaleY = 0.97;
        tile2_50.setOrigin(0, 0);
        row25.add(tile2_50);

        // tile2_57
        const tile2_57 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile2_57.scaleX = 0.97;
        tile2_57.scaleY = 0.97;
        tile2_57.setOrigin(0, 0);
        row25.add(tile2_57);

        // tile2_56
        const tile2_56 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile2_56.scaleX = 0.97;
        tile2_56.scaleY = 0.97;
        tile2_56.setOrigin(0, 0);
        row25.add(tile2_56);

        // tile2_55
        const tile2_55 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile2_55.scaleX = 0.97;
        tile2_55.scaleY = 0.97;
        tile2_55.setOrigin(0, 0);
        row25.add(tile2_55);

        // tile2_54
        const tile2_54 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile2_54.scaleX = 0.97;
        tile2_54.scaleY = 0.97;
        tile2_54.setOrigin(0, 0);
        row25.add(tile2_54);

        // tile2_59
        const tile2_59 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile2_59.scaleX = 0.97;
        tile2_59.scaleY = 0.97;
        tile2_59.setOrigin(0, 0);
        row25.add(tile2_59);

        // tile2_58
        const tile2_58 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile2_58.scaleX = 0.97;
        tile2_58.scaleY = 0.97;
        tile2_58.setOrigin(0, 0);
        row25.add(tile2_58);

        // row24
        const row24 = scene.add.container(0, 168);
        secondLayer.add(row24);

        // tile2_43
        const tile2_43 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile2_43.scaleX = 0.97;
        tile2_43.scaleY = 0.97;
        tile2_43.setOrigin(0, 0);
        row24.add(tile2_43);

        // tile2_42
        const tile2_42 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile2_42.scaleX = 0.97;
        tile2_42.scaleY = 0.97;
        tile2_42.setOrigin(0, 0);
        row24.add(tile2_42);

        // tile2_41
        const tile2_41 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile2_41.scaleX = 0.97;
        tile2_41.scaleY = 0.97;
        tile2_41.setOrigin(0, 0);
        row24.add(tile2_41);

        // tile2_40
        const tile2_40 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile2_40.scaleX = 0.97;
        tile2_40.scaleY = 0.97;
        tile2_40.setOrigin(0, 0);
        row24.add(tile2_40);

        // tile2_47
        const tile2_47 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile2_47.scaleX = 0.97;
        tile2_47.scaleY = 0.97;
        tile2_47.setOrigin(0, 0);
        row24.add(tile2_47);

        // tile2_46
        const tile2_46 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile2_46.scaleX = 0.97;
        tile2_46.scaleY = 0.97;
        tile2_46.setOrigin(0, 0);
        row24.add(tile2_46);

        // tile2_45
        const tile2_45 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile2_45.scaleX = 0.97;
        tile2_45.scaleY = 0.97;
        tile2_45.setOrigin(0, 0);
        row24.add(tile2_45);

        // tile2_44
        const tile2_44 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile2_44.scaleX = 0.97;
        tile2_44.scaleY = 0.97;
        tile2_44.setOrigin(0, 0);
        row24.add(tile2_44);

        // tile2_49
        const tile2_49 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile2_49.scaleX = 0.97;
        tile2_49.scaleY = 0.97;
        tile2_49.setOrigin(0, 0);
        row24.add(tile2_49);

        // tile2_48
        const tile2_48 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile2_48.scaleX = 0.97;
        tile2_48.scaleY = 0.97;
        tile2_48.setOrigin(0, 0);
        row24.add(tile2_48);

        // row23
        const row23 = scene.add.container(0, 126);
        secondLayer.add(row23);

        // tile2_33
        const tile2_33 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile2_33.scaleX = 0.97;
        tile2_33.scaleY = 0.97;
        tile2_33.setOrigin(0, 0);
        row23.add(tile2_33);

        // tile2_32
        const tile2_32 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile2_32.scaleX = 0.97;
        tile2_32.scaleY = 0.97;
        tile2_32.setOrigin(0, 0);
        row23.add(tile2_32);

        // tile2_31
        const tile2_31 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile2_31.scaleX = 0.97;
        tile2_31.scaleY = 0.97;
        tile2_31.setOrigin(0, 0);
        row23.add(tile2_31);

        // tile2_30
        const tile2_30 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile2_30.scaleX = 0.97;
        tile2_30.scaleY = 0.97;
        tile2_30.setOrigin(0, 0);
        row23.add(tile2_30);

        // tile2_37
        const tile2_37 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile2_37.scaleX = 0.97;
        tile2_37.scaleY = 0.97;
        tile2_37.setOrigin(0, 0);
        row23.add(tile2_37);

        // tile2_36
        const tile2_36 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile2_36.scaleX = 0.97;
        tile2_36.scaleY = 0.97;
        tile2_36.setOrigin(0, 0);
        row23.add(tile2_36);

        // tile2_35
        const tile2_35 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile2_35.scaleX = 0.97;
        tile2_35.scaleY = 0.97;
        tile2_35.setOrigin(0, 0);
        row23.add(tile2_35);

        // tile2_34
        const tile2_34 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile2_34.scaleX = 0.97;
        tile2_34.scaleY = 0.97;
        tile2_34.setOrigin(0, 0);
        row23.add(tile2_34);

        // tile2_39
        const tile2_39 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile2_39.scaleX = 0.97;
        tile2_39.scaleY = 0.97;
        tile2_39.setOrigin(0, 0);
        row23.add(tile2_39);

        // tile2_38
        const tile2_38 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile2_38.scaleX = 0.97;
        tile2_38.scaleY = 0.97;
        tile2_38.setOrigin(0, 0);
        row23.add(tile2_38);

        // row22
        const row22 = scene.add.container(0, 84);
        secondLayer.add(row22);

        // tile2_23
        const tile2_23 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile2_23.scaleX = 0.97;
        tile2_23.scaleY = 0.97;
        tile2_23.setOrigin(0, 0);
        row22.add(tile2_23);

        // tile2_22
        const tile2_22 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile2_22.scaleX = 0.97;
        tile2_22.scaleY = 0.97;
        tile2_22.setOrigin(0, 0);
        row22.add(tile2_22);

        // tile2_21
        const tile2_21 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile2_21.scaleX = 0.97;
        tile2_21.scaleY = 0.97;
        tile2_21.setOrigin(0, 0);
        row22.add(tile2_21);

        // tile2_20
        const tile2_20 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile2_20.scaleX = 0.97;
        tile2_20.scaleY = 0.97;
        tile2_20.setOrigin(0, 0);
        row22.add(tile2_20);

        // tile2_27
        const tile2_27 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile2_27.scaleX = 0.97;
        tile2_27.scaleY = 0.97;
        tile2_27.setOrigin(0, 0);
        row22.add(tile2_27);

        // tile2_26
        const tile2_26 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile2_26.scaleX = 0.97;
        tile2_26.scaleY = 0.97;
        tile2_26.setOrigin(0, 0);
        row22.add(tile2_26);

        // tile2_25
        const tile2_25 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile2_25.scaleX = 0.97;
        tile2_25.scaleY = 0.97;
        tile2_25.setOrigin(0, 0);
        row22.add(tile2_25);

        // tile2_24
        const tile2_24 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile2_24.scaleX = 0.97;
        tile2_24.scaleY = 0.97;
        tile2_24.setOrigin(0, 0);
        row22.add(tile2_24);

        // tile2_29
        const tile2_29 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile2_29.scaleX = 0.97;
        tile2_29.scaleY = 0.97;
        tile2_29.setOrigin(0, 0);
        row22.add(tile2_29);

        // tile2_28
        const tile2_28 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile2_28.scaleX = 0.97;
        tile2_28.scaleY = 0.97;
        tile2_28.setOrigin(0, 0);
        row22.add(tile2_28);

        // row21
        const row21 = scene.add.container(0, 42);
        secondLayer.add(row21);

        // tile2_13
        const tile2_13 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile2_13.scaleX = 0.97;
        tile2_13.scaleY = 0.97;
        tile2_13.setOrigin(0, 0);
        row21.add(tile2_13);

        // tile2_12
        const tile2_12 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile2_12.scaleX = 0.97;
        tile2_12.scaleY = 0.97;
        tile2_12.setOrigin(0, 0);
        row21.add(tile2_12);

        // tile2_11
        const tile2_11 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile2_11.scaleX = 0.97;
        tile2_11.scaleY = 0.97;
        tile2_11.setOrigin(0, 0);
        row21.add(tile2_11);

        // tile2_10
        const tile2_10 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile2_10.scaleX = 0.97;
        tile2_10.scaleY = 0.97;
        tile2_10.setOrigin(0, 0);
        row21.add(tile2_10);

        // tile2_17
        const tile2_17 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile2_17.scaleX = 0.97;
        tile2_17.scaleY = 0.97;
        tile2_17.setOrigin(0, 0);
        row21.add(tile2_17);

        // tile2_16
        const tile2_16 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile2_16.scaleX = 0.97;
        tile2_16.scaleY = 0.97;
        tile2_16.setOrigin(0, 0);
        row21.add(tile2_16);

        // tile2_15
        const tile2_15 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile2_15.scaleX = 0.97;
        tile2_15.scaleY = 0.97;
        tile2_15.setOrigin(0, 0);
        row21.add(tile2_15);

        // tile2_14
        const tile2_14 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile2_14.scaleX = 0.97;
        tile2_14.scaleY = 0.97;
        tile2_14.setOrigin(0, 0);
        row21.add(tile2_14);

        // tile2_19
        const tile2_19 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile2_19.scaleX = 0.97;
        tile2_19.scaleY = 0.97;
        tile2_19.setOrigin(0, 0);
        row21.add(tile2_19);

        // tile2_18
        const tile2_18 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile2_18.scaleX = 0.97;
        tile2_18.scaleY = 0.97;
        tile2_18.setOrigin(0, 0);
        row21.add(tile2_18);

        // row20
        const row20 = scene.add.container(0, 0);
        secondLayer.add(row20);

        // tile2_03
        const tile2_03 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile2_03.scaleX = 0.97;
        tile2_03.scaleY = 0.97;
        tile2_03.setOrigin(0, 0);
        row20.add(tile2_03);

        // tile2_02
        const tile2_02 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile2_02.scaleX = 0.97;
        tile2_02.scaleY = 0.97;
        tile2_02.setOrigin(0, 0);
        row20.add(tile2_02);

        // tile2_01
        const tile2_01 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile2_01.scaleX = 0.97;
        tile2_01.scaleY = 0.97;
        tile2_01.setOrigin(0, 0);
        row20.add(tile2_01);

        // tile2_00
        const tile2_00 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile2_00.scaleX = 0.97;
        tile2_00.scaleY = 0.97;
        tile2_00.setOrigin(0, 0);
        row20.add(tile2_00);

        // tile2_07
        const tile2_07 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile2_07.scaleX = 0.97;
        tile2_07.scaleY = 0.97;
        tile2_07.setOrigin(0, 0);
        row20.add(tile2_07);

        // tile2_06
        const tile2_06 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile2_06.scaleX = 0.97;
        tile2_06.scaleY = 0.97;
        tile2_06.setOrigin(0, 0);
        row20.add(tile2_06);

        // tile2_05
        const tile2_05 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile2_05.scaleX = 0.97;
        tile2_05.scaleY = 0.97;
        tile2_05.setOrigin(0, 0);
        row20.add(tile2_05);

        // tile2_04
        const tile2_04 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile2_04.scaleX = 0.97;
        tile2_04.scaleY = 0.97;
        tile2_04.setOrigin(0, 0);
        row20.add(tile2_04);

        // tile2_09
        const tile2_09 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile2_09.scaleX = 0.97;
        tile2_09.scaleY = 0.97;
        tile2_09.setOrigin(0, 0);
        row20.add(tile2_09);

        // tile2_08
        const tile2_08 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile2_08.scaleX = 0.97;
        tile2_08.scaleY = 0.97;
        tile2_08.setOrigin(0, 0);
        row20.add(tile2_08);

        // row29
        const row29 = scene.add.container(0, 378);
        secondLayer.add(row29);

        // tile2_93
        const tile2_93 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile2_93.scaleX = 0.97;
        tile2_93.scaleY = 0.97;
        tile2_93.setOrigin(0, 0);
        row29.add(tile2_93);

        // tile2_92
        const tile2_92 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile2_92.scaleX = 0.97;
        tile2_92.scaleY = 0.97;
        tile2_92.setOrigin(0, 0);
        row29.add(tile2_92);

        // tile2_91
        const tile2_91 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile2_91.scaleX = 0.97;
        tile2_91.scaleY = 0.97;
        tile2_91.setOrigin(0, 0);
        row29.add(tile2_91);

        // tile2_90
        const tile2_90 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile2_90.scaleX = 0.97;
        tile2_90.scaleY = 0.97;
        tile2_90.setOrigin(0, 0);
        row29.add(tile2_90);

        // tile2_97
        const tile2_97 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile2_97.scaleX = 0.97;
        tile2_97.scaleY = 0.97;
        tile2_97.setOrigin(0, 0);
        row29.add(tile2_97);

        // tile2_96
        const tile2_96 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile2_96.scaleX = 0.97;
        tile2_96.scaleY = 0.97;
        tile2_96.setOrigin(0, 0);
        row29.add(tile2_96);

        // tile2_95
        const tile2_95 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile2_95.scaleX = 0.97;
        tile2_95.scaleY = 0.97;
        tile2_95.setOrigin(0, 0);
        row29.add(tile2_95);

        // tile2_94
        const tile2_94 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile2_94.scaleX = 0.97;
        tile2_94.scaleY = 0.97;
        tile2_94.setOrigin(0, 0);
        row29.add(tile2_94);

        // tile2_99
        const tile2_99 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile2_99.scaleX = 0.97;
        tile2_99.scaleY = 0.97;
        tile2_99.setOrigin(0, 0);
        row29.add(tile2_99);

        // tile2_98
        const tile2_98 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile2_98.scaleX = 0.97;
        tile2_98.scaleY = 0.97;
        tile2_98.setOrigin(0, 0);
        row29.add(tile2_98);

        // shadow
        const shadow = scene.add.image(213, 214, "treasurehunt", "shadow");
        secondLayer.add(shadow);

        // topLayer
        const topLayer = scene.add.container(0, 0);
        this.add(topLayer);

        // row8
        const row8 = scene.add.container(0, 336);
        topLayer.add(row8);

        // tile_83
        const tile_83 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_83.scaleX = 0.97;
        tile_83.scaleY = 0.97;
        tile_83.setOrigin(0, 0);
        row8.add(tile_83);

        // tile_82
        const tile_82 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile_82.scaleX = 0.97;
        tile_82.scaleY = 0.97;
        tile_82.setOrigin(0, 0);
        row8.add(tile_82);

        // tile_81
        const tile_81 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile_81.scaleX = 0.97;
        tile_81.scaleY = 0.97;
        tile_81.setOrigin(0, 0);
        row8.add(tile_81);

        // tile_80
        const tile_80 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_80.scaleX = 0.97;
        tile_80.scaleY = 0.97;
        tile_80.setOrigin(0, 0);
        row8.add(tile_80);

        // tile_87
        const tile_87 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_87.scaleX = 0.97;
        tile_87.scaleY = 0.97;
        tile_87.setOrigin(0, 0);
        row8.add(tile_87);

        // tile_86
        const tile_86 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_86.scaleX = 0.97;
        tile_86.scaleY = 0.97;
        tile_86.setOrigin(0, 0);
        row8.add(tile_86);

        // tile_85
        const tile_85 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_85.scaleX = 0.97;
        tile_85.scaleY = 0.97;
        tile_85.setOrigin(0, 0);
        row8.add(tile_85);

        // tile_84
        const tile_84 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_84.scaleX = 0.97;
        tile_84.scaleY = 0.97;
        tile_84.setOrigin(0, 0);
        row8.add(tile_84);

        // tile_89
        const tile_89 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_89.scaleX = 0.97;
        tile_89.scaleY = 0.97;
        tile_89.setOrigin(0, 0);
        row8.add(tile_89);

        // tile_88
        const tile_88 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_88.scaleX = 0.97;
        tile_88.scaleY = 0.97;
        tile_88.setOrigin(0, 0);
        row8.add(tile_88);

        // row7
        const row7 = scene.add.container(0, 294);
        topLayer.add(row7);

        // tile_73
        const tile_73 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_73.scaleX = 0.97;
        tile_73.scaleY = 0.97;
        tile_73.setOrigin(0, 0);
        row7.add(tile_73);

        // tile_72
        const tile_72 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile_72.scaleX = 0.97;
        tile_72.scaleY = 0.97;
        tile_72.setOrigin(0, 0);
        row7.add(tile_72);

        // tile_71
        const tile_71 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile_71.scaleX = 0.97;
        tile_71.scaleY = 0.97;
        tile_71.setOrigin(0, 0);
        row7.add(tile_71);

        // tile_70
        const tile_70 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_70.scaleX = 0.97;
        tile_70.scaleY = 0.97;
        tile_70.setOrigin(0, 0);
        row7.add(tile_70);

        // tile_77
        const tile_77 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_77.scaleX = 0.97;
        tile_77.scaleY = 0.97;
        tile_77.setOrigin(0, 0);
        row7.add(tile_77);

        // tile_76
        const tile_76 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_76.scaleX = 0.97;
        tile_76.scaleY = 0.97;
        tile_76.setOrigin(0, 0);
        row7.add(tile_76);

        // tile_75
        const tile_75 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_75.scaleX = 0.97;
        tile_75.scaleY = 0.97;
        tile_75.setOrigin(0, 0);
        row7.add(tile_75);

        // tile_74
        const tile_74 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_74.scaleX = 0.97;
        tile_74.scaleY = 0.97;
        tile_74.setOrigin(0, 0);
        row7.add(tile_74);

        // tile_79
        const tile_79 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_79.scaleX = 0.97;
        tile_79.scaleY = 0.97;
        tile_79.setOrigin(0, 0);
        row7.add(tile_79);

        // tile_78
        const tile_78 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_78.scaleX = 0.97;
        tile_78.scaleY = 0.97;
        tile_78.setOrigin(0, 0);
        row7.add(tile_78);

        // row6
        const row6 = scene.add.container(0, 252);
        topLayer.add(row6);

        // tile_63
        const tile_63 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_63.scaleX = 0.97;
        tile_63.scaleY = 0.97;
        tile_63.setOrigin(0, 0);
        row6.add(tile_63);

        // tile_62
        const tile_62 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile_62.scaleX = 0.97;
        tile_62.scaleY = 0.97;
        tile_62.setOrigin(0, 0);
        row6.add(tile_62);

        // tile_61
        const tile_61 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile_61.scaleX = 0.97;
        tile_61.scaleY = 0.97;
        tile_61.setOrigin(0, 0);
        row6.add(tile_61);

        // tile_60
        const tile_60 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_60.scaleX = 0.97;
        tile_60.scaleY = 0.97;
        tile_60.setOrigin(0, 0);
        row6.add(tile_60);

        // tile_67
        const tile_67 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_67.scaleX = 0.97;
        tile_67.scaleY = 0.97;
        tile_67.setOrigin(0, 0);
        row6.add(tile_67);

        // tile_66
        const tile_66 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_66.scaleX = 0.97;
        tile_66.scaleY = 0.97;
        tile_66.setOrigin(0, 0);
        row6.add(tile_66);

        // tile_65
        const tile_65 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_65.scaleX = 0.97;
        tile_65.scaleY = 0.97;
        tile_65.setOrigin(0, 0);
        row6.add(tile_65);

        // tile_64
        const tile_64 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_64.scaleX = 0.97;
        tile_64.scaleY = 0.97;
        tile_64.setOrigin(0, 0);
        row6.add(tile_64);

        // tile_69
        const tile_69 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_69.scaleX = 0.97;
        tile_69.scaleY = 0.97;
        tile_69.setOrigin(0, 0);
        row6.add(tile_69);

        // tile_68
        const tile_68 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_68.scaleX = 0.97;
        tile_68.scaleY = 0.97;
        tile_68.setOrigin(0, 0);
        row6.add(tile_68);

        // row5
        const row5 = scene.add.container(0, 210);
        topLayer.add(row5);

        // tile_53
        const tile_53 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_53.scaleX = 0.97;
        tile_53.scaleY = 0.97;
        tile_53.setOrigin(0, 0);
        row5.add(tile_53);

        // tile_52
        const tile_52 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile_52.scaleX = 0.97;
        tile_52.scaleY = 0.97;
        tile_52.setOrigin(0, 0);
        row5.add(tile_52);

        // tile_51
        const tile_51 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile_51.scaleX = 0.97;
        tile_51.scaleY = 0.97;
        tile_51.setOrigin(0, 0);
        row5.add(tile_51);

        // tile_50
        const tile_50 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_50.scaleX = 0.97;
        tile_50.scaleY = 0.97;
        tile_50.setOrigin(0, 0);
        row5.add(tile_50);

        // tile_57
        const tile_57 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_57.scaleX = 0.97;
        tile_57.scaleY = 0.97;
        tile_57.setOrigin(0, 0);
        row5.add(tile_57);

        // tile_56
        const tile_56 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_56.scaleX = 0.97;
        tile_56.scaleY = 0.97;
        tile_56.setOrigin(0, 0);
        row5.add(tile_56);

        // tile_55
        const tile_55 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_55.scaleX = 0.97;
        tile_55.scaleY = 0.97;
        tile_55.setOrigin(0, 0);
        row5.add(tile_55);

        // tile_54
        const tile_54 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_54.scaleX = 0.97;
        tile_54.scaleY = 0.97;
        tile_54.setOrigin(0, 0);
        row5.add(tile_54);

        // tile_59
        const tile_59 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_59.scaleX = 0.97;
        tile_59.scaleY = 0.97;
        tile_59.setOrigin(0, 0);
        row5.add(tile_59);

        // tile_58
        const tile_58 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_58.scaleX = 0.97;
        tile_58.scaleY = 0.97;
        tile_58.setOrigin(0, 0);
        row5.add(tile_58);

        // row4
        const row4 = scene.add.container(0, 168);
        topLayer.add(row4);

        // tile_43
        const tile_43 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_43.scaleX = 0.97;
        tile_43.scaleY = 0.97;
        tile_43.setOrigin(0, 0);
        row4.add(tile_43);

        // tile_42
        const tile_42 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile_42.scaleX = 0.97;
        tile_42.scaleY = 0.97;
        tile_42.setOrigin(0, 0);
        row4.add(tile_42);

        // tile_41
        const tile_41 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile_41.scaleX = 0.97;
        tile_41.scaleY = 0.97;
        tile_41.setOrigin(0, 0);
        row4.add(tile_41);

        // tile_40
        const tile_40 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_40.scaleX = 0.97;
        tile_40.scaleY = 0.97;
        tile_40.setOrigin(0, 0);
        row4.add(tile_40);

        // tile_47
        const tile_47 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_47.scaleX = 0.97;
        tile_47.scaleY = 0.97;
        tile_47.setOrigin(0, 0);
        row4.add(tile_47);

        // tile_46
        const tile_46 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_46.scaleX = 0.97;
        tile_46.scaleY = 0.97;
        tile_46.setOrigin(0, 0);
        row4.add(tile_46);

        // tile_45
        const tile_45 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_45.scaleX = 0.97;
        tile_45.scaleY = 0.97;
        tile_45.setOrigin(0, 0);
        row4.add(tile_45);

        // tile_44
        const tile_44 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_44.scaleX = 0.97;
        tile_44.scaleY = 0.97;
        tile_44.setOrigin(0, 0);
        row4.add(tile_44);

        // tile_49
        const tile_49 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_49.scaleX = 0.97;
        tile_49.scaleY = 0.97;
        tile_49.setOrigin(0, 0);
        row4.add(tile_49);

        // tile_48
        const tile_48 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_48.scaleX = 0.97;
        tile_48.scaleY = 0.97;
        tile_48.setOrigin(0, 0);
        row4.add(tile_48);

        // row3
        const row3 = scene.add.container(0, 126);
        topLayer.add(row3);

        // tile_33
        const tile_33 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_33.scaleX = 0.97;
        tile_33.scaleY = 0.97;
        tile_33.setOrigin(0, 0);
        row3.add(tile_33);

        // tile_32
        const tile_32 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile_32.scaleX = 0.97;
        tile_32.scaleY = 0.97;
        tile_32.setOrigin(0, 0);
        row3.add(tile_32);

        // tile_31
        const tile_31 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile_31.scaleX = 0.97;
        tile_31.scaleY = 0.97;
        tile_31.setOrigin(0, 0);
        row3.add(tile_31);

        // tile_30
        const tile_30 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_30.scaleX = 0.97;
        tile_30.scaleY = 0.97;
        tile_30.setOrigin(0, 0);
        row3.add(tile_30);

        // tile_37
        const tile_37 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_37.scaleX = 0.97;
        tile_37.scaleY = 0.97;
        tile_37.setOrigin(0, 0);
        row3.add(tile_37);

        // tile_36
        const tile_36 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_36.scaleX = 0.97;
        tile_36.scaleY = 0.97;
        tile_36.setOrigin(0, 0);
        row3.add(tile_36);

        // tile_35
        const tile_35 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_35.scaleX = 0.97;
        tile_35.scaleY = 0.97;
        tile_35.setOrigin(0, 0);
        row3.add(tile_35);

        // tile_34
        const tile_34 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_34.scaleX = 0.97;
        tile_34.scaleY = 0.97;
        tile_34.setOrigin(0, 0);
        row3.add(tile_34);

        // tile_39
        const tile_39 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_39.scaleX = 0.97;
        tile_39.scaleY = 0.97;
        tile_39.setOrigin(0, 0);
        row3.add(tile_39);

        // tile_38
        const tile_38 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_38.scaleX = 0.97;
        tile_38.scaleY = 0.97;
        tile_38.setOrigin(0, 0);
        row3.add(tile_38);

        // row2
        const row2 = scene.add.container(0, 84);
        topLayer.add(row2);

        // tile_23
        const tile_23 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_23.scaleX = 0.97;
        tile_23.scaleY = 0.97;
        tile_23.setOrigin(0, 0);
        row2.add(tile_23);

        // tile_22
        const tile_22 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile_22.scaleX = 0.97;
        tile_22.scaleY = 0.97;
        tile_22.setOrigin(0, 0);
        row2.add(tile_22);

        // tile_21
        const tile_21 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile_21.scaleX = 0.97;
        tile_21.scaleY = 0.97;
        tile_21.setOrigin(0, 0);
        row2.add(tile_21);

        // tile_20
        const tile_20 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_20.scaleX = 0.97;
        tile_20.scaleY = 0.97;
        tile_20.setOrigin(0, 0);
        row2.add(tile_20);

        // tile_27
        const tile_27 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_27.scaleX = 0.97;
        tile_27.scaleY = 0.97;
        tile_27.setOrigin(0, 0);
        row2.add(tile_27);

        // tile_26
        const tile_26 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_26.scaleX = 0.97;
        tile_26.scaleY = 0.97;
        tile_26.setOrigin(0, 0);
        row2.add(tile_26);

        // tile_25
        const tile_25 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_25.scaleX = 0.97;
        tile_25.scaleY = 0.97;
        tile_25.setOrigin(0, 0);
        row2.add(tile_25);

        // tile_24
        const tile_24 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_24.scaleX = 0.97;
        tile_24.scaleY = 0.97;
        tile_24.setOrigin(0, 0);
        row2.add(tile_24);

        // tile_29
        const tile_29 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_29.scaleX = 0.97;
        tile_29.scaleY = 0.97;
        tile_29.setOrigin(0, 0);
        row2.add(tile_29);

        // tile_28
        const tile_28 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_28.scaleX = 0.97;
        tile_28.scaleY = 0.97;
        tile_28.setOrigin(0, 0);
        row2.add(tile_28);

        // row1
        const row1 = scene.add.container(0, 42);
        topLayer.add(row1);

        // tile_13
        const tile_13 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_13.scaleX = 0.97;
        tile_13.scaleY = 0.97;
        tile_13.setOrigin(0, 0);
        row1.add(tile_13);

        // tile_12
        const tile_12 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile_12.scaleX = 0.97;
        tile_12.scaleY = 0.97;
        tile_12.setOrigin(0, 0);
        row1.add(tile_12);

        // tile_11
        const tile_11 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile_11.scaleX = 0.97;
        tile_11.scaleY = 0.97;
        tile_11.setOrigin(0, 0);
        row1.add(tile_11);

        // tile_10
        const tile_10 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_10.scaleX = 0.97;
        tile_10.scaleY = 0.97;
        tile_10.setOrigin(0, 0);
        row1.add(tile_10);

        // tile_17
        const tile_17 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_17.scaleX = 0.97;
        tile_17.scaleY = 0.97;
        tile_17.setOrigin(0, 0);
        row1.add(tile_17);

        // tile_16
        const tile_16 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_16.scaleX = 0.97;
        tile_16.scaleY = 0.97;
        tile_16.setOrigin(0, 0);
        row1.add(tile_16);

        // tile_15
        const tile_15 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_15.scaleX = 0.97;
        tile_15.scaleY = 0.97;
        tile_15.setOrigin(0, 0);
        row1.add(tile_15);

        // tile_14
        const tile_14 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_14.scaleX = 0.97;
        tile_14.scaleY = 0.97;
        tile_14.setOrigin(0, 0);
        row1.add(tile_14);

        // tile_19
        const tile_19 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_19.scaleX = 0.97;
        tile_19.scaleY = 0.97;
        tile_19.setOrigin(0, 0);
        row1.add(tile_19);

        // tile_18
        const tile_18 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_18.scaleX = 0.97;
        tile_18.scaleY = 0.97;
        tile_18.setOrigin(0, 0);
        row1.add(tile_18);

        // row0
        const row0 = scene.add.container(0, 0);
        topLayer.add(row0);

        // tile_03
        const tile_03 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_03.scaleX = 0.97;
        tile_03.scaleY = 0.97;
        tile_03.setOrigin(0, 0);
        row0.add(tile_03);

        // tile_02
        const tile_02 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile_02.scaleX = 0.97;
        tile_02.scaleY = 0.97;
        tile_02.setOrigin(0, 0);
        row0.add(tile_02);

        // tile_01
        const tile_01 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile_01.scaleX = 0.97;
        tile_01.scaleY = 0.97;
        tile_01.setOrigin(0, 0);
        row0.add(tile_01);

        // tile_00
        const tile_00 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_00.scaleX = 0.97;
        tile_00.scaleY = 0.97;
        tile_00.setOrigin(0, 0);
        row0.add(tile_00);

        // tile_07
        const tile_07 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_07.scaleX = 0.97;
        tile_07.scaleY = 0.97;
        tile_07.setOrigin(0, 0);
        row0.add(tile_07);

        // tile_06
        const tile_06 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_06.scaleX = 0.97;
        tile_06.scaleY = 0.97;
        tile_06.setOrigin(0, 0);
        row0.add(tile_06);

        // tile_05
        const tile_05 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_05.scaleX = 0.97;
        tile_05.scaleY = 0.97;
        tile_05.setOrigin(0, 0);
        row0.add(tile_05);

        // tile_04
        const tile_04 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_04.scaleX = 0.97;
        tile_04.scaleY = 0.97;
        tile_04.setOrigin(0, 0);
        row0.add(tile_04);

        // tile_09
        const tile_09 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_09.scaleX = 0.97;
        tile_09.scaleY = 0.97;
        tile_09.setOrigin(0, 0);
        row0.add(tile_09);

        // tile_08
        const tile_08 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_08.scaleX = 0.97;
        tile_08.scaleY = 0.97;
        tile_08.setOrigin(0, 0);
        row0.add(tile_08);

        // row9
        const row9 = scene.add.container(0, 378);
        topLayer.add(row9);

        // tile_93
        const tile_93 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_93.scaleX = 0.97;
        tile_93.scaleY = 0.97;
        tile_93.setOrigin(0, 0);
        row9.add(tile_93);

        // tile_92
        const tile_92 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile_92.scaleX = 0.97;
        tile_92.scaleY = 0.97;
        tile_92.setOrigin(0, 0);
        row9.add(tile_92);

        // tile_91
        const tile_91 = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile_91.scaleX = 0.97;
        tile_91.scaleY = 0.97;
        tile_91.setOrigin(0, 0);
        row9.add(tile_91);

        // tile_90
        const tile_90 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_90.scaleX = 0.97;
        tile_90.scaleY = 0.97;
        tile_90.setOrigin(0, 0);
        row9.add(tile_90);

        // tile_97
        const tile_97 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_97.scaleX = 0.97;
        tile_97.scaleY = 0.97;
        tile_97.setOrigin(0, 0);
        row9.add(tile_97);

        // tile_96
        const tile_96 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_96.scaleX = 0.97;
        tile_96.scaleY = 0.97;
        tile_96.setOrigin(0, 0);
        row9.add(tile_96);

        // tile_95
        const tile_95 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_95.scaleX = 0.97;
        tile_95.scaleY = 0.97;
        tile_95.setOrigin(0, 0);
        row9.add(tile_95);

        // tile_94
        const tile_94 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_94.scaleX = 0.97;
        tile_94.scaleY = 0.97;
        tile_94.setOrigin(0, 0);
        row9.add(tile_94);

        // tile_99
        const tile_99 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_99.scaleX = 0.97;
        tile_99.scaleY = 0.97;
        tile_99.setOrigin(0, 0);
        row9.add(tile_99);

        // tile_98
        const tile_98 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_98.scaleX = 0.97;
        tile_98.scaleY = 0.97;
        tile_98.setOrigin(0, 0);
        row9.add(tile_98);

        // rowButtons
        const rowButtons = scene.add.container(-45, 23);
        this.add(rowButtons);

        // rowButton_1
        const rowButton_1 = scene.add.image(0, 0, "treasurehunt", "rowButton");
        rowButtons.add(rowButton_1);

        // rowButton_2
        const rowButton_2 = scene.add.image(0, 41, "treasurehunt", "rowButton");
        rowButtons.add(rowButton_2);

        // rowButton_3
        const rowButton_3 = scene.add.image(0, 83, "treasurehunt", "rowButton");
        rowButtons.add(rowButton_3);

        // rowButton_4
        const rowButton_4 = scene.add.image(0, 125, "treasurehunt", "rowButton");
        rowButtons.add(rowButton_4);

        // rowButton_5
        const rowButton_5 = scene.add.image(0, 167, "treasurehunt", "rowButton");
        rowButtons.add(rowButton_5);

        // rowButton_6
        const rowButton_6 = scene.add.image(0, 210, "treasurehunt", "rowButton");
        rowButtons.add(rowButton_6);

        // rowButton_7
        const rowButton_7 = scene.add.image(0, 252, "treasurehunt", "rowButton");
        rowButtons.add(rowButton_7);

        // rowButton_8
        const rowButton_8 = scene.add.image(0, 294, "treasurehunt", "rowButton");
        rowButtons.add(rowButton_8);

        // rowButton_9
        const rowButton_9 = scene.add.image(0, 336, "treasurehunt", "rowButton");
        rowButtons.add(rowButton_9);

        // rowButton_10
        const rowButton_10 = scene.add.image(0, 378, "treasurehunt", "rowButton");
        rowButtons.add(rowButton_10);

        // columnButtons
        const columnButtons = scene.add.container(23, -45);
        this.add(columnButtons);

        // colButton_1
        const colButton_1 = scene.add.image(0, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_1);

        // colButton_2
        const colButton_2 = scene.add.image(42, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_2);

        // colButton_3
        const colButton_3 = scene.add.image(84, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_3);

        // colButton_4
        const colButton_4 = scene.add.image(126, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_4);

        // colButton_5
        const colButton_5 = scene.add.image(168, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_5);

        // colButton_6
        const colButton_6 = scene.add.image(210, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_6);

        // colButton_7
        const colButton_7 = scene.add.image(254, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_7);

        // colButton_8
        const colButton_8 = scene.add.image(296, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_8);

        // colButton_9
        const colButton_9 = scene.add.image(338, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_9);

        // colButton_10
        const colButton_10 = scene.add.image(380, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_10);

        // rowClearAnim
        const rowClearAnim = scene.add.sprite(216, 84, "treasurehunt", "rowClear0002");
        rowClearAnim.visible = false;
        this.add(rowClearAnim);

        // colClearAnim
        const colClearAnim = scene.add.sprite(380, -69, "treasurehunt", "colClear0001");
        colClearAnim.setOrigin(0.25, 0);
        colClearAnim.visible = false;
        this.add(colClearAnim);

        // lists
        const colClears = [];
        const rowClears = [];
        const col0 = [tile_00, tile_10, tile_20, tile_30, tile_40, tile_50, tile_60, tile_70, tile_80, tile_90];
        const col1 = [tile_01, tile_11, tile_21, tile_31, tile_41, tile_51, tile_61, tile_71, tile_81, tile_91];
        const col2 = [tile_02, tile_12, tile_22, tile_32, tile_42, tile_52, tile_62, tile_72, tile_82, tile_92];
        const col3 = [tile_03, tile_13, tile_23, tile_33, tile_43, tile_53, tile_63, tile_73, tile_83, tile_93];
        const col4 = [tile_04, tile_14, tile_24, tile_34, tile_44, tile_54, tile_64, tile_74, tile_84, tile_94];
        const col5 = [tile_05, tile_15, tile_25, tile_35, tile_45, tile_55, tile_65, tile_75, tile_85, tile_95];
        const col6 = [tile_06, tile_16, tile_26, tile_36, tile_46, tile_56, tile_66, tile_76, tile_86, tile_96];
        const col7 = [tile_07, tile_17, tile_27, tile_37, tile_47, tile_57, tile_67, tile_77, tile_87, tile_97];
        const col8 = [tile_08, tile_18, tile_28, tile_38, tile_48, tile_58, tile_68, tile_78, tile_88, tile_98];
        const col9 = [tile_09, tile_19, tile_29, tile_39, tile_49, tile_59, tile_69, tile_79, tile_89, tile_99];
        const col20 = [tile2_00, tile2_10, tile2_20, tile2_30, tile2_40, tile2_50, tile2_60, tile2_70, tile2_80, tile2_90];
        const col21 = [tile2_01, tile2_11, tile2_21, tile2_31, tile2_41, tile2_51, tile2_61, tile2_71, tile2_81, tile2_91];
        const col22 = [tile2_02, tile2_12, tile2_22, tile2_32, tile2_42, tile2_52, tile2_62, tile2_72, tile2_82, tile2_92];
        const col23 = [tile2_03, tile2_13, tile2_23, tile2_33, tile2_43, tile2_53, tile2_63, tile2_73, tile2_83, tile2_93];
        const col24 = [tile2_04, tile2_14, tile2_24, tile2_34, tile2_44, tile2_54, tile2_64, tile2_74, tile2_84, tile2_94];
        const col25 = [tile2_05, tile2_15, tile2_25, tile2_35, tile2_45, tile2_55, tile2_65, tile2_75, tile2_85, tile2_95];
        const col26 = [tile2_06, tile2_16, tile2_26, tile2_36, tile2_46, tile2_56, tile2_66, tile2_76, tile2_86, tile2_96];
        const col27 = [tile2_07, tile2_17, tile2_27, tile2_37, tile2_47, tile2_57, tile2_67, tile2_77, tile2_87, tile2_97];
        const col28 = [tile2_08, tile2_18, tile2_28, tile2_38, tile2_48, tile2_58, tile2_68, tile2_78, tile2_88, tile2_98];
        const col29 = [tile2_09, tile2_19, tile2_29, tile2_39, tile2_49, tile2_59, tile2_69, tile2_79, tile2_89, tile2_99];

        // rowButton_1 (components)
        const rowButton_1Button = new Button(rowButton_1);
        rowButton_1Button.spriteName = "rowButton";
        rowButton_1Button.callback = () => {this.parentContainer.onDigClick(0)};

        // rowButton_2 (components)
        const rowButton_2Button = new Button(rowButton_2);
        rowButton_2Button.spriteName = "rowButton";
        rowButton_2Button.callback = () => {this.parentContainer.onDigClick(1)};

        // rowButton_3 (components)
        const rowButton_3Button = new Button(rowButton_3);
        rowButton_3Button.spriteName = "rowButton";
        rowButton_3Button.callback = () => {this.parentContainer.onDigClick(2)};

        // rowButton_4 (components)
        const rowButton_4Button = new Button(rowButton_4);
        rowButton_4Button.spriteName = "rowButton";
        rowButton_4Button.callback = () => {this.parentContainer.onDigClick(3)};

        // rowButton_5 (components)
        const rowButton_5Button = new Button(rowButton_5);
        rowButton_5Button.spriteName = "rowButton";
        rowButton_5Button.callback = () => {this.parentContainer.onDigClick(4)};

        // rowButton_6 (components)
        const rowButton_6Button = new Button(rowButton_6);
        rowButton_6Button.spriteName = "rowButton";
        rowButton_6Button.callback = () => {this.parentContainer.onDigClick(5)};

        // rowButton_7 (components)
        const rowButton_7Button = new Button(rowButton_7);
        rowButton_7Button.spriteName = "rowButton";
        rowButton_7Button.callback = () => {this.parentContainer.onDigClick(6)};

        // rowButton_8 (components)
        const rowButton_8Button = new Button(rowButton_8);
        rowButton_8Button.spriteName = "rowButton";
        rowButton_8Button.callback = () => {this.parentContainer.onDigClick(7)};

        // rowButton_9 (components)
        const rowButton_9Button = new Button(rowButton_9);
        rowButton_9Button.spriteName = "rowButton";
        rowButton_9Button.callback = () => {this.parentContainer.onDigClick(8)};

        // rowButton_10 (components)
        const rowButton_10Button = new Button(rowButton_10);
        rowButton_10Button.spriteName = "rowButton";
        rowButton_10Button.callback = () => {this.parentContainer.onDigClick(9)};

        // colButton_1 (components)
        const colButton_1Button = new Button(colButton_1);
        colButton_1Button.spriteName = "colButton";
        colButton_1Button.callback = () => { this.parentContainer.onDigClick(0)};

        // colButton_2 (components)
        const colButton_2Button = new Button(colButton_2);
        colButton_2Button.spriteName = "colButton";
        colButton_2Button.callback = () => { this.parentContainer.onDigClick(1)};

        // colButton_3 (components)
        const colButton_3Button = new Button(colButton_3);
        colButton_3Button.spriteName = "colButton";
        colButton_3Button.callback = () => { this.parentContainer.onDigClick(2)};

        // colButton_4 (components)
        const colButton_4Button = new Button(colButton_4);
        colButton_4Button.spriteName = "colButton";
        colButton_4Button.callback = () => { this.parentContainer.onDigClick(3)};

        // colButton_5 (components)
        const colButton_5Button = new Button(colButton_5);
        colButton_5Button.spriteName = "colButton";
        colButton_5Button.callback = () => { this.parentContainer.onDigClick(4)};

        // colButton_6 (components)
        const colButton_6Button = new Button(colButton_6);
        colButton_6Button.spriteName = "colButton";
        colButton_6Button.callback = () => { this.parentContainer.onDigClick(5)};

        // colButton_7 (components)
        const colButton_7Button = new Button(colButton_7);
        colButton_7Button.spriteName = "colButton";
        colButton_7Button.callback = () => { this.parentContainer.onDigClick(6)};

        // colButton_8 (components)
        const colButton_8Button = new Button(colButton_8);
        colButton_8Button.spriteName = "colButton";
        colButton_8Button.callback = () => { this.parentContainer.onDigClick(7)};

        // colButton_9 (components)
        const colButton_9Button = new Button(colButton_9);
        colButton_9Button.spriteName = "colButton";
        colButton_9Button.callback = () => { this.parentContainer.onDigClick(8)};

        // colButton_10 (components)
        const colButton_10Button = new Button(colButton_10);
        colButton_10Button.spriteName = "colButton";
        colButton_10Button.callback = () => { this.parentContainer.onDigClick(9)};

        // rowClearAnim (components)
        const rowClearAnimAnimation = new Animation(rowClearAnim);
        rowClearAnimAnimation.key = "rowClear";
        rowClearAnimAnimation.end = 20;
        rowClearAnimAnimation.repeat = 0;
        rowClearAnimAnimation.autoPlay = false;
        rowClearAnimAnimation.showOnStart = true;

        // colClearAnim (components)
        const colClearAnimAnimation = new Animation(colClearAnim);
        colClearAnimAnimation.key = "colClear";
        colClearAnimAnimation.end = 20;
        colClearAnimAnimation.repeat = 0;
        colClearAnimAnimation.autoPlay = false;
        colClearAnimAnimation.showOnStart = true;

        this.bottomSand = bottomSand;
        this.bottomLayer = bottomLayer;
        this.row28 = row28;
        this.row27 = row27;
        this.row26 = row26;
        this.row25 = row25;
        this.row24 = row24;
        this.row23 = row23;
        this.row22 = row22;
        this.row21 = row21;
        this.row20 = row20;
        this.row29 = row29;
        this.secondLayer = secondLayer;
        this.row8 = row8;
        this.row7 = row7;
        this.row6 = row6;
        this.row5 = row5;
        this.row4 = row4;
        this.row3 = row3;
        this.row2 = row2;
        this.row1 = row1;
        this.row0 = row0;
        this.row9 = row9;
        this.topLayer = topLayer;
        this.rowButton_1 = rowButton_1;
        this.rowButtons = rowButtons;
        this.colButton_1 = colButton_1;
        this.colButton_2 = colButton_2;
        this.colButton_3 = colButton_3;
        this.colButton_4 = colButton_4;
        this.colButton_5 = colButton_5;
        this.colButton_6 = colButton_6;
        this.colButton_7 = colButton_7;
        this.colButton_8 = colButton_8;
        this.colButton_9 = colButton_9;
        this.colButton_10 = colButton_10;
        this.columnButtons = columnButtons;
        this.rowClearAnim = rowClearAnim;
        this.colClearAnim = colClearAnim;
        this.colClears = colClears;
        this.rowClears = rowClears;
        this.col0 = col0;
        this.col1 = col1;
        this.col2 = col2;
        this.col3 = col3;
        this.col4 = col4;
        this.col5 = col5;
        this.col6 = col6;
        this.col7 = col7;
        this.col8 = col8;
        this.col9 = col9;
        this.col20 = col20;
        this.col21 = col21;
        this.col22 = col22;
        this.col23 = col23;
        this.col24 = col24;
        this.col25 = col25;
        this.col26 = col26;
        this.col27 = col27;
        this.col28 = col28;
        this.col29 = col29;

        /* START-USER-CTR-CODE */
        // Write your code here.
        this.scene = scene;
        this.treasureAdded = new Array(37);
        this.shineAdded = new Array(37);

        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    bottomSand;
    /** @type {Phaser.GameObjects.Container} */
    bottomLayer;
    /** @type {Phaser.GameObjects.Container} */
    row28;
    /** @type {Phaser.GameObjects.Container} */
    row27;
    /** @type {Phaser.GameObjects.Container} */
    row26;
    /** @type {Phaser.GameObjects.Container} */
    row25;
    /** @type {Phaser.GameObjects.Container} */
    row24;
    /** @type {Phaser.GameObjects.Container} */
    row23;
    /** @type {Phaser.GameObjects.Container} */
    row22;
    /** @type {Phaser.GameObjects.Container} */
    row21;
    /** @type {Phaser.GameObjects.Container} */
    row20;
    /** @type {Phaser.GameObjects.Container} */
    row29;
    /** @type {Phaser.GameObjects.Container} */
    secondLayer;
    /** @type {Phaser.GameObjects.Container} */
    row8;
    /** @type {Phaser.GameObjects.Container} */
    row7;
    /** @type {Phaser.GameObjects.Container} */
    row6;
    /** @type {Phaser.GameObjects.Container} */
    row5;
    /** @type {Phaser.GameObjects.Container} */
    row4;
    /** @type {Phaser.GameObjects.Container} */
    row3;
    /** @type {Phaser.GameObjects.Container} */
    row2;
    /** @type {Phaser.GameObjects.Container} */
    row1;
    /** @type {Phaser.GameObjects.Container} */
    row0;
    /** @type {Phaser.GameObjects.Container} */
    row9;
    /** @type {Phaser.GameObjects.Container} */
    topLayer;
    /** @type {Phaser.GameObjects.Image} */
    rowButton_1;
    /** @type {Phaser.GameObjects.Container} */
    rowButtons;
    /** @type {Phaser.GameObjects.Image} */
    colButton_1;
    /** @type {Phaser.GameObjects.Image} */
    colButton_2;
    /** @type {Phaser.GameObjects.Image} */
    colButton_3;
    /** @type {Phaser.GameObjects.Image} */
    colButton_4;
    /** @type {Phaser.GameObjects.Image} */
    colButton_5;
    /** @type {Phaser.GameObjects.Image} */
    colButton_6;
    /** @type {Phaser.GameObjects.Image} */
    colButton_7;
    /** @type {Phaser.GameObjects.Image} */
    colButton_8;
    /** @type {Phaser.GameObjects.Image} */
    colButton_9;
    /** @type {Phaser.GameObjects.Image} */
    colButton_10;
    /** @type {Phaser.GameObjects.Container} */
    columnButtons;
    /** @type {Phaser.GameObjects.Sprite} */
    rowClearAnim;
    /** @type {Phaser.GameObjects.Sprite} */
    colClearAnim;
    /** @type {Array<any>} */
    colClears;
    /** @type {Array<any>} */
    rowClears;
    /** @type {Phaser.GameObjects.Image[]} */
    col0;
    /** @type {Phaser.GameObjects.Image[]} */
    col1;
    /** @type {Phaser.GameObjects.Image[]} */
    col2;
    /** @type {Phaser.GameObjects.Image[]} */
    col3;
    /** @type {Phaser.GameObjects.Image[]} */
    col4;
    /** @type {Phaser.GameObjects.Image[]} */
    col5;
    /** @type {Phaser.GameObjects.Image[]} */
    col6;
    /** @type {Phaser.GameObjects.Image[]} */
    col7;
    /** @type {Phaser.GameObjects.Image[]} */
    col8;
    /** @type {Phaser.GameObjects.Image[]} */
    col9;
    /** @type {Phaser.GameObjects.Image[]} */
    col20;
    /** @type {Phaser.GameObjects.Image[]} */
    col21;
    /** @type {Phaser.GameObjects.Image[]} */
    col22;
    /** @type {Phaser.GameObjects.Image[]} */
    col23;
    /** @type {Phaser.GameObjects.Image[]} */
    col24;
    /** @type {Phaser.GameObjects.Image[]} */
    col25;
    /** @type {Phaser.GameObjects.Image[]} */
    col26;
    /** @type {Phaser.GameObjects.Image[]} */
    col27;
    /** @type {Phaser.GameObjects.Image[]} */
    col28;
    /** @type {Phaser.GameObjects.Image[]} */
    col29;

    /* START-USER-CODE */

    reset(){
        // resetting visibility of buttons (category, individual)
        this.invisibleButtons(1, false)

        for (let b = 0; b < 10; b++) {
            this.columnButtons.list[b].visible = true
            this.rowButtons.list[b].visible = true
        }

        // reset all tiles to 0001 (or only those in cleared row/col)
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++){
                this.cols[i][j].setFrame('tile0001')
                this.cols2[i][j].setFrame('tile0001')
            }
        }

        // hidden treasure assets removed 
        this.removeTreasure()
    }

    removeTreasure(){
        for (let i =0; i < this.shineAdded.length; i++){
            if (this.shineAdded[i] != null){
                clearTimeout(this.shineAdded[i].timeoutObject)
                this.shineAdded[i].destroy()
            }
        }
        for (let i =0; i < this.treasureAdded.length; i++){
            if (this.treasureAdded[i] != null){
                clearTimeout(this.treasureAdded[i].timeoutObject)
                this.treasureAdded[i].destroy()
            }
        }
        this.treasureAdded = new Array(37);
        this.shineAdded = new Array(37);
    }

    setupMap(map, gemLocations) {
        for (let i =0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (map[i][j] == 1 || map[i][j] == -1){
                    this.addTreasure('coin', i, j);

                    // have to do bc of shine desynchronized client-side (3/5 chance)
                    if (Math.floor(Math.random() * 5) > 2){ 
                        this.addTreasure('shine', i, j);
                    }

                } 
                else if (map[i][j] == 2 || map[i][j] == -2 ) {
                    const isGemLocation = gemLocations.some((
                        [gemRow, gemCol]) => {
                            return i === gemRow && j === gemCol && (map[gemRow][gemCol] == 2 || map[gemRow][gemCol] == -2);
                        });

                    if (isGemLocation) {
                        this.addTreasure('gem', i, j);
                        // diagonal shine
                        this.addTreasure('shine', i, j+1); 
                    }

                } else if (map[i][j] == 3 || map[i][j] == -3) {
                    const isGemLocation = gemLocations.some((
                        [gemRow, gemCol]) => {
                            return i === gemRow && j === gemCol && (map[gemRow][gemCol] == 3 || map[gemRow][gemCol] == -3);
                        });

                    if (isGemLocation) {
                        this.addTreasure('emerald', i, j);
                        this.addTreasure('shine', i, j);
                        this.addTreasure('shine', i, j+1); 
                    }
                }
            } 
        }
    }

    addTreasure(type, i, j){
        let x = this.columnButtons.list[j].x
        let y = this.rows[i].y

        if (type == 'coin') {
            // make prefabs cuz destroy() wont destroy the anim component

            // TO DO random timeout does not apply
            let coin = new TreasureCoin(this.scene, x, y)
            coin.randomDelay()
            this.bottomLayer.add(coin);
            this.treasureAdded.push(coin);
        } else  if (type == 'gem') {
            let gem = new TreasureGem(this.scene, x, y)
            gem.randomDelay()
            this.bottomLayer.add(gem);
            this.treasureAdded.push(gem)
        } else  if (type == 'emerald') {
            let emerald = new TreasureEmerald(this.scene, x, y)
            emerald.randomDelay()
            this.bottomLayer.add(emerald);
            this.treasureAdded.push(emerald)
        } else if (type == 'shine') {
            let shine = new TreasureShine(this.scene, x, y)
            shine.setXY(x, y)
            shine.randomDelay()
            this.secondLayer.add(shine); 
            this.shineAdded.push(shine)
        }
    }

    invisibleButtons(turn, isMyTurn) {
        if (isMyTurn) {
            (turn == 1) ?   // rows
                this.rowButtons.visible = true
                : this.columnButtons.visible = true
        } else {
            this.columnButtons.visible = false
            this.rowButtons.visible = false
        }
    }

    // Write your code here.

    // Start Karalyn Code
    init(){
            // if want corner neighbour frames, 
            // add +4 indices for them & update those single tiles (i-1, j-1) etc. 
            // those frames are present on 2nd layer, 
            // but under top layer sand--> not seen AFAIK

                        // above    // right      //below     //left
        this.tileDict = {
            'tile0001': ['tile0002', 'tile0003', 'tile0004', 'tile0005'],
            'tile0002': [null, 'tile0007', 'tile0010', 'tile0006'],
            'tile0003': ['tile0007', null, 'tile0008', 'tile0011'], //AAAHHHHH tile0001
            'tile0004': ['tile0010', 'tile0008', null, 'tile0009'],
            'tile0005': ['tile0006', 'tile0011', 'tile0009', null],
            'tile0006': [null, 'tile0016', 'tile0019', null],
            'tile0007': [null, null, 'tile0017', 'tile0016'],
            'tile0008': ['tile0017', null, null, 'tile0018'],
            'tile0009': ['tile0019', 'tile0018', null, null],
            'tile0010': [null, 'tile0017', null, 'tile0019'],
            'tile0011': ['tile0016', null, 'tile0018', null],
            'tile0012': [null, 'tile0016', 'tile0019', null],
            'tile0013': [null, null, 'tile0017', 'tile0016'],
            'tile0014': ['tile0017', null, null, 'tile0018'],
            'tile0015': ['tile0019', 'tile0018', null, null],
            'tile0016': [null, null, 'tile0045', null],
            'tile0017': [null, null, null, 'tile0045'],
            'tile0018': ['tile0045', null, null, null],
            'tile0019': [null, 'tile0045', null, null],
            'tile0020': [null, null, null, null],
            'tile0045': [null, null, null, null],
            'tile0046': [null, null, null, null],
            'tile0047': [null, null, null, null],
            'tile0048': [null, null, null, null]
        };

        this.cols = {
            0: this.col0,
            1: this.col1,
            2: this.col2,
            3: this.col3,
            4: this.col4,
            5: this.col5,
            6: this.col6,
            7: this.col7,
            8: this.col8,
            9: this.col9,
        }

        this.cols2 = {
            0: this.col20,
            1: this.col21,
            2: this.col22,
            3: this.col23,
            4: this.col24,
            5: this.col25,
            6: this.col26,
            7: this.col27,
            8: this.col28,
            9: this.col29,
        }

        this.rows = {
            0: this.row0,
            1: this.row1,
            2: this.row2,
            3: this.row3,
            4: this.row4,
            5: this.row5,
            6: this.row6,
            7: this.row7,
            8: this.row8,
            9: this.row9,
        }

        this.rows2 = {
            0: this.row20,
            1: this.row21,
            2: this.row22,
            3: this.row23,
            4: this.row24,
            5: this.row25,
            6: this.row26,
            7: this.row27,
            8: this.row28,
            9: this.row29,
        }
    }

    rowClear(row){
        this.rowClears[row] = 1
        this.rowButtons.list[row].visible = false
            this.rowClearAnim.setY(this.rows[row].y)
            this.rowClearAnim.__Animation.play()
            for (let i = 0; i < 10; i++){

                this.removeRowTile(this.rows[row].list[i], row, i)

                if (row != 0) {
                     this.updateRowTile(row-1, i, 2)    // below
                } 
                if (row != 9) {
                     this.updateRowTile(row+1, i, 0)    // above
                }
            }
    }

    updateRow2Tile(row, i, dir) {
        if (row >= 0 && row < 10 && i >=0 && i <10){
            let currFrame = this.rows2[row].list[i].frame.name
            let updatedFrame = this.tileDict[currFrame][dir]
            if (!(currFrame == "tile0048") && (updatedFrame != null)) {
                this.rows2[row].list[i].setFrame(updatedFrame)
                // console.log("--*--*--*ROW2 row/i/dir:", row, i, dir, "curr/updatedFrame", currFrame, updatedFrame, "*--*--*--")
            } 
            // console.log("--*--*--*ROW2 row/i/dir:", row, i, dir, "curr/updatedFrame", currFrame, updatedFrame)
        }
    }

    updateRowTile(row, i, dir) {
        let currFrame = this.rows[row].list[i].frame.name
        if (!(currFrame == "tile0048")) {
            let updatedFrame = this.tileDict[currFrame][dir]
            this.rows[row].list[i].setFrame(updatedFrame)
        } 
    }

    removeRowTile(tile, row, i){
        if (tile.frame.name == "tile0048") {    // && this.rows2[row].list[i].frame.name != "tile0048" <- currently multiple updating helps combat bug
            // console.log("free me", row, i)
            this.rows2[row].list[i].setFrame("tile0048")

            let x = this.columnButtons.list[i].x
            let y = this.rows[row].y
            for (let shine of this.shineAdded){
                if (shine != null && shine.y == y && shine.x == x){
                    clearTimeout(shine.timeoutObject)
                    shine.destroy()
                    // console.log(shine.x, shine.y)
                }
            }
            this.updateRow2Tile(row+1, i, 0)     // above
            this.updateRow2Tile(row-1, i, 2)     // below
            this.updateRow2Tile(row, i-1, 3)     // left
            this.updateRow2Tile(row, i+1, 1)     // right
        } else {
            tile.setFrame("tile0048")
        }
    }

    colClear(col){
        this.colClears[col] = 1
        this.columnButtons.list[col].visible = false
            this.colClearAnim.setX(this.columnButtons.list[col].x)
            this.colClearAnim.__Animation.play()
            for (let i = 0; i < 10; i++){
                this.removeColTile(this.cols[col][i], col, i)
                if (col != 0) {
                    this.updateColTile(col-1, i, 1)
                } 
                if (col != 9){
                    this.updateColTile(col+1, i, 3)
                }
            }
    }

    updateCol2Tile(col, i, dir){
        if (col >= 0 && col < 10 && i >=0 && i <10){
            let currFrame = this.cols2[col][i].frame.name
            let updatedFrame = this.tileDict[currFrame][dir]
            if (!(currFrame == "tile0048") && (updatedFrame != null)) {
                this.cols2[col][i].setFrame(updatedFrame)
                // console.log("--*--*--*COL2 tile--*--*-- col/i/dir:", col, i, dir, "curr/updatedFrame", currFrame, updatedFrame, "*--*--*--")
            } 
            // console.log("--*--*--*COL2 tile--*--*-- col/i/dir:", col, i, dir, "curr/updatedFrame", currFrame, updatedFrame)
        }
    }

    updateColTile(col, i, dir){
        let currFrame = this.cols[col][i].frame.name

        if (!(currFrame == "tile0048")) {
            let updatedFrame = this.tileDict[currFrame][dir]
            this.cols[col][i].setFrame(updatedFrame)
        } 
    }

    removeColTile(tile, col, i) {
        if (tile.frame.name == "tile0048" ) {       // && this.cols2[col][i].frame.name != "tile0048"
            this.cols2[col][i].setFrame("tile0048")

            let x = this.columnButtons.list[col].x
            let y = this.rows[i].y
            for (let shine of this.shineAdded){
                if (shine != null && shine.y == y && shine.x == x){
                    clearTimeout(shine.timeoutObject)
                    shine.destroy()
                    // console.log(shine.x, shine.y)
                }
            }

            // console.log("free me", col, i)
            this.updateCol2Tile(col+1, i, 3)     // x+1 = left cleared
            this.updateCol2Tile(col-1, i, 1)     // x-1 = right
            this.updateCol2Tile(col, i-1, 2)     // y-1 = above
            this.updateCol2Tile(col, i+1, 0)     // y+1 = right



        } else {
            tile.setFrame("tile0048")
        }
    }

    // these methods work just not using them
    /*
    updateRow2Tiles(row, i, dir) { 
        //  x, y           above       below       left        right 
        // (i, row) == [i, row-1], [i, row+1], [i-1, row], [i+1, row]

        const directions = [
            // above - 3, below - 1, left - 2, right - 4 <-- lil bro forgot how to count from 0
            { rowOffset: -1, colOffset: 0, dir: 2},  // above 
            { rowOffset: 1, colOffset: 0, dir: 0},   // below 
            { rowOffset: 0, colOffset: -1, dir: 3},  // left 
            { rowOffset: 0, colOffset: 1, dir: 1}    // right
        ];

        directions.forEach(({ rowOffset, colOffset, dir }) => {
            const newRow = row + rowOffset;
            const newCol = i + colOffset;

            if (newRow >= 0 && newCol >= 0 && newRow < 10 && newCol < 10) {
                const frameName = this.rows2[newRow].list[newCol].frame.name;
                if (this.tileDict[frameName] != null && this.tileDict[frameName][dir] != null) {
                    const updatedFrame = this.tileDict[frameName][dir];

                    this.rows2[newRow].list[newCol].setFrame(updatedFrame);
                }
            }
        });
    }

    updateCol2Tiles(col, i){
        //  x, y           above       below       left        right                
        // (col, i) == [col, i-1], [col, i+1] [col-1, i], [col+1, i]

        // above - 2, below - 0, left - 1, right - 3 
        const directions = [
            { colOffset: 0, rowOffset: -1, dir: 2}, // above
            { colOffset: 0, rowOffset: 1, dir: 0},  // below
            { colOffset: -1, rowOffset: 0, dir: 1}, // left
            { colOffset: 1, rowOffset: 0, dir: 3},  // right (left clear) 
        ];

        directions.forEach(({ rowOffset, colOffset, dir}) => {
            const newCol = col + colOffset;
            const newRow = i + rowOffset;

            if (newRow >= 0 && newCol >= 0 && newRow < 10 && newCol < 10) {
                const frameName = this.cols2[newCol][newRow].frame.name;
                if (this.tileDict[frameName] != null && this.tileDict[frameName][dir] != null) {
                    const updatedFrame = this.tileDict[frameName][dir];
                    this.cols2[newCol][newRow].setFrame(updatedFrame);
                }
            }
        });
    }
    */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

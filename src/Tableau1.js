/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        for(let i=1; i<=4; i++){
            this.load.image('bg2-terrain-'+i, 'assets/level/background-2/bg2-terrain-'+i+'.png');
        }
        for(let i=1; i<=3; i++){
            this.load.image('bg2-tree-'+i, 'assets/level/background-2/bg2-tree-'+i+'.png');
        }
        //bg 1 (gris légèrement flou)
        for(let i=1; i<=4; i++){
            this.load.image('bg1-terrain-'+i, 'assets/level/background-1/bg-terrain-'+i+'.png');
        }
        for(let i=1; i<=3; i++){
            this.load.image('bg1-tree-'+i, 'assets/level/background-1/bg-tree-'+i+'.png');
        }

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        //Ici on charge les arbres
        for(let i=1; i<=3; i++){
            this.load.image('gTree'+i, 'assets/level/ground/g-tree-'+i+'.png');
        }
        //Ici on charge les rochers
        for(let i=1; i<=5; i++){
            this.load.image('gStone'+i, 'assets/level/ground/g-stone-'+i+'.png');
        }
        //Ici on charge les champignons
        for(let i=1; i<=2; i++){
            this.load.image('gMushroom'+i, 'assets/level/ground/g-mushroom'+i+'.png');
        }

        for(let i=1; i<=5; i++){
            this.load.image('z'+i, 'assets/zombies/z'+i+'.png');
        }

        this.load.image('bridge', 'assets/level/ground/g-wooden-bridge.png');

        this.load.image('water', 'assets/level/ground/g-water.png');

        this.load.image('waterGrass', 'assets/level/ground/g-spike-1.png');

        this.load.image('box', 'assets/level/ground/g-box-2.png');

        this.load.image('liane', 'assets/level/ground/g-vine-a.png');

        this.load.image('groundTree', 'assets/level/ground/g-fellen-tree-1.png');

        this.load.image('bgBridge', 'assets/level/background-1/bg-wooden-bridge.png');

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        /*this.load.image('filterFilm1', 'assets/level/filters/film/frame-1.png');
        this.load.image('filterFilm2', 'assets/level/filters/film/frame-2.png');
        this.load.image('filterFilm3', 'assets/level/filters/film/frame-3.png');*/
        for(let i=1; i<=3; i++){
            this.load.image('filterFilm'+i, 'assets/level/filters/film/frame-'+i+'.png')
        }

        for(let i=1; i<=3; i++){
            this.load.image('filterBloody'+i, 'assets/level/filters/bloody/frame'+i+'.png')
        }

        for(let i=1; i<=5; i++){
            this.load.image('filterSnow'+i, 'assets/level/weather/snow/frame'+i+'.png')
        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        let lettre = ['a', 'b', 'c'];
        //this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');
        for(let i=0; i<=2; i++){
            this.load.image('bg-animation-'+lettre[i], 'assets/level/background-2/bg-animation/bg-animation-'+lettre[i]+'.png');
        }

    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        //let bgAnimationA=this.add.sprite(0,0, 'bg-animation-a').setOrigin(0,0);
        this.bgAnimation = this.add.sprite(0, 0, 'bg-animation-a').setOrigin(0, 0);
        this.anims.create({
            key: 'backgroundAnim',
            frames: [
                {key:'bg-animation-a'},
                {key:'bg-animation-b'},
                {key:'bg-animation-c'},
            ],
            frameRate: 16,
            repeat: -1
        });

        this.bgAnimation.play('backgroundAnim');

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-190,100, 'bg2-terrain-2').setOrigin(0,0);
        bg2Terrain2.setScale(1);
        this.bg2Container.add(bg2Terrain2);
        /**
         * Terrain dans bg2 a droite
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain3=this.add.image(600,100, 'bg2-terrain-4').setOrigin(0,0);
        bg2Terrain3.setScale(1);
        this.bg2Container.add(bg2Terrain3);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(350,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.setScale(.6);
        /**
         * Arbre dans bg2 a droite
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree3=this.add.image(720,-50, 'bg2-tree-3').setOrigin(0,0);
        bg2Tree3.setScale(.6)
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-5;

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain a gauche
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-440,190, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);
        /**
         * Terrain derriere le pont
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain4=this.add.image(650,250, 'bg1-terrain-1').setOrigin(0,0);
        bg1Terrain4.setScale(.5)
        this.bg1Container.add(bg1Terrain4);
        /**
         * Terrain en dessous de bg1Terrain4
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain5=this.add.image(500,450, 'bg1-terrain-3').setOrigin(0,0);
        bg1Terrain5.setScale(.5)
        bg1Terrain5.angle = -5;
        this.bg1Container.add(bg1Terrain5);
        /**
         * Terrain en dessous de bg1Terrain4
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain7=this.add.image(220,450, 'bg1-terrain-3').setOrigin(0,0);
        bg1Terrain7.setScale(1)
        bg1Terrain7.angle = -5;
        this.bg1Container.add(bg1Terrain7);
        /**
         * Terrain en dessous de bg1Terrain4
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain8=this.add.image(1170,300, 'bg1-terrain-3').setOrigin(0,0);
        bg1Terrain8.setScale(1)
        bg1Terrain8.angle = -5;
        this.bg1Container.add(bg1Terrain8);
        /**
         * Terrain en dessous de bg1Terrain4
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain6=this.add.image(1200,250, 'bg1-terrain-3').setOrigin(0,0);
        bg1Terrain6.setScale(.5)
        bg1Terrain6.angle = -5;
        this.bg1Container.add(bg1Terrain6);
        /**
         * Arbre a gauche 1
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree1=this.add.image(150,290, 'bg1-tree-3').setOrigin(0,1);
        bg1Tree1.setScale(.6)
        //bg1Tree1.angle = -5;
        this.bg1Container.add(bg1Tree1);
        /**
         * Arbre a gauche 2
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree2=this.add.image(-18,300, 'bg1-tree-1').setOrigin(0,1);
        bg1Tree2.setScale(0.5)
        //bg1Tree2.angle = -5;
        this.bg1Container.add(bg1Tree2);
        /**
         * pont
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Bridge=this.add.image(900,310, 'bgBridge').setOrigin(0,1);
        bg1Bridge.setScale(1)
        //bg1Bridge.angle = -5;
        this.bg1Container.add(bg1Bridge);
        /**
         * arbre
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree3=this.add.image(840,310, 'bg1-tree-1').setOrigin(0,1);
        bg1Tree3.setScale(.6)
        //bg1Bridge.angle = -5;
        this.bg1Container.add(bg1Tree3);

        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Herbe dans l'eau
         * @type {Phaser.GameObjects.Image}
         */
        let waterGrass=this.add.image(600, 550, 'waterGrass').setOrigin(0, 1);
        //bridge.setTintFill(0x0FFF00);
        waterGrass.setScale(1.2);
        this.groundContainer.add(waterGrass);
        /**
         * Herbe dans l'eau 2
         * @type {Phaser.GameObjects.Image}
         */
        let waterGrass2=this.add.image(640, 550, 'waterGrass').setOrigin(0, 1);
        //bridge.setTintFill(0x0FFF00);
        waterGrass2.setScale(-1.2, 1.2);
        this.groundContainer.add(waterGrass2);
        /**
         * Herbe dans l'eau 2
         * @type {Phaser.GameObjects.Image}
         */
        let waterGrass3=this.add.image(1790, 550, 'waterGrass').setOrigin(0, 1);
        //bridge.setTintFill(0x0FFF00);
        waterGrass3.setScale(-1.2, 1.2);
        this.groundContainer.add(waterGrass3);
        /**
         * Herbe dans l'eau 2
         * @type {Phaser.GameObjects.Image}
         */
        let waterGrass4=this.add.image(1900, 550, 'waterGrass').setOrigin(0, 1);
        //bridge.setTintFill(0x0FFF00);
        waterGrass4.setScale(-1.2, 1.2);
        this.groundContainer.add(waterGrass4);
        /**
         * Eau
         * @type {Phaser.GameObjects.Image}
         */
        let water=this.add.image(450, 625, 'water').setOrigin(0, 1);
        //bridge.setTintFill(0x0FFF00);
        water.setScale(1);
        this.groundContainer.add(water);
        /**
         * Pont au millieu
         * @type {Phaser.GameObjects.Image}
         */
        let bridge=this.add.image(410, 380, 'bridge').setOrigin(0, 1);
        //bridge.setTintFill(0x0FFF00);
        bridge.setScale(0.8);
        bridge.angle=0;
        this.groundContainer.add(bridge);
        /**
         * Boite sur le pont
         * @type {Phaser.GameObjects.Image}
         */
        let box=this.add.image(500, 345, 'box').setOrigin(0, 1);
        //bridge.setTintFill(0x0FFF00);
        box.setScale(.6)
        box.angle=5;
        this.groundContainer.add(box);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(250,370, 'gTree2').setOrigin(0,1);
        tree1.setScale(0.65);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        tree1.angle=0;
        this.groundContainer.add(tree1);
        /**
         * z1
         * @type {Phaser.GameObjects.Image}
         */
        let z1=this.add.image(180,370, 'z1').setOrigin(0,1);
        z1.setScale(0.65);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        z1.angle=0;
        this.groundContainer.add(z1);
        /**
         * z2
         * @type {Phaser.GameObjects.Image}
         */
        let z2=this.add.image(505,300, 'z2').setOrigin(0,1);
        z2.setScale(0.65);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        z2.angle=0;
        this.groundContainer.add(z2);
        /**
         * z3
         * @type {Phaser.GameObjects.Image}
         */
        let z3=this.add.image(1000,390, 'z3').setOrigin(0,1);
        z3.setScale(0.65);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        z3.angle=0;
        this.groundContainer.add(z3);
        /**
         * z4
         * @type {Phaser.GameObjects.Image}
         */
        let z4=this.add.image(1400,390, 'z4').setOrigin(0,1);
        z4.setScale(0.65);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        z4.angle=0;
        this.groundContainer.add(z4);
        /**
         * z5
         * @type {Phaser.GameObjects.Image}
         */
        let z5=this.add.image(1700,330, 'z5').setOrigin(0,1);
        z5.setScale(0.65);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        z5.angle=5;
        this.groundContainer.add(z5);
        /**
         * Arbre a gauche de l'ecran
         * @type {Phaser.GameObjects.Image}
         */
        let tree2=this.add.image(150,410, 'gTree2').setOrigin(0,1);
        tree2.setScale(-0.9, 0.9);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        tree2.angle=0;
        this.groundContainer.add(tree2);
        /**
         * Arbre a droite de l'ecran
         * @type {Phaser.GameObjects.Image}
         */
        let tree3=this.add.image(970,410, 'gTree1').setOrigin(0,1);
        tree3.setScale(-0.9, 0.9);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        tree3.angle=-5;
        this.groundContainer.add(tree3);
        /**
         * Arbre a droite de l'ecran
         * @type {Phaser.GameObjects.Image}
         */
        let tree4=this.add.image(1100,410, 'gTree2').setOrigin(0,1);
        tree4.setScale(.7);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree4);
        /**
         * rocher
         * @type {Phaser.GameObjects.Image}
         */
        let stone4=this.add.image(1100,380, 'gStone1').setOrigin(0,1);
        stone4.setScale(2);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(stone4);
        /**
         * Rocher a gauche du pont
         * @type {Phaser.GameObjects.Image}
         */
        let stone1=this.add.image(360, 360, 'gStone4').setOrigin(0, 1);
        stone1.setScale(0.65);
        //stone1.setTintFill(0x0FFF00);
        this.groundContainer.add(stone1);
        /**
         * Rocher a gauche de l'ecran
         * @type {Phaser.GameObjects.Image}
         */
        let stone2=this.add.image(40, 360, 'gStone5').setOrigin(0, 1);
        stone1.setScale(0.65);
        //stone1.setTintFill(0x0FFF00);
        this.groundContainer.add(stone2);
        /**
         * Rocher a droite de l'ecran
         * @type {Phaser.GameObjects.Image}
         */
        let stone3=this.add.image(785, 390, 'gStone4').setOrigin(0, 1);
        //stone3.setTintFill(0x0FFF00);
        stone3.angle = -5;
        this.groundContainer.add(stone3);
        /**
         * Champignon a gauche du pont
         * @type {Phaser.GameObjects.Image}
         */
        let mushroom1=this.add.image(130, 345, 'gMushroom1').setOrigin(0, 1);
        //mushroom1.setScale(-1, 1);
        //mushroom1.setTintFill(0x0FFF00);
        mushroom1.angle=12;
        this.groundContainer.add(mushroom1);
        /**
         * Champignon a gauche du pont
         * @type {Phaser.GameObjects.Image}
         */
        let mushroom2=this.add.image(1300, 400, 'gMushroom1').setOrigin(0, 1);
        //mushroom1.setScale(-1, 1);
        //mushroom1.setTintFill(0x0FFF00);
        mushroom2.angle=-12;
        this.groundContainer.add(mushroom2);
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(-150,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * Terrain 4
         * @type {Phaser.GameObjects.Image}
         */
        let gMid4=this.add.image(780,570, 'gRight').setOrigin(0,0);
        gMid4.setScale(-1, -1);
        gMid4.angle=90;
        this.groundContainer.add(gMid4);
        /**
         * Terrain 5
         * @type {Phaser.GameObjects.Image}
         */
        let gMid5=this.add.image(1552,570, 'gRight').setOrigin(0,0);
        gMid5.setScale(1, -1);
        gMid5.angle =-90;
        this.groundContainer.add(gMid5);
        /**
         * Terrain 6
         * @type {Phaser.GameObjects.Image}
         */
        let gMid6=this.add.image(1880,600, 'gRight').setOrigin(0,0);
        gMid6.setScale(1, 1);
        gMid6.angle =-90;
        this.groundContainer.add(gMid6);
        /**
         * De l'herbe en textures qui se répète a gauche
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * De l'herbe en textures qui se répète a droite
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass3=this.add.tileSprite(820,385,700,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass3);
        //grass3.angle = 5;
        /**
         * De l'herbe en textures qui se répète a droite
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass4=this.add.tileSprite(820,385,700,50,'g-grass-2').setOrigin(0,1)
        this.groundContainer.add(grass4);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * liane gauche
         * @type {Phaser.GameObjects.TileSprite}
         */
        let liane1=this.add.tileSprite(530,0,23,300,'liane').setOrigin(0,0)
        liane1.setScale(.5)
        this.groundContainer.add(liane1);
        /**
         * liane droite
         * @type {Phaser.GameObjects.TileSprite}
         */
        let liane2=this.add.tileSprite(550,0,23,150,'liane').setOrigin(0,0)
        liane2.setScale(.5)
        liane2.angle = -5;
        this.groundContainer.add(liane2);
        /**
         * arbre couché
         * @type {Phaser.GameObjects.Image}
         */
        let groundTree=this.add.image(1500,280, 'groundTree').setOrigin(0,0);
        groundTree.setScale(1)
        groundTree.angle = 5;
        this.groundContainer.add(groundTree);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0).setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });


        /**
         * filtre type bloody
         * @type {Phaser.GameObjects.Sprite}
         */

        this.filterBloody = this.add.sprite(0, 0).setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'bloody',
            frames: [
                {key:'filterBloody1'},
                {key:'filterBloody1'},
                {key:'filterBloody1'},
            ],
            frameRate: 16,
            repeat: -1
        });

        this.filterSnow = this.add.sprite(0, 0).setOrigin(0,0);
        this.anims.create({
            key: 'snow',
            frames: [
                {key:'filterSnow1'},
                {key:'filterSnow2'},
                {key:'filterSnow3'},
                {key:'filterSnow4'},
                {key:'filterSnow5'},
            ],
            frameRate: 16,
            repeat: -1
        });

        this.filterFilm.play('film');
        this.filterSnow.play('snow');


        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //J'ai placé l'animation plus haut sinon elle cachais le reste car elle etait en premier plan

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        let acceleration = 4;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 1220, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        this.bgAnimation.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.filterBloody.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2*acceleration;
        this.bg1Container.scrollFactorX=0.4*acceleration;
        this.groundContainer.scrollFactorX=acceleration;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-1;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;
        console.log(this.cameras.main.scrollX);
        if(this.cameras.main.scrollX >=250){
            this.filterBloody.play('bloody', true)
            //this.filterFilm.play('film', false)
            /*this.filterBloody.frame = [
                {key:'filterBloody1'},
                {key:'filterBloody1'},
                {key:'filterBloody1'},
            ];*/
        }
        else if (this.cameras.main.scrollX <250){
            this.filterBloody.stop();
        }

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}

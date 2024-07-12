class Scene1 extends Phaser.Scene {
    constructor () {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "assets/images/background.png");

        this.load.spritesheet("Meteor1", "assets/images/Meteor1.png", {
            frameWidth: 42,
            frameHeight: 39
        });
        this.load.spritesheet("Meteor2", "assets/images/Meteor2.png", {
            frameWidth: 22,
            frameHeight: 20
        });
        this.load.spritesheet("Meteor3", "assets/images/Meteor3.png", {
            frameWidth: 31,
            frameHeight: 36
        });
        this.load.spritesheet("Star", "assets/images/Star.png", {
            frameWidth: 40,
            frameHeight: 37
        });
        this.load.spritesheet("fire", "assets/images/fire.png", {
            frameWidth: 54,
            frameHeight: 54
        });

        this.load.spritesheet("Shield","assets/images/Shield.png", {
            frameWidth: 61,
            frameHeight: 61
        } );
        // this.load.spritesheet("Shield2","assets/images/Shield2.png", {
        //     frameWidth: 61,
        //     frameHeight: 61
        // } )

        this.load.spritestheet("player", "assets/images/player.png" ,{
            frameWidth: 98,
            frameHeight: 87
        });

        this.load.spritesheet("Rocket", "assets/images/Rocket.png", {
            frameWidth: 17,
            frameHeight: 26
        });
    }


    create() {
        this.add.text(25, 111, "Loading game...", {font: "25px Arial", fill: "#FFFFFF"});
        this.scene.start("playGame");

        this.anims.create({
            key: "Meteor1_anim",
            frames: this.anims.generateFrameNumbers("Meteor1"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "Meteor2_anim",
            frames: this.anims.generateFrameNumbers("Meteor2"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "Meteor3_anim",
            frames: this.anims.generateFrameNumbers("Meteor3"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "Star_anim",
            frames: this.anims.generateFrameNumbers("Star"),
            frameRate: 20,
            repeat: -1
            
        });

        this.anims.create({
            key: "firekey",
            frames: this.anims.generateFrameNumbers("fire"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("Shield", {start: 0, end: 1}),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("Shield", {start: 2, end: 3}),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "Rocket_anim",
            frames: this.anims.generateFrameNumbers("Rocket"),
            frameRate: 20,
            repeat: -1
        });
    }
}


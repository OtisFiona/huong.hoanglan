class Scene2 extends Phaser.Scene {
    constructor () {
        super("playGame");
    }
    create()
    {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        this.Meteor1 = this.add.sprite(config.with/2 - 50, config.height/2, "Meteor1");
        this.Meteor2 = this.add.sprite(config.with/2, config.height/2, "Meteor2");
        this.Meteor3 = this.add.sprite(config.with/2 - 50, config.height/2, "Meteor3");
        this.Star = this.add.sprite(config.with/2 + 30, config.height/2, "Star");

        this.enemies = this.physics.add.group();
        this.enemies.add(this.Meteor1);
        this.enemies.add(this.Meteor2);
        this.enemies.add(this.Meteor3);
        this.enemies.add(this.Star);
        
        this.Meteor1.play("Meteor1_anim");
        this.Meteor2.play("Meteor2_anim");
        this.Meteor3.play("Meteor3_anim");
        this.Star.play("Star_anim");

        this.Meteor1.setInteractive();
        this.Meteor2.setInteractive();
        this.Meteor3.setInteractive();
        this.Star.setInteractive();

        this.input.on('gameobjectdown', this.destroyShip, this);

        this.add.text(30, 30, "Playing game", {font: "25px Arial", fill: "yellow"});

        this.powerUps = this.physics.add.group();

        var maxObjects = 4;
        for(var i = 0; i <= maxObjects; i++){
            var powerUp = this.physics.add.sprite(16, 16, "Shield");
            this.powerUps.add(powerUp);
            powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);
        }

        if (Math.random() > 0.5){
            powerUp.play("red");
        }
        else{
            powerUp.play("gray");
        }

        powerUp.setVelocity(100, 100);
        powerUp.setCollideWorldBounds(true);
        powerUp.setBounce(1);

        this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, "player");
        this.player.play("thrust");
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);

        this.spacebar = this.input.keyboard.addKey(Phaser.input.Keyboard.KeyCodes.SPACE);
        this.projectiles = this.add.group();

        this.physics.add.collider(this.projectiles, this.powerUps, function(projectile, powerUp) {
            projectile.destroy();
        });

        this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, null, this);
        this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
        this.physics.add.overlap(this.player, this.enemies, this.hitEnemy, null, this);


    }
    
    pickPowerUp(player, powerUp){
        powerUp.disableBody(true, true);
    }

    hurtPlayer(player, enemy){
        this.resetShipPos(enemy);
        player.x = config.width / 2 -8;
        player.x = config.height - 64;
    }

    hitEnemy(projectile, enemy){
        projectile.destroy();
        this.resetShipPos(enemy);
    }

    moveShip( ship, speed){
        ship.y += speed;
        if (ship.y > config.height){
            this.resetShipPos(ship);
        }
    }

    update() {
        this.moveShip(this.Meteor1, 1);
        this.moveShip(this.Meteor2, 2);
        this.moveShip(this.Meteor3, 3);
        this.moveShip(this.Star, 4);

        this.background.tilePositionY = -0.5;
        this.movePlayerManager();

        if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
            console.log("Fire!");
        }

        if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
            this.shootRocket;
        }

        for(var i = 0; i < this.projectiles.getChildren().length; i++){
            var rocket = this.projectiles.getChildren()[i];
            rocket.update;
        }
    }

    resetShipPos(ship) {
        ship.y = 0;
        var randomX = Phaser.Math.Between(0, config.with);
        ship.x = randomX;
    }

    destroyShip(pointer, gameobject){
        gameobject.setTexture("fire");
        gameobject.play("firekey");

    }

    movePlayerManager(){
        if(this.cursorKeys.left.isDown){
            this.player.setVelocityX(-gameSettings.playerSpeed);
        }
        else if(this.cursorKeys.right.isDown){
            this.player.setVelocityX(gameSettings.playerSpeed);
        }

        if(this.cursorKeys.up.isDown){
            this.player.setVelocityY(-gameSettings.playerSpeed);
        }
        else if(this.cursorKeys.down.isDown){
            this.player.setVelocityY(gameSettings.playerSpeed);
        }
    }

    shootRocket(){
        var rocket = new Rocket(this);
        var rocket = this.physics.add.sprite(this.player.x, this.player.y, "Rocket")
    }
}
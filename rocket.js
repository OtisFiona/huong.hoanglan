class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene){

        var x = scene.player.x;
        var y = scene.player.y - 10;

        super(scene, x, y, "Rocket");
        scene.projectiles.add(this);

        this.play("Rocket_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;
    }

    update(){
        if(this.y < 32){
            this.destroy();
        }
    }
}
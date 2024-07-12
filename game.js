
var gameSettings = {
    playerSpeed: 200
}
var config = {
    with: 640,
    width: 640,
    height: 480,
    backgroundcolor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}

var game = new Phaser.Game(config);

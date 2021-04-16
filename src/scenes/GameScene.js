import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  //   preload() {
  //     // load images
  //     this.load.image('logo', 'assets/sky.png');
  //   }

//   create() {
//     this.add.image(400, 300, 'logo');
//     this.scene.start('Boot');
//   }
}
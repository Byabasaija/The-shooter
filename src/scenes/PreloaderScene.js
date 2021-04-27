
import Phaser from 'phaser';


export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  create() {
    this.scene.start('Title');
  }
}

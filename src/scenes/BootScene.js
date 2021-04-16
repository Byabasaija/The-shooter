import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  create() {
    this.add.text(10, 15, 'Welcome to Shooter', { font: '"Press Start 2P"' });
    this.scene.start('Preloader');
  }
}
import Phaser from 'phaser';
import Ship from '../Objects/Ship';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('ship', 'assets/SpaceShooterRedux/PNG/playerShip1_orange.png');
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.myShip = new Ship(this, 400, 500);
    this.add.existing(this.myShip);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.myShip.moveLeft();
    }

    if (this.cursors.right.isDown) {
      this.myShip.moveRight();
    }

    if (this.cursors.up.isDown) {
      this.myShip.moveUp();
    }

    if (this.cursors.down.isDown) {
      this.myShip.moveDown();
    }

    if (this.cursors.space.isDown) {
      // shooting guns goes here
    }
  }
}
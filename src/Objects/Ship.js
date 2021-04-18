import Phaser from 'phaser';

export default class Ship extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.setTexture('ship');
    this.setPosition(x, y);
    this.deltaX = 5;
    this.deltaY = 5;
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= this.deltaX;
    }
  }

  moveRight() {
    if (this.x < this.width) {
      this.x += this.deltaX;
    }
  }

  moveUp() {
    if (this.y > 0) {
      this.y -= this.deltaY;
    }
  }

  moveDown() {
    if (this.y < this.height) {
      this.y += this.deltaY;
    }
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);
  }
}

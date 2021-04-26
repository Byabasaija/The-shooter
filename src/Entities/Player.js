// import Phaser from 'phaser';
import Entity from './Entity';
import PlayerLaser from './PlayerLaser';

export default class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, 'Player');
    this.setData('speed', 200);
    this.setData('isShooting', false);
    this.setData('timerShootDelay', 20);
    this.setData('timerShootTick', this.getData('timerShootDelay') - 1);
  }


  create() {
    this.body.collideWorldBounds = true;
  }

  moveUp() {
    this.body.angularVelocity = -this.getData('speed');
  }

  moveDown() {
    this.body.angularVelocity = this.getData('speed');
  }

  moveLeft() {
    this.body.angularVelocity = -this.getData('speed');
  }

  moveRight() {
    this.body.angularVelocity = this.getData('speed');
  }

  update() {
    this.body.maxVelocity.set(400);
    if (this.getData('isShooting')) {
      if (this.getData('timerShootTick') < this.getData('timerShootDelay')) {
        this.setData('timerShootTick', this.getData('timerShootTick') + 1);
      } else {
        const laser = new PlayerLaser(this.scene, this.x, this.y);
        this.scene.playerLasers.add(laser);

        this.scene.sfx.laser.play();
        this.setData('timerShootTick', 0);
      }
    }
  }
}

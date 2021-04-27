import Phaser from 'phaser';


export default class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
    this.gameScore = 0;
    this.myScore = 0;
    this.savedScore = 0;
  }

  preload() {
    this.load.image('sprBtnRestart', 'assets/sprBtnRestart.png');
    this.load.image('sky', 'assets/sky.png');
  }

  create() {
    this.add.tileSprite(0, 0, 1500, 1300, 'sky');
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'Roboto',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);
    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnRestart', {
        fontFamily: 'Courgette, cursive',
        fontSize: 48,
      },
    );

    this.btnRestart.setOrigin(0.5, 0.5);

    this.btnRestart.setInteractive();
    this.btnRestart.on('pointerup',
      function () {
        this.scene.start('Game');
      }, this);

    this.gameScore = localStorage.getItem('gameScore');
    this.myScore = parseInt(this.gameScore, 10);

    this.textScore = this.add.text(
      100,
      200,
      `Your Score: ${this.gameScore}`,
      {
        fontFamily: 'monospace',
        fontSize: 30,
        color: '#fff',
      },
    );
  }
}

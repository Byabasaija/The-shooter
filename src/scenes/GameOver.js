import Phaser from 'phaser';
import { sendScore } from '../score/scoreApi';

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
    this.load.image('leaderboad', 'assets/leaderboad.png');
  }

  create() {
    this.add.tileSprite(0, 0, 1500, 1300, 'sky');
    this.title = this.add.text(this.game.config.width * 0.5, 90, 'GAME OVER', {
      fontFamily: 'Roboto',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);
    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      'sprBtnRestart', {
        fontFamily: 'Courgette, cursive',
        fontSize: 48,
      },
    );

    this.btnRestart.setOrigin(0.5, 0.5);

    this.btnRestart.setInteractive();
    this.btnRestart.on('pointerup',
      // eslint-disable-next-line func-names
      function () {
        this.scene.start('Game');
      }, this);

    this.btnLeaderBoard = this.add.sprite(
      230,
      200,
      'leaderboad', {
        fontFamily: 'monospace',
        fontSize: 32,
      },
    );

    this.btnLeaderBoard.setInteractive();
    this.btnLeaderBoard.on('pointerup',
      // eslint-disable-next-line func-names
      function () {
        this.scene.start('LeaderBoard');
      }, this);

    this.gameScore = localStorage.getItem('gameScore');
    this.myScore = parseInt(this.gameScore, 10);
    this.highScore = localStorage.getItem('highScore');
    this.savedScore = parseInt(this.highScore, 10);
    this.playerName = localStorage.getItem('playerName');

    sendScore(this.playerName, this.gameScore);
    this.textScore = this.add.text(
      100,
      350,

      `Score: ${this.gameScore}`,
      {
        fontFamily: 'monospace',
        fontSize: 30,
        color: '#fff',
      },
    );
  }
}

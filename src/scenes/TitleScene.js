import Phaser from 'phaser';
// import Button from '../Objects/Ship';
// import config from '../config/config';


export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  prealod() {
    this.load.image('sprBtnPlay', 'assets/sprBtnPlay.png');
    this.load.image('sprBtnPlayHover', 'assets/sprBtnPlayHover.png');
    this.load.image('sprBtnPlayDown', 'assets/sprBtnPlayDown.png');
    this.load.image('sprBtnRestart', 'assets/sprBtnRestart.png');
    this.load.image('sprBtnRestartHover', 'assets/sprBtnRestartHover.png');
    this.load.image('sprBtnRestartDown', 'assets/sprBtnRestartDown.png');

    this.load.audio('sndBtnOver', 'assets/sndBtnOver.wav');
    this.load.audio('sndBtnDown', 'assets/sndBtnDown.wav');
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,

      this.game.config.height * 0.5,
      'sprBtnPlayHover',
    );

    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerup',
      function () {
        this.btnPlay.setTexture('sprBtnPlayHover');
        this.scene.start('Game');
      }, this);
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'Shooter Ship', {
      fontFamily: 'Courgette, cursive',
      fontSize: 48,
      fontStyle: 'italic',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);
  }
}

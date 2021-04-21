import Phaser from 'phaser';


export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  prealod() {
    this.load.image('sprBtnPlay', 'assets/sprBtnPlay.png');
    this.load.image('sprBtnPlayHover', 'assets/sprBtnPlayHover.png');
    this.load.image('sprBtnPlayDown', 'assets/sprBtnPlayDown.png');

    this.load.audio('sndBtnOver', 'assets/sndBtnOver.wav');
    this.load.audio('sndBtnDown', 'assets/sndBtnDown.wav');
  }

  create() {
    this.btnPlay = this.add.text(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'START', {
        fontFamily: 'Courgette, cursive',
        fontSize: 48,
      },
    );
    this.btnPlay.setOrigin(0.5, 0.5);

    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerup',
      function () {
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

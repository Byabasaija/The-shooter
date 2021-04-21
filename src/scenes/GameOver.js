import Phaser from 'phaser';


export default class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  prealod() {
    this.load.image('sprBtnRestart', 'assets/sprBtnRestart.png');
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'Roboto',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);
    this.btnRestart = this.add.text(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'RESTART', {
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
  }
}

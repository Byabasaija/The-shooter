import Phaser from 'phaser';


export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  prealod() {
    this.load.image('sky', 'assets/sky.png');

    this.load.image('sprBtnPlay', 'assets/sprBtnPlay.png');
    this.load.image('sprBtnPlayHover', 'assets/sprBtnPlayHover.png');
    this.load.image('sprBtnPlayDown', 'assets/sprBtnPlayDown.png');
    this.load.audio('sndBtnOver', 'assets/sndBtnOver.wav');
    this.load.audio('sndBtnDown', 'assets/sndBtnDown.wav');
  }

  create() {
    // this.add.tileSprite(0, 0, 1500, 1300, 'sky');

    this.btnPlay = this.add.text(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'START', {
        fontFamily: 'Courgette, cursive',
        fontSize: 48,
      },
    );
    this.btnPlay.setOrigin(0.5, 0.5);

    this.input = this.add.dom(200, 235, 'input', {
      type: 'text',
      name: 'name',
      fontSize: '30px',
      backgroundColor: '#fff',
    });

    const nameInput = document.createElement('input');
    nameInput.placeholder = 'Player name';
    nameInput.type = 'text';
    nameInput.id = 'username';
    nameInput.className = 'username';

    document.querySelector('#game').appendChild(nameInput);


    this.alertMsg = this.add.text(35, 40,
      '', {
        fontFamily: 'monospace',
        fontSize: 22,
        fontStyle: 'bold',
        color: 'red',
      });


    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerup', () => {
      if (nameInput.value !== '') {
        localStorage.setItem('playerName', nameInput.value);
        nameInput.style.display = 'none';
        this.scene.start('Game');
      } else {
        this.alertMsg.setText('Please Enter name');
      }
    });
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

import Phaser from 'phaser';
// import Model from './Model';
import config from './config/config';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';


class Game extends Phaser.Game {
  constructor() {
    super(config);
    // const model = new Model();
    // this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
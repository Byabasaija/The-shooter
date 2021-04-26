import Phaser from 'phaser';
// import Model from './Model';
/* eslint-disable import/no-unresolved */

import './assets/style.css';
import config from './config/config';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
import GameOver from './scenes/GameOver';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOver);
    this.scene.start('Boot');
  }
}

window.game = new Game();
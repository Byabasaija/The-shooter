import Phaser from 'phaser';
import { getScores } from '../score/scoreApi';

export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  preload() {
    this.load.image('sky', 'assets/sky.png');
  }

  create() {
    this.add.tileSprite(0, 0, 1500, 1300, 'sky');
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'LEADERBOARD', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
    });
    this.title.setOrigin(0.5);

    this.score1 = this.add.text(100, 200, '', {
      fontFamily: 'monospace',
      fontSize: 30,
      color: '#fff',
      align: 'center',
    });

    this.score2 = this.add.text(100, 250, '', {
      fontFamily: 'monospace',
      fontSize: 30,
      color: '#fff',
      align: 'center',
    });

    this.score3 = this.add.text(100, 300, '', {
      fontFamily: 'monospace',
      fontSize: 30,
      color: '#fff',
      align: 'center',
    });


    this.topScore();
  }

  async topScore() {
    const resultObject = await getScores();

    if (Array.isArray(resultObject.result)) {
      this.scores = resultObject.result.sort((a, b) => ((a.score > b.score) ? -1 : 1));
      this.score1.setText(`${1.0}  ${this.scores[0].user} : ${this.scores[0].score}`);
      this.score2.setText(`${2.0}  ${this.scores[1].user} : ${this.scores[1].score}`);
      this.score3.setText(`${3.0}  ${this.scores[2].user} : ${this.scores[2].score}`);
    } else {
      this.score1.setText(resultObject);
    }
  }
}

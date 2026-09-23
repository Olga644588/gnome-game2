import { GameField } from './GameField.js';

export class Game {
  constructor() {
    this.score = 0;
    this.field = new GameField('game-field');
    this.currentGoblinPos = null;
  }

  start() {
    this.field.renderGrid(4);

    this.field.onCellClick((row, col) => {
      this.handleClick(row, col);
    });

    this.spawnGoblin();
  }

  handleClick(row, col) {
    const [gRow, gCol] = this.currentGoblinPos;

    if (row === gRow && col === gCol) {
      this.score++;
      this.updateScore();
      this.spawnGoblin();
    } else {
    }
  }

  spawnGoblin() {
    const size = 4;
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);

    this.currentGoblinPos = [row, col];
    this.field.showGoblin(row, col);
  }

  updateScore() {
    const scoreboard = document.getElementById('scoreboard');
    if (scoreboard) {
      scoreboard.textContent = `Счёт: ${this.score}`;
    }
  }

  restart() {
    this.score = 0;
    this.updateScore();
    this.field.hideGoblin();
    this.spawnGoblin();
  }
}

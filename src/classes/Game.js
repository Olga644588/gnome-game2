import { GameField } from './GameField.js';

export class Game {
  constructor() {
    this.score = 0;
    this.missed = 0;
    this.maxMissed = 5;
    this.field = new GameField('game-field');
    this.currentGoblinPos = null;
    this.goblinTimer = null;
    this.isGameOver = false;
  }

  start() {
    this.isGameOver = false;
    this.score = 0;
    this.missed = 0;
    this.updateScore();

    this.field.renderGrid(4);

    this.field.onCellClick((row, col) => {
      this.handleClick(row, col);
    });

    this.spawnGoblin();
  }

  handleClick(row, col) {
    if (this.isGameOver || !this.currentGoblinPos) return;

    const [gRow, gCol] = this.currentGoblinPos;

    if (row === gRow && col === gCol) {
      this.score++;
      this.updateScore();
      this.field.hideGoblin();
      clearTimeout(this.goblinTimer);
      this.spawnGoblin();
    }
  }

  spawnGoblin() {
    if (this.isGameOver) return;

    const size = 4;
    let row, col;

    do {
      row = Math.floor(Math.random() * size);
      col = Math.floor(Math.random() * size);
    } while (
      this.currentGoblinPos &&
      row === this.currentGoblinPos[0] &&
      col === this.currentGoblinPos[1]
    );

    this.currentGoblinPos = [row, col];
    this.field.showGoblin(row, col);

    this.goblinTimer = setTimeout(() => {
      this.handleMiss();
    }, 1000);
  }

  handleMiss() {
    this.missed++;
    this.updateScore();
    this.field.hideGoblin();
    this.currentGoblinPos = null;

    if (this.missed >= this.maxMissed) {
      this.gameOver();
    } else {
      this.spawnGoblin();
    }
  }

  gameOver() {
    this.isGameOver = true;
    clearTimeout(this.goblinTimer);
    this.field.hideGoblin();
    this.currentGoblinPos = null;

    const scoreboard = document.getElementById('scoreboard');
    if (scoreboard) {
      scoreboard.innerHTML = `Игра окончена! Счёт: <b>${this.score}</b>`;
    }

    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
      restartBtn.style.display = 'inline-block';
    }
  }

  updateScore() {
    const el = document.getElementById('scoreboard');
    if (el) {
      el.innerHTML = `Счёт: <b>${this.score}</b> | Пропущено: ${this.missed}/${this.maxMissed}`;
    }
  }

  restart() {
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
      restartBtn.style.display = 'none';
    }
    this.start();
  }
}

import { GameField } from './GameField.js';
import { Goblin } from './Goblin.js';
import { Scoreboard } from './Scoreboard.js';

export class Game {
  constructor() {
    this.field = new GameField('game-field');
    this.goblin = new Goblin();
    this.scoreboard = new Scoreboard('scoreboard');
    this.isRunning = false;
    this.timer = null;
    this.bindEvents();
  }

  bindEvents() {
    const restartBtn = document.getElementById('restart-btn');
    restartBtn.addEventListener('click', () => this.start());

    this.field.onCellClick((row, col) => {
      if (!this.isRunning || !this.goblin.isVisible()) return;
      if (row === this.goblin.row && col === this.goblin.col) {
        this.hit();
      }
    });
  }

  start() {
    this.scoreboard.reset();
    this.field.hideGoblin();
    document.getElementById('restart-btn').style.display = 'none';
    this.isRunning = true;
    this.nextSpawn();
  }

  nextSpawn() {
    if (!this.isRunning) return;
    const { row, col } = this.goblin.spawn(4, 4);
    this.field.showGoblin(row, col);

    this.timer = setTimeout(() => {
      if (this.goblin.isVisible()) {
        this.field.hideGoblin();
        this.goblin.disappear();
        if (this.miss()) {
          this.endGame();
        } else {
          this.nextSpawn();
        }
      }
    }, this.goblin.durationMs);
  }

  hit() {
    this.scoreboard.hit();
    this.field.hideGoblin();
    this.goblin.disappear();
    this.nextSpawn();
  }

  miss() {
    return this.scoreboard.miss();
  }

  endGame() {
    this.isRunning = false;
    clearTimeout(this.timer);
    document.getElementById('restart-btn').style.display = 'block';
  }
}

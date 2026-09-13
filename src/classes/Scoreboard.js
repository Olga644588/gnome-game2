export class Scoreboard {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.score = 0;
    this.misses = 0;
    this.maxMisses = 5;
    this.update();
  }

  hit() {
    this.score++;
    this.update();
  }

  miss() {
    this.misses++;
    this.update();
    return this.misses >= this.maxMisses;
  }

  reset() {
    this.score = 0;
    this.misses = 0;
    this.update();
  }

  update() {
    if (this.element) {
      this.element.textContent = `Счёт: ${this.score} | Промахи: ${this.misses} / ${this.maxMisses}`;
    }
  }

  gameOver() {
    return this.misses >= this.maxMisses;
  }
}

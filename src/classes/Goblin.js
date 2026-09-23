export class Goblin {
  constructor() {
    this.row = -1;
    this.col = -1;
    this.isActive = false;
    this.durationMs = 1000;
  }

  spawn(rows, cols, currentPosition = null) {
    let r, c;

    do {
      r = Math.floor(Math.random() * rows);
      c = Math.floor(Math.random() * cols);
    } while (
      currentPosition &&
      r === currentPosition.row &&
      c === currentPosition.col
    );

    this.row = r;
    this.col = c;
    this.isActive = true;

    return { row: r, col: c };
  }

  disappear() {
    this.isActive = false;
  }

  isVisible() {
    return this.isActive;
  }
}

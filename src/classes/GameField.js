import goblinImage from '../assets/goblin.png';

export class GameField {
  constructor(id) {
    this.container = document.getElementById(id);
    this.goblinElement = null;
    this.goblinSrc = goblinImage;
  }

  showGoblin(row, col) {
    if (this.goblinElement) {
      this.goblinElement.remove();
      this.goblinElement = null;
    }

    const cell = this.container.querySelector(
      `.cell[data-row="${row}"][data-col="${col}"]`
    );

    if (!cell) return;

    this.goblinElement = document.createElement('img');
    this.goblinElement.src = this.goblinSrc;
    this.goblinElement.className = 'goblin-img';
    this.goblinElement.alt = 'Гоблин';

    cell.append(this.goblinElement);
  }

  hideGoblin() {
    if (this.goblinElement) {
      this.goblinElement.remove();
      this.goblinElement = null;
    }
  }

  onCellClick(callback) {
    this.container.addEventListener('click', (e) => {
      const cell = e.target.closest('.cell');
      if (!cell) return;

      const row = parseInt(cell.dataset.row, 10);
      const col = parseInt(cell.dataset.col, 10);

      callback(row, col);
    });
  }
}

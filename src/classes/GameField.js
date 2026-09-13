export class GameField {
  constructor(containerId, rows = 4, cols = 4) {
    this.container = document.getElementById(containerId);
    this.rows = rows;
    this.cols = cols;
    this.cells = [];
    this.goblinElement = null;
    this.init();
  }

  init() {
    this.container.innerHTML = '';
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.row = r;
        cell.dataset.col = c;
        this.container.appendChild(cell);
        this.cells.push(cell);
      }
    }
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

    this.goblinElement = document.createElement('div');
    this.goblinElement.className = 'goblin';
    cell.appendChild(this.goblinElement);
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

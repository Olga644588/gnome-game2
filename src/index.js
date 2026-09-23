import './styles.css';
import { Game } from './classes/Game.js';

const game = new Game();
game.start();

document.title = 'Убей гоблина';

const restartBtn = document.getElementById('restart-btn');
if (restartBtn) {
  restartBtn.addEventListener('click', () => {
    game.restart();
  });
}

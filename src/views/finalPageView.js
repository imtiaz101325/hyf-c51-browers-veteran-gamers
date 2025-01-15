import { RESTART_GAME_BUTTON_ID } from '../constants.js';

export const createFinalPAgeElement = () => {
  const finalPageElement = document.createElement('div');
  const playerName = localStorage.getItem('playerName') || 'player';
  finalPageElement.innerHTML = String.raw`
    Well played! ${playerName}
    <button id = ${RESTART_GAME_BUTTON_ID}>Restart game</button>`;
  return finalPageElement;
};

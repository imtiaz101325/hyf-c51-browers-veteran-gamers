import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { PLAYER_NAME_INPUT_ID } from '../constants.js';
/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1 class = "welcome-text">Welcome to the veteran gamers test</h1>
    <label for="${PLAYER_NAME_INPUT_ID}" class="player-name"> Player name </label>
    <input type="text" id ="${PLAYER_NAME_INPUT_ID}">
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};

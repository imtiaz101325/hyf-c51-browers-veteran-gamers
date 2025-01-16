import { RESTART_GAME_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';

export const createFinalPAgeElement = () => {
  const finalPageElement = document.createElement('div');
  const playerName = localStorage.getItem('playerName') || 'player';
  finalPageElement.innerHTML = String.raw`
    <p> Well played! ${playerName} </p>
    <p> Your score result is : ${quizData.scoreResult} out of ${quizData.questions.length} </p>
    <button id = ${RESTART_GAME_BUTTON_ID}>Restart game</button>`;
  return finalPageElement;
};

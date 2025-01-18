import { RESTART_GAME_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';

export const createFinalPAgeElement = (finalMessage, gif) => {
  const finalPageElement = document.createElement('div');
  finalPageElement.innerHTML = String.raw`
    <p class="final-message">  ${finalMessage} </p>
    <img class ='final-gif' src ="${gif} ">
    <p class="final-message"> Your score result is : ${quizData.scoreResult} out of ${quizData.questions.length} </p>
    <button id = ${RESTART_GAME_BUTTON_ID}>RESTART </button>`;
  return finalPageElement;
};

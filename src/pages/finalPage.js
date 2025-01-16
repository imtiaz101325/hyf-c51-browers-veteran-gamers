import { USER_INTERFACE_ID } from '../constants.js';
import { RESTART_GAME_BUTTON_ID } from '../constants.js';
import { createFinalPAgeElement } from '../views/finalPageView.js';
import { initWelcomePage } from '../pages/welcomePage.js';
import { quizData } from '../data.js';

export const initFinalPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const finalPageElement = createFinalPAgeElement();
  userInterface.appendChild(finalPageElement);

  document
    .getElementById(RESTART_GAME_BUTTON_ID)
    .addEventListener('click', restartGame);
};
const restartGame = () => {
  quizData.currentQuestionIndex = 0;
  initWelcomePage();
};

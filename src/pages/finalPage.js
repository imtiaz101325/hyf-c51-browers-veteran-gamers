import { USER_INTERFACE_ID } from '../constants.js';
import { RESTART_GAME_BUTTON_ID } from '../constants.js';
import { createFinalPAgeElement } from '../views/finalPageView.js';
import { initWelcomePage } from '../pages/welcomePage.js';
import { quizData } from '../data.js';

export const initFinalPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  // final page element that will update the message and the gif
  const playerName = quizData.playerName || 'player';

  let finalMessage, gif;

  if (quizData.scoreResult >= 7) {
    finalMessage = `Well done Veteran, ${quizData.playerName}`;
    gif = 'public/gif-wow.gif';
  } else {
    finalMessage = ` Maybe you need to play more, ${quizData.playerName}. Try later`;
    gif = 'public/gif-fail.gif';
  }

  const finalPageElement = createFinalPAgeElement(finalMessage, gif);
  userInterface.appendChild(finalPageElement);

  document
    .getElementById(RESTART_GAME_BUTTON_ID)
    .addEventListener('click', restartGame);
};
const restartGame = () => {
  quizData.currentQuestionIndex = 0;
  quizData.scoreResult = 0; // reset the score result again
  initWelcomePage();
};

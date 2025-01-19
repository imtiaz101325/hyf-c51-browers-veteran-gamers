import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { PLAYER_NAME_INPUT_ID } from '../constants.js';
import { quizData } from '../data.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  const PlayerInputName = document.getElementById(PLAYER_NAME_INPUT_ID);
  const playerName = PlayerInputName.value || 'player';
  quizData.playerName = playerName;
  initQuestionPage();
};

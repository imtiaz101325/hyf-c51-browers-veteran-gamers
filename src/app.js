import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';
import { initFinalPage } from './pages/finalPage.js';

const loadApp = () => {
  const savedProgress = localStorage.getItem('quizProgress');

  if (savedProgress) {
    const progress = JSON.parse(savedProgress);

    // Restore quiz data from saved progress
    quizData.currentQuestionIndex = progress.currentQuestionIndex;
    quizData.scoreResult = progress.scoreResult;
    quizData.questions = progress.questions;

    // If the user has completed all the questions, go to the final page
    if (quizData.currentQuestionIndex === quizData.questions.length) {
      initFinalPage();
    } else {
      // Otherwise, continue with the question page
      initQuestionPage();
    }
  } else {
    // If no saved progress, load the welcome page
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);

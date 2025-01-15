import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

// event listener function for 'skip question' button
const skipQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;

  // Highlighting the correct answer:

  const answersList = document.getElementById(ANSWERS_LIST_ID);
  if (answersList) {
    const correctAnswerElement = answersList.querySelector(
      `[data-answer="${correctAnswer}"]`
    );
    if (correctAnswerElement) {
      correctAnswerElement.classList.add('highlight-correct');
    }
  }

  // waiting function for 2 seconds, then move to the next question
  setTimeout(() => {
    quizData.currentQuestionIndex += 1;
    initQuestionPage();
  }, 2000);
};

// To attach event listener for the skip question button

document
  .getElementById('skip-question-button')
  .addEventListener('click', skipQuestion);

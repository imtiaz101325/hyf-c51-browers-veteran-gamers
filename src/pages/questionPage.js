import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SKIP_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initFinalPage } from './finalPage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);

  // adding score live status during the quiz,
  let scoreEl = document.getElementById('current-score');
  if (!scoreEl) {
    scoreEl = document.createElement('div');
    scoreEl.id = 'current-score';
    userInterface.appendChild(scoreEl);
  }
  scoreEl.textContent = ` Your score: ${quizData.scoreResult}`;

  // extra,  allowing for new styling if the score is higher than 5
  if (quizData.scoreResult > 5) {
    scoreEl.classList.add('good-score');
  } else {
    scoreEl.classList.remove('good-score');
  }

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    // here added listener to be able to select answer anywhere on the li elemnt not only on the btn
    const input = answerElement.querySelector('input');

    answerElement.addEventListener('click', () => input.click());

    // found element with tag input and listener. Look checked radioButton or not. if yes value this btn is  currentQuestion.selected
    answerElement
      .querySelector('input')
      .addEventListener('change', function () {
        if (this.checked) {
          currentQuestion.selected = this.id;
        }
      });
  }

  // Attach event listener to the "Next question" button
  if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', toFinalPage);
  } else {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', nextQuestion);
  }

  // attach event listener for the skip button
  document
    .getElementById(SKIP_QUESTION_BUTTON_ID)
    ?.addEventListener('click', skipQuestion);
};

const toFinalPage = () => {
  initFinalPage();
};

const nextQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  // check if the selected answer is correct
  if (currentQuestion.selected === currentQuestion.correct) {
    quizData.scoreResult += 1; // increase the score result when the selected answer is correct
  }
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

//Event listener function for the skip question button
const skipQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;

  //Highlighting the correct answer
  const answersList = document.getElementById(ANSWERS_LIST_ID);
  if (answersList) {
    const correctAnswerElement = answersList.querySelector(
      `[data-answer="${correctAnswer}"]`
    );
    if (correctAnswerElement) {
      correctAnswerElement.classList.add('highlight-correct');
    }
  }

  // Waiting for 2 seconds, then moving to the next question
  setTimeout(() => {
    quizData.currentQuestionIndex += 1;
    initQuestionPage();
  }, 1000);
};

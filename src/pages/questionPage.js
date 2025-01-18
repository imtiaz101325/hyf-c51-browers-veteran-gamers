import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
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

  // creating a progress bar to indicate for the user how far he is progressing.
  const progressBarEl = document.createElement('div');
  progressBarEl.classList.add('progress-bar-element');
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  progressBarEl.appendChild(progressBar);
  userInterface.appendChild(progressBarEl);
  const progress =
    (quizData.currentQuestionIndex / quizData.questions.length) * 100;
  progressBar.style.width = `${progress}%`;

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

    const listItems = document.querySelectorAll('li');

    // here added listener to be able to select answer anywhere on the li element not only on the btn
    const input = answerElement.querySelector('input');
    answerElement.addEventListener('click', () => input.click());

    input.addEventListener('change', function () {
      if (this.checked) {
        currentQuestion.selected = this.id;

        // disable the inputs to prevent the user from changing his answers

        const answerOptions = document.querySelectorAll(
          `#${ANSWERS_LIST_ID} input`
        );
        answerOptions.forEach((option) => (option.disabled = true));

        // remove all classes before choice
        listItems.forEach((listItem) => {
          listItem.classList.remove('correctAnswer', 'wrongAnswer');
        });

        // found current list item
        const currentLi = document.getElementById(`${this.id}`);

        //found correct list item and add css class correct
        const correctLi = document.querySelector(`#${currentQuestion.correct}`);
        correctLi.classList.add('correctAnswer');

        // logics for add class wrongAnswer
        if (currentLi.id === currentQuestion.correct) {
          currentLi.classList.add('correctAnswer');
        } else {
          currentLi.classList.add('wrongAnswer');
        }
      }
    });

    // found element with tag input and listener. Look checked radioButton or not. if yes value this btn is  currentQuestion.selected
    answerElement
      .querySelector('input')
      .addEventListener('change', function () {
        if (this.checked) {
          currentQuestion.selected = this.id;
        }
      });
  }
  //  next question button will move to next question if the questions are finished it will lunch the final page
  if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', toFinalPage);
  } else {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', nextQuestion);
  }
};
const toFinalPage = () => {
  initFinalPage();
};

const nextQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  // check if the selected answer is correct
  if (currentQuestion.selected === currentQuestion.correct) {
    quizData.scoreResult += 1; // increase the score result when the selected answer is corect
  }
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

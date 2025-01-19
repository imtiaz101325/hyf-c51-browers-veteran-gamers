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

  // extra, allowing for new styling if the score is higher than 5
  if (quizData.scoreResult > 5) {
    scoreEl.classList.add('good-score');
  } else {
    scoreEl.classList.remove('good-score');
  }
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  const nextButton = document.getElementById(NEXT_QUESTION_BUTTON_ID); // Reference Next Question button
  //stop Next button from working initially and add a tooltip
  nextButton.disabled = true;
  nextButton.title = 'Please select an option';

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    const listItems = document.querySelectorAll('li');

    // here added listener to be able to select answer anywhere on the li element not only on the btn
    const input = answerElement.querySelector('input');

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

        // found correct list item and add css class correct
        const correctLi = document.querySelector(`#${currentQuestion.correct}`);
        correctLi.classList.add('correctAnswer');

        // logics for add class wrongAnswer
        if (currentLi.id === currentQuestion.correct) {
          currentLi.classList.add('correctAnswer');
        } else {
          currentLi.classList.add('wrongAnswer');
        }

        // Enable Next button when an option is selected and remove the tooltip
        nextButton.disabled = false;
        nextButton.title = '';
      }
    });

    answerElement.addEventListener('click', () => input.click());

    // found element with tag input and listener. Look checked radioButton or not. if yes value this btn is currentQuestion.selected
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

  // Connects the Skip Button and manages navigation to the next or final page.

  const skipButton = document.getElementById(SKIP_QUESTION_BUTTON_ID);
  if (skipButton) {
    skipButton.addEventListener('click', skipQuestion);
  } else {
    console.error('Skip question button not found in the DOM');
  }
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

const skipQuestion = () => {
  // to fetch the answers list element
  const answersList = document.getElementById(ANSWERS_LIST_ID);

  if (!answersList) {
    console.error(`Answers list with ID ${ANSWERS_LIST_ID} not found.`);
    return; // Exit if the answers list is not found
  }

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;

  // Highlighting the correct answer
  const correctAnswerElement = answersList.querySelector(
    `[data-answer="${correctAnswer}"]`
  );

  if (correctAnswerElement) {
    correctAnswerElement.classList.add('highlight-correct'); // Apply highlight
  } else {
    console.error('Correct answer element not found!');
  }

  // Move to the next page or final page after some delay
  setTimeout(() => {
    if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
      // If it's the last question, go to the final page
      initFinalPage();
    } else {
      // Otherwise, move to the next question
      quizData.currentQuestionIndex += 1;
      initQuestionPage();
    }
  }, 1000);
};

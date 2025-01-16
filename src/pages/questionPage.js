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

    const listItems = document.querySelectorAll('li');

    // found element with input and listener?Look checked radioButton or not. if yes value this btn is  currentQuestion.selected
    const input = answerElement.querySelector('input');
    input.addEventListener('change', function () {
      if (this.checked) {
        currentQuestion.selected = this.id;

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
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

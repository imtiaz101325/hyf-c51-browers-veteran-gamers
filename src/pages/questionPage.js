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

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

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
  const currentQuestion  = quizData.questions[quizData.currentQuestionIndex];

  // check if the selected answer is correct
  if (currentQuestion.selected === currentQuestion.correct){
    quizData.scoreResult +=1; // increase the score result when the selected answer is corect
  }
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1; 


  initQuestionPage();
};

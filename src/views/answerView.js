/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
  <div>
    <input type="radio" id="${key}" name="radioButton" value="${key}" />
    <label>  ${key}: ${answerText}</label>
    </div>
  `;

  return element;
};

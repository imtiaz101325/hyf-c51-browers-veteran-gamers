/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.id = `${key}`;
  element.innerHTML = String.raw`
  
    <input type="radio" id="${key}" name="radioButton" value="${key}"  />
    <label >  ${key}: ${answerText}</label>
  
  `;

  return element;
};

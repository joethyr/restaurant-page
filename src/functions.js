function createTextElement(element, text) {
  const i = document.createElement(element)
  i.innerHTML = text;
  return i
}

export default createTextElement
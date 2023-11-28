//Luke Heimpel E5, reference used from web-based resources and ChatGPT
let name = "Luke";
console.log(name);

//colour change
let green = document.getElementById("green");
green.addEventListener("click", function () {
  let container = document.getElementById("interactionContainer");
  container.style.background = "#90ee90";
});

let plum = document.getElementById("plum");
plum.addEventListener("click", function () {
  let container = document.getElementById("interactionContainer");
  container.style.background = "#dda0dd";
});

let blue = document.getElementById("blue");
blue.addEventListener("click", function () {
  let container = document.getElementById("interactionContainer");
  container.style.background = "#add8e6";
});

// Repeating text
const loopContainer = document.getElementById("loopContainer");

const textToRepeat = "test ";

let repeatedText = "";

for (let i = 0; i < 24; i++) {
  repeatedText += textToRepeat;
}

const words = document.createElement("p");
words.textContent = repeatedText;

loopContainer.appendChild(words);

//change colour of square

const square = document.getElementById("square");

document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const viewportWidth = window.innerWidth;
  if (mouseX > viewportWidth / 2) {
    square.style.backgroundColor = "red";
  } else {
    square.style.backgroundColor = "blue";
  }
});

//increase text size
const increaseText = document.getElementById("increaseText");
const initialFontSize = 24;
const totalDuration = 30;
let currentFontSize = initialFontSize;
let elapsedTime = 0;
function increaseFontSize() {
  if (elapsedTime < totalDuration) {
    currentFontSize++;
    increaseText.style.fontSize = `${currentFontSize}px`;
    elapsedTime += 2;
  } else {
    clearInterval(interval);
  }
}
const interval = setInterval(increaseFontSize, 2000);

//display number of characters from the input field
const inputText = document.getElementById("inputText");
const textLength = document.getElementById("text-length");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const inputValue = inputText.value;
  const characterCount = inputValue.length;
  textLength.textContent = characterCount;
});

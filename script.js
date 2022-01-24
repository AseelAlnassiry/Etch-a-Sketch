const mainContainer = document.querySelector("#main-container");
const resetButton = document.querySelector("#reset-button");
const sizeRange = document.querySelector("#size-range");
const rangeIdentifier = document.querySelector("#range-identifier");
const colorPicker = document.querySelector("#color-picker");
var currentColor = "#000000";
let pixelBoxes = [];

function sizeBoxes(inputSize) {
  // Remove the old pixel boxes from the DOM
  pixelBoxes.forEach((pixelBox) => {
    pixelBox.remove();
  });

  // Create new pixel boxes based on the input size and input them into the main container
  for (i = 0; i < inputSize * inputSize; i++) {
    pixelBoxes[i] = document.createElement("div");
    pixelBoxes[i].setAttribute("class", "pixel-box");
    mainContainer.appendChild(pixelBoxes[i]);
  }

  //Adjust the width and height of the pixel boxes so they all fit inside the main container
  var correctDimension = 500.0 / inputSize;
  pixelBoxes.forEach((pixelBox) => {
    pixelBox.setAttribute(
      "style",
      `width: ${correctDimension}px; height: ${correctDimension}px`
    );
  });

  pixelBoxes.forEach((pixelBox) => {
    pixelBox.addEventListener("mouseover", () => {
      pixelBox.style.backgroundColor = currentColor;
    });
  });
}

sizeBoxes(sizeRange.value);

resetButton.addEventListener("click", () => {
  pixelBoxes.forEach((pixelBox) => {
    pixelBox.style.backgroundColor = "white";
  });
});

sizeRange.addEventListener("input", () => {
  sizeBoxes(sizeRange.value);
  rangeIdentifier.textContent = `${sizeRange.value} x ${sizeRange.value}`;
});

colorPicker.addEventListener('input', () => {
  currentColor = colorPicker.value; 
})
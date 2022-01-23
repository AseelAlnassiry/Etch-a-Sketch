const mainContainer = document.querySelector("#main-container");
const resetButton = document.querySelector("#reset-button");
let pixelBoxes = [];

for (i = 0; i < 16 * 16; i++) {
  pixelBoxes[i] = document.createElement("div");
  pixelBoxes[i].setAttribute("class", "pixel-box");
  mainContainer.appendChild(pixelBoxes[i]);
}

pixelBoxes.forEach((pixelBox) => {
  pixelBox.addEventListener("mouseover", () => {
    pixelBox.setAttribute("style", "background-color: black");
  });
});

resetButton.addEventListener("click", () => {
  pixelBoxes.forEach((pixelBox) => {
    pixelBox.setAttribute("style", "background-color: white");
  });
});



const mainContainer = document.querySelector("#main-container");
let pixelBoxes = [];

for (i = 0; i < 16; i++) {
  pixelBoxes[i] = document.createElement("div");
  pixelBoxes[i].setAttribute("class", "pixel-box");
  mainContainer.appendChild(pixelBoxes[i]);
}

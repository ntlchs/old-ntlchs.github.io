var nextColor;

const elementOffset = document.getElementById("firstScreen").offsetHeight;
const presentationCard = document.getElementById("presentation_area");
const project = document.getElementsByClassName("project");

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

scrollArea.onscroll = () => {
  if (scrollArea.scrollTop >= elementOffset) {
    backToTop.classList.remove("class", "hidden");
  } else {
    backToTop.classList.add("class", "hidden");
  }
};

function setRandomBgColor(obj) {
  obj.style.backgroundColor = `rgb(${random(235, 255)}, ${random(
    235,
    255
  )}, ${random(235, 255)})`;
}

function loadNextColor() {
  setRandomBgColor(presentationCard);
}

function projectColor() {
  for (var i = 0; i < project.length; i++) {
    setRandomBgColor(project[i]);
  }
}

projectColor();
loadNextColor();
setInterval(loadNextColor, 1000);

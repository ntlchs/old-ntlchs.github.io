var nextColor;

const backToTop = document.getElementById("backToTop");
const scrollArea = document.getElementById("scroll_area");
const windowSizeY = document.getElementById("firstScreen");
const elementOffset = windowSizeY.offsetHeight;
const presentationCard = document.getElementById("presentation_area");
const project = document.getElementsByClassName("project");

function random(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

scrollArea.onscroll = () => {
  if (scrollArea.scrollTop >= elementOffset) {
    backToTop.classList.remove("class", "hidden");
  } else {
    backToTop.classList.add("class", "hidden");
  }
};

function loadNextColor() {
  fetch("https://x-colors.herokuapp.com/api/random")
    .then((response) => response.json())
    .then((data) => setNextColor(data))
    .catch((err) => console.log(err));

  function setNextColor(data) {
    nextColor = data.rgb.replace(")", ", .2)");
    setColor();
  }
}

function setColor() {
  presentationCard.style.backgroundColor = nextColor;
}

function projectColor() {
  for (var i = 0; i < project.length; i++) {
    project[i].style.backgroundColor = `rgb(${random(0, 255)}, ${random(
      0,
      255
    )}, ${random(0, 255)}, .2)`;
  }
}

loadNextColor();
projectColor();
setInterval(loadNextColor, 1000);

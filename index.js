const backToTop = document.getElementById("backToTop");
const scrollArea = document.getElementById("scroll_area");
const windowSizeY = document.getElementById("firstScreen");
const elementOffset = windowSizeY.offsetHeight;
const presentationCard = document.getElementById("presentation_area");
var nextColor;

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
  presentationCard.style.borderColor = nextColor;
}

presentationCard.onclick = () => {
  loadNextColor();
  console.log(nextColor, "onclick");
};

loadNextColor();

const backToTop = document.getElementById("backToTop");
const scrollArea = document.getElementById("scroll_area");
const windowSizeY = document.getElementById("firstScreen");
const elementOffset = windowSizeY.offsetHeight;
const presentationCard = document.getElementById("presentation_area");

scrollArea.onscroll = () => {
  console.log(scrollArea.scrollTop);
  console.log(elementOffset);
  if (scrollArea.scrollTop >= elementOffset) {
    backToTop.classList.remove("class", "hidden");
    console.log("removed class hidden");
  } else {
    backToTop.classList.add("class", "hidden");
    console.log("added class hidden");
  }
};

presentationCard.onclick = () => {
  function changeColor(data) {
    console.log(data);
    presentationCard.style.borderColor = data.hex;
  }
  fetch("https://x-colors.herokuapp.com/api/random")
    .then((response) => response.json())
    .then((data) => changeColor(data))
    .catch((err) => console.log(err));
};

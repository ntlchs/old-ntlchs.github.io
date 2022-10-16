const backToTop = document.getElementById("backToTop");
const scrollArea = document.getElementById("scroll_area");
const windowSizeY = document.getElementById("firstScreen");
const elementOffset = windowSizeY.offsetHeight;

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

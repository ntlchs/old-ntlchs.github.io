const backToTop = document.getElementById("backToTop");
const scrollArea = document.getElementById("scroll_area");
scrollArea.onscroll = () => {
  console.log(scrollArea.scrollTop);
  console.log(window.screen.height);
  if (scrollArea.scrollTop >= window.screen.height) {
    backToTop.classList.remove("class", "hidden");
    console.log("removed class hidden");
  } else {
    backToTop.classList.add("class", "hidden");
    console.log("added class hidden");
  }
};

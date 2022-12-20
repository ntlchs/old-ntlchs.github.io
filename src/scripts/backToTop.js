const back_btn = document.getElementById("back_btn");
const scrollArea = document.getElementById("pages");
const elementOffset = document.getElementById("about").offsetHeight;

scrollArea.onscroll = () => {
  if (scrollArea.scrollTop >= window.) {
    back_btn.classList.remove("class", "hidden");
  } else {
    back_btn.classList.add("class", "hidden");
  }
};

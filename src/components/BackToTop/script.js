var target = document.getElementById("header");
var scrollToTopBtn = document.getElementById("back_div");
var rootElement = document.documentElement;

function callback(entries) {
  if (entries.length !== 1) {
    console.error("Did not expect that");
  }

  const entry = entries[0];
  if (!entry.isIntersecting) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

let observer = new IntersectionObserver(callback);
observer.observe(target);

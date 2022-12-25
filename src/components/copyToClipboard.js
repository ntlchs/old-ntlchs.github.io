const copyBtn = document.querySelector("#copy_btn");
const content = document.querySelector("#copy_email");
let text = content.innerText;
const toast = document.querySelector("#copy_toast");
let timeoutID = null;

copyBtn.addEventListener("click", () => {
  toast.classList.remove("hidden");
  timeoutID = setTimeout(() => {
    if (timeoutID !== null) {
      toast.classList.add("hidden");
    }
    clearMessage();
  }, 2000);
  setFocusToTextBox();
  (async () => {
    await parent.navigator.clipboard.writeText(text);
  })();
});

function setFocusToTextBox() {
  content.focus();
}

function clearMessage() {
  clearTimeout(timeoutID);
}

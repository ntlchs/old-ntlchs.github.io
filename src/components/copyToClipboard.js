const copyBtn = document.querySelector("#copy_btn");
const content = document.querySelector("#copy_email");
let text = content.innerText;

copyBtn.addEventListener("click", () => {
  setFocusToTextBox();
  (async () => {
    await parent.navigator.clipboard.writeText(text);
    alert(`Copied to clipboard!`);
  })();
});

function setFocusToTextBox() {
  content.focus();
}

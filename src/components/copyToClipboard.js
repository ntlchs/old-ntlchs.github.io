const copyBtn = document.querySelector("#copy_btn");
const content = document.querySelector("#copy_email");

copyBtn.addEventListener("click", () => {
  let text = content.textContent;
  navigator.clipboard.writeText(`${text}`);
  alert(`Copied to clipboard!`);
});

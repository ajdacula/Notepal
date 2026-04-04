const inputField = document.getElementById("inputField");
const btn = document.getElementById("add");
const output = document.getElementById("output");
const delBtn = document.createElement("button");
delBtn.className = "button-delete";

btn.addEventListener("click", () => {
  const value = inputField.value.trim();
  if (!value) {
    return;
  }
  inputField.value = " ";

  const list = document.createElement("li");
  list.textContent = value;

  output.appendChild(list);
  list.appendChild(delBtn);
});

delBtn.addEventListener("click", () => {
  output.remove();
});

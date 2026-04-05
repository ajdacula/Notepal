const inputField = document.getElementById("inputField");
const btn = document.getElementById("add");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const value = inputField.value.trim();
  if (!value) {
    return;
  }
  inputField.value = " ";

  const list = document.createElement("li");
  list.textContent = value;

  const delBtn = document.createElement("button");
  delBtn.classList.add("delete-btn");
  delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  delBtn.addEventListener("click", () => {
    list.remove();
  });

  output.appendChild(list);
  list.appendChild(delBtn);
});

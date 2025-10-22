// Get elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add button click
addBtn.addEventListener("click", addTask);

// Press Enter to add task
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark complete on click
  li.addEventListener("click", () => li.classList.toggle("completed"));

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.background = "transparent";
  delBtn.style.border = "none";
  delBtn.style.cursor = "pointer";

  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = "";
}

// Show message from old button (optional)
function showMessage() {
  alert("Thanks for visiting my portfolio!");
}

//  Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all the fields.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

// To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = ""; // Clear input field
}


// Show message from old button (optional)
function showMessage() {
  alert("Thanks for visiting my portfolio!");
}

// Form Validation
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

// Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.id = "darkModeToggle";
darkModeToggle.textContent = "Toggle Theme";
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

// Scroll to Top Button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.innerHTML = "↑";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Live Clock
const clock = document.createElement("div");
clock.id = "clock";
document.body.insertBefore(clock, document.body.firstChild);

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// FAQ Accordion (if you add FAQ items)
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Carousel Auto Slide (basic example if you add a carousel section)
let carouselIndex = 0;
const images = document.querySelectorAll(".carousel img");

function showImage(index) {
  images.forEach((img) => img.style.display = "none");
  images[index].style.display = "block";
}

document.getElementById("prevBtn").addEventListener("click", () => {
  carouselIndex = (carouselIndex - 1 + images.length) % images.length;
  showImage(carouselIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  carouselIndex = (carouselIndex + 1) % images.length;
  showImage(carouselIndex);
});

showImage(carouselIndex); // Show first image initially

//QUIZ
const quizData = [
  {
    question: "What does 'responsive design' mean in web development?",
    options: [
      "The website responds only to button clicks",
      "The website adapts to different screen sizes",
      "The website responds to emails",
      "The website loads faster"
    ],
    correct: "The website adapts to different screen sizes"
  },
  {
    question: "In CSS, which unit is relative to the size of the parent element?",
    options: ["px", "em", "cm", "pt"],
    correct: "em"
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["String", "Website", "CSS", "HTML"],
    correct: "String"
  },
  {
    question: "What is the purpose of 'alt' text in an image tag?",
    options: [
      "To make the image bigger",
      "To display text over the image",
      "To describe the image for accessibility and when image can't load",
      "To hide the image"
    ],
    correct: "To describe the image for accessibility and when image can't load"
  },
  {
    question: "Which of these is considered good UI/UX practice?",
    options: [
      "Using unreadable font sizes",
      "Making all text the same color as background",
      "Having clear navigation and readable content",
      "Hiding important buttons"
    ],
    correct: "Having clear navigation and readable content"
  },
  {
    question: "Which of the following can be fetched using a Public API?",
    options: ["Weather Data", "Laptop Hardware", "Wi-Fi Password", "CSS Styles"],
    correct: "Weather Data"
  },
  {
    question: "What does 'console.log()' do in JavaScript?",
    options: [
      "Adds new content to the page",
      "Displays output in the browser's console",
      "Changes the page color",
      "Sends an alert box"
    ],
    correct: "Displays output in the browser's console"
  }
];
const quizContainer = document.getElementById("quiz-container");

quizData.forEach((q, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("quiz-question");

  const questionTitle = document.createElement("p");
  questionTitle.textContent = `${index + 1}. ${q.question}`;
  questionDiv.appendChild(questionTitle);

  q.options.forEach(option => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="question${index}" value="${option}">
      ${option}
    `;
    questionDiv.appendChild(label);
    questionDiv.appendChild(document.createElement("br"));
  });

  quizContainer.appendChild(questionDiv);
});

document.getElementById("submitQuiz").addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected && selected.value === q.correct) {
      score++;
    }
  });
  document.getElementById("quizResult").textContent = `You scored ${score} out of ${quizData.length}`;
});
//JOKE
document.getElementById("getJoke").addEventListener("click", fetchJoke);

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      const joke = `${data.setup} - ${data.punchline}`;
      document.getElementById("jokeDisplay").textContent = joke;
    })
    .catch(() => {
      document.getElementById("jokeDisplay").textContent = "Failed to fetch a joke. Please try again!";
    });
}

// DOM Elements
const loginPage = document.getElementById('loginPage');
const registerPage = document.getElementById('registerPage');
const homePage = document.getElementById('homePage');
const quizPage = document.getElementById('quizPage');
const resultPage = document.getElementById('resultPage');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

const loginError = document.getElementById('loginError');
const registerError = document.getElementById('registerError');
const registerSuccess = document.getElementById('registerSuccess');

const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

const displayUsername = document.getElementById('displayUsername');

const subjectButtons = document.querySelectorAll('.subjectBtn');
const logoutBtn = document.getElementById('logoutBtn');

const quizSubjectTitle = document.getElementById('quizSubjectTitle');
const timerEl = document.getElementById('timer');
const scoreDisplay = document.getElementById('scoreDisplay');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');

const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const returnSubjectsBtn = document.getElementById('returnSubjectsBtn');

const finalScoreEl = document.getElementById('finalScore');
const totalQuestionsEl = document.getElementById('totalQuestions');
const returnHomeBtn = document.getElementById('returnHomeBtn');

// Quiz data (10 questions per subject for demo)
const questionsDB = {
  math: [
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: 1 },
    { question: 'What is 5 * 3?', options: ['15', '10', '20', '8'], answer: 0 },
    { question: 'What is 10 / 2?', options: ['3', '7', '5', '8'], answer: 2 },
    { question: 'What is 12 - 5?', options: ['8', '7', '6', '5'], answer: 1 },
    { question: 'What is the square root of 16?', options: ['2', '3', '4', '5'], answer: 2 },
    { question: 'What is 9 + 10?', options: ['18', '19', '21', '20'], answer: 1 },
    { question: 'What is 6 * 6?', options: ['30', '36', '42', '40'], answer: 1 },
    { question: 'What is 100 / 10?', options: ['5', '10', '15', '20'], answer: 1 },
    { question: 'What is 7 + 8?', options: ['13', '14', '15', '16'], answer: 2 },
    { question: 'What is 20 - 8?', options: ['10', '12', '13', '14'], answer: 1 },
  ],
  science: [
    { question: 'What planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 1 },
    { question: 'What gas do plants absorb?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'], answer: 1 },
    { question: 'What is H2O?', options: ['Oxygen', 'Water', 'Hydrogen', 'Helium'], answer: 1 },
    { question: 'What force pulls objects toward Earth?', options: ['Magnetism', 'Gravity', 'Friction', 'Electricity'], answer: 1 },
    { question: 'What organ pumps blood?', options: ['Brain', 'Liver', 'Heart', 'Lungs'], answer: 2 },
    { question: 'What gas do plants release?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'], answer: 0 },
    { question: 'What is the center of an atom called?', options: ['Electron', 'Nucleus', 'Proton', 'Neutron'], answer: 1 },
    { question: 'Which part of the plant makes food?', options: ['Root', 'Stem', 'Leaf', 'Flower'], answer: 2 },
    { question: 'What is the boiling point of water?', options: ['90°C', '100°C', '110°C', '120°C'], answer: 1 },
    { question: 'What is the human body’s largest organ?', options: ['Skin', 'Liver', 'Heart', 'Brain'], answer: 0 },
  ],
  english: [
    { question: 'What is a noun?', options: ['Action word', 'Person, place or thing', 'Describes something', 'None'], answer: 1 },
    { question: 'What is an adjective?', options: ['Action word', 'Person, place or thing', 'Describes something', 'None'], answer: 2 },
    { question: 'Select the correct sentence.', options: ['She go to school.', 'She goes to school.', 'She going school.', 'She gone to school.'], answer: 1 },
    { question: 'What is the past tense of "go"?', options: ['Goed', 'Went', 'Going', 'Gone'], answer: 1 },
    { question: 'What is the plural of "child"?', options: ['Childs', 'Children', 'Childes', 'Child'], answer: 1 },
    { question: 'What is an adverb?', options: ['Describes a noun', 'Describes a verb', 'Describes an adjective', 'None'], answer: 1 },
    { question: 'Which word is a pronoun?', options: ['He', 'Run', 'Blue', 'Quickly'], answer: 0 },
    { question: 'Choose the correct article.', options: ['A apple', 'An apple', 'The apple', 'None'], answer: 1 },
    { question: 'What is the synonym of "happy"?', options: ['Sad', 'Joyful', 'Angry', 'Tired'], answer: 1 },
    { question: 'What is the antonym of "big"?', options: ['Large', 'Huge', 'Small', 'Tall'], answer: 2 },
  ],
  history: [
    { question: 'Who was the first President of the USA?', options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'], answer: 1 },
    { question: 'In which year did World War II end?', options: ['1940', '1945', '1950', '1939'], answer: 1 },
    { question: 'Who discovered America?', options: ['Christopher Columbus', 'Marco Polo', 'Vasco da Gama', 'Ferdinand Magellan'], answer: 0 },
    { question: 'What was the Renaissance?', options: ['War', 'Rebirth of art and culture', 'Economic crisis', 'Scientific discovery'], answer: 1 },
    { question: 'Who was Mahatma Gandhi?', options: ['Freedom fighter', 'Scientist', 'Politician', 'Artist'], answer: 0 },
    { question: 'Where was the Great Wall built?', options: ['India', 'China', 'Egypt', 'Italy'], answer: 1 },
    { question: 'When did the French Revolution begin?', options: ['1789', '1776', '1804', '1812'], answer: 0 },
    { question: 'Who invented the printing press?', options: ['Edison', 'Gutenberg', 'Tesla', 'Newton'], answer: 1 },
    { question: 'What was the Cold War?', options: ['Military conflict', 'Political tension', 'Economic boom', 'Cultural movement'], answer: 1 },
    { question: 'Who was Julius Caesar?', options: ['Roman leader', 'Greek philosopher', 'Egyptian king', 'French president'], answer: 0 },
  ],
  gk: [
    { question: 'Who is the current President of the USA?', options: ['Joe Biden', 'Donald Trump', 'Barack Obama', 'George Bush'], answer: 0 },
    { question: 'What is the capital of India?', options: ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'], answer: 1 },
    { question: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], answer: 1 },
    { question: 'What currency is used in Japan?', options: ['Yuan', 'Dollar', 'Yen', 'Euro'], answer: 2 },
    { question: 'Which language is the most spoken worldwide?', options: ['English', 'Mandarin', 'Spanish', 'Hindi'], answer: 1 },
    { question: 'How many continents are there?', options: ['5', '6', '7', '8'], answer: 2 },
    { question: 'What is the largest ocean?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], answer: 3 },
    { question: 'What is the tallest mountain?', options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'], answer: 1 },
    { question: 'What is the boiling point of water?', options: ['90°C', '100°C', '110°C', '120°C'], answer: 1 },
    { question: 'Which country is known as the Land of the Rising Sun?', options: ['China', 'Japan', 'South Korea', 'Thailand'], answer: 1 },
  ]
};

let currentUser = null;
let currentSubject = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

// Show/hide pages
function showPage(page) {
  [loginPage, registerPage, homePage, quizPage, resultPage].forEach(p => p.classList.remove('active'));
  page.classList.add('active');
}

// Utility - get users from localStorage
function getUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

// Save users back
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Register new user
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  registerError.textContent = '';
  registerSuccess.textContent = '';

  let username = document.getElementById('registerUsername').value.trim();
  let email = document.getElementById('registerEmail').value.trim().toLowerCase();
  let password = document.getElementById('registerPassword').value;

  if (!username || !email || !password) {
    registerError.textContent = 'All fields are required.';
    return;
  }

  let users = getUsers();
  if (users.find(u => u.email === email)) {
    registerError.textContent = 'Email already registered.';
    return;
  }

  users.push({ username, email, password });
  saveUsers(users);

  registerSuccess.textContent = 'Registered successfully! You can now login.';
  registerForm.reset();
});

// Show Register Page
showRegister.addEventListener('click', () => {
  registerError.textContent = '';
  registerSuccess.textContent = '';
  loginError.textContent = '';
  registerForm.reset();
  loginForm.reset();
  showPage(registerPage);
});

// Show Login Page
showLogin.addEventListener('click', () => {
  registerError.textContent = '';
  registerSuccess.textContent = '';
  loginError.textContent = '';
  registerForm.reset();
  loginForm.reset();
  showPage(loginPage);
});

// Login User
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  loginError.textContent = '';

  let email = document.getElementById('loginEmail').value.trim().toLowerCase();
  let password = document.getElementById('loginPassword').value;

  let users = getUsers();
  let user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    loginError.textContent = 'Invalid email or password.';
    return;
  }

  currentUser = user;
  displayUsername.textContent = currentUser.username;
  loginForm.reset();
  showPage(homePage);
});

// Logout
logoutBtn.addEventListener('click', () => {
  currentUser = null;
  currentSubject = null;
  currentQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  showPage(loginPage);
});

// Subject select
subjectButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentSubject = btn.dataset.subject;
    startQuiz(currentSubject);
  });
});

// Start quiz
function startQuiz(subject) {
  currentQuestions = questionsDB[subject];
  currentQuestionIndex = 0;
  score = 0;
  quizSubjectTitle.textContent = capitalize(subject);
  updateScore();
  showPage(quizPage);
  nextQuestionBtn.disabled = true;
  displayQuestion();
  startTimer();
}

// Capitalize helper
function capitalize(text) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Display question and options
function displayQuestion() {
  clearTimer();
  timeLeft = 30;
  updateTimer();

  const q = currentQuestions[currentQuestionIndex];
  questionText.textContent = `${currentQuestionIndex + 1}. ${q.question}`;

  optionsContainer.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.classList.add('option-btn');
    btn.textContent = opt;
    btn.dataset.index = i;
    btn.disabled = false;

    btn.addEventListener('click', () => {
      clearTimer();
      checkAnswer(i);
    });

    optionsContainer.appendChild(btn);
  });
}

// Check answer and show feedback
function checkAnswer(selectedIndex) {
  const correctIndex = currentQuestions[currentQuestionIndex].answer;
  const optionButtons = optionsContainer.querySelectorAll('button');

  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx == correctIndex) {
      btn.classList.add('correct');
    }
    if (idx == selectedIndex && idx != correctIndex) {
      btn.classList.add('wrong');
    }
  });

  if (selectedIndex === correctIndex) {
    score++;
    updateScore();
  }
  nextQuestionBtn.disabled = false;
}

// Update score display
function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

// Timer functionality
function startTimer() {
  timerEl.textContent = `Time Left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      clearTimer();
      disableOptions();
      nextQuestionBtn.disabled = false;
      revealCorrectAnswer();
    }
  }, 1000);
}

function updateTimer() {
  timerEl.textContent = `Time Left: ${timeLeft}s`;
}

function clearTimer() {
  if (timer) clearInterval(timer);
}

function disableOptions() {
  const optionButtons = optionsContainer.querySelectorAll('button');
  optionButtons.forEach(btn => btn.disabled = true);
}

function revealCorrectAnswer() {
  const correctIndex = currentQuestions[currentQuestionIndex].answer;
  const optionButtons = optionsContainer.querySelectorAll('button');
  optionButtons.forEach((btn, idx) => {
    if (idx === correctIndex) btn.classList.add('correct');
  });
}

// Next question button
nextQuestionBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex >= currentQuestions.length) {
    showResult();
  } else {
    nextQuestionBtn.disabled = true;
    displayQuestion();
    startTimer();
  }
});

// Return to subjects
returnSubjectsBtn.addEventListener('click', () => {
  currentSubject = null;
  currentQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  clearTimer();
  showPage(homePage);
});

// Show result page
function showResult() {
  clearTimer();
  finalScoreEl.textContent = score;
  totalQuestionsEl.textContent = currentQuestions.length;
  showPage(resultPage);
}

// Return home from result page
returnHomeBtn.addEventListener('click', () => {
  currentSubject = null;
  currentQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  showPage(homePage);
});

// On page load show login page
showPage(loginPage);

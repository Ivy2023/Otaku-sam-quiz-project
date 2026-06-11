/* ==================== STATE VARIABLES ==================== */
let playerName = "";
let speedrun = true;
let timeLeft = 60;
let timerInterval = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let currentLevel = "";

/* ==================== QUESTION DATA ==================== */
const questions = {
  easy: [
    { question: "Who is the Pirate King?", answers: ["Shanks", "Roger", "Luffy", "Whitebeard"], correct: 1, img: "assets/images/luffy1.jpg", alt: "Luffy from One Piece smiling with his straw hat" },
    { question: "What anime has a killing notebook?", answers: ["Death Parade", "Death Note", "Black Butler", "Tokyo Ghoul"], correct: 1, img: "assets/images/deathnote1.jpg", alt: "Light Yagami holding the Death Note" },
    { question: "Naruto's signature jutsu?", answers: ["Chidori", "Rasengan", "Amaterasu", "Shadow Bind"], correct: 1, img: "assets/images/naruto1.png", alt: "Naruto performing the Rasengan" },
    { question: "Who is Pikachu's trainer?", answers: ["Brock", "Ash", "Gary", "Dawn"], correct: 1, img: "assets/images/pokemon1.png", alt: "Ash Ketchum with Pikachu on his shoulder" },
    { question: "Which anime has Dragon Balls?", answers: ["Bleach", "DBZ", "Naruto", "One Piece"], correct: 1, img: "assets/images/dbz1.png", alt: "Dragon Ball Z characters powered up" },
    { question: "Sailor Moon's real name?", answers: ["Usagi", "Rei", "Ami", "Makoto"], correct: 0, img: "assets/images/sailormoon1.png", alt: "Sailor Moon posing in her sailor outfit" },
    { question: "What village is Naruto from?", answers: ["Mist", "Sand", "Leaf", "Cloud"], correct: 2, img: "assets/images/naruto2.png", alt: "The Hidden Leaf Village from above" },
    { question: "What is Luffy's dream?", answers: ["Be a Marine", "Find All Blue", "Become Pirate King", "Be Hokage"], correct: 2, img: "assets/images/luffy2.png", alt: "Luffy declaring his dream with a raised fist" },
    { question: "What is Goku's Saiyan name?", answers: ["Raditz", "Kakarot", "Bardock", "Tarble"], correct: 1, img: "assets/images/goku1.png", alt: "Goku in his Super Saiyan form" },
    { question: "Who is the main character of Demon Slayer?", answers: ["Zenitsu", "Tanjiro", "Inosuke", "Rengoku"], correct: 1, img: "assets/images/tanjiro1.png", alt: "Tanjiro Kamado holding his sword" }
  ],
  medium: [
    { question: "Tanjiro's sword color?", answers: ["Red", "Black", "Blue", "White"], correct: 1, img: "assets/images/tanjiro2.png", alt: "Tanjiro holding his black Nichirin blade" },
    { question: "Who are the Homunculi from?", answers: ["Bleach", "Fullmetal Alchemist", "Soul Eater", "Blue Exorcist"], correct: 1, img: "assets/images/fma1.png", alt: "Homunculi from Fullmetal Alchemist" },
    { question: "First Colossal Titan appearance?", answers: ["Ep 1", "Ep 2", "Ep 3", "Ep 5"], correct: 0, img: "assets/images/aot1.png", alt: "The Colossal Titan peering over the wall" },
    { question: "What is Gon's father's name?", answers: ["Ging", "Killua", "Hisoka", "Netero"], correct: 0, img: "assets/images/hxh1.png", alt: "Gon Freecss looking determined" },
    { question: "Who is the Flame Hashira?", answers: ["Shinobu", "Rengoku", "Tengen", "Mitsuri"], correct: 1, img: "assets/images/demonslayer1.png", alt: "Rengoku the Flame Hashira with fire effects" },
    { question: "What is Ichigo's Zanpakuto called?", answers: ["Senbonzakura", "Zangetsu", "Wabisuke", "Hyorinmaru"], correct: 1, img: "assets/images/bleach1.png", alt: "Ichigo wielding Zangetsu" },
    { question: "Who is the captain of the Black Bulls?", answers: ["Yami", "Asta", "Nozel", "Fuegoleon"], correct: 0, img: "assets/images/blackclover1.png", alt: "Yami the Black Bulls captain smoking" },
    { question: "What is Killua's assassin family name?", answers: ["Nara", "Zoldyck", "Ackerman", "Joestar"], correct: 1, img: "assets/images/hxh2.png", alt: "Killua Zoldyck with lightning aura" },
    { question: "Who is the Water Hashira?", answers: ["Giyu", "Sanemi", "Obanai", "Gyomei"], correct: 0, img: "assets/images/demonslayer2.png", alt: "Giyu Tomioka the Water Hashira" },
    { question: "What is the name of the Soul Society's military?", answers: ["Gotei 13", "Survey Corps", "Magic Knights", "Hero Association"], correct: 0, img: "assets/images/bleach2.png", alt: "Soul Society captains standing together" }
  ],
  hard: [
    { question: "Lelouch's Geass ability?", answers: ["Hypnosis", "Power of Kings", "Absolute Obedience", "Mind Rewrite"], correct: 2, img: "assets/images/codegeas2.png", alt: "Lelouch activating his Geass eye" },
    { question: "Rarest Nen type?", answers: ["Emission", "Transmutation", "Specialization", "Conjuration"], correct: 2, img: "assets/images/hxh3.png", alt: "Nen type chart from Hunter x Hunter" },
    { question: "Beast Titan identity?", answers: ["Reiner", "Zeke", "Bertholdt", "Porco"], correct: 1, img: "assets/images/aot2.png", alt: "The Beast Titan throwing rocks" },
    { question: "Who killed L in Death Note?", answers: ["Light", "Misa", "Rem", "Near"], correct: 2, img: "assets/images/deathnote2.png", alt: "L sitting in his signature crouching pose" },
    { question: "What is Itachi's illness?", answers: ["Cancer", "Heart Disease", "Unknown", "Respiratory Illness"], correct: 3, img: "assets/images/itachi1.png", alt: "Itachi Uchiha with Sharingan eyes" },
    { question: "What is the name of the First Hokage?", answers: ["Tobirama", "Hashirama", "Hiruzen", "Madara"], correct: 1, img: "assets/images/naruto3.png", alt: "Hashirama Senju the First Hokage" },
    { question: "Who is the strongest Esper in Mob Psycho?", answers: ["Reigen", "Mob", "Teru", "Ritsu"], correct: 1, img: "assets/images/mobpsycho1.png", alt: "Mob at 100 percent psychic power" },
    { question: "What is the true identity of Father in Fullmetal Alchemist?", answers: ["Dwarf in the Flask", "Truth", "Hohenheim", "Greed"], correct: 0, img: "assets/images/fma2.png", alt: "Father from Fullmetal Alchemist in his true form" },
    { question: "What is Gojo Satoru's domain expansion?", answers: ["Infinite Void", "Malevolent Shrine", "Unlimited Blade Works", "Eternal Darkness"], correct: 0, img: "assets/images/jujutsu1.png", alt: "Gojo revealing his domain expansion Infinite Void" },
    { question: "Who is the original wielder of One For All?", answers: ["All Might", "Deku", "Yoichi", "Bakugo"], correct: 2, img: "assets/images/myhero1.png", alt: "Yoichi Shigaraki the first One For All user" }
  ]
};

/* ==================== DOM REFERENCES ==================== */
const nameScreen = document.getElementById("nameScreen");
const difficultySelect = document.getElementById("difficultySelect");
const quizSection = document.getElementById("quiz");
const playerNameInput = document.getElementById("playerNameInput");
const nameError = document.getElementById("nameError");
const continueBtn = document.getElementById("continueBtn");
const backToNameBtn = document.getElementById("backToNameBtn");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const progressEl = document.getElementById("progress");
const questionImg = document.getElementById("questionImg");
const questionEl = document.getElementById("question");
const feedbackEl = document.getElementById("feedback");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const leaderboardSection = document.getElementById("leaderboard");

/* ==================== UTILITY FUNCTIONS ==================== */

/**
 * Reads the leaderboard from localStorage safely.
 * Returns an empty array if storage is unavailable or data is corrupt.
 */
function getLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem("leaderboard")) || [];
  } catch (e) {
    return [];
  }
}

/**
 * Saves the leaderboard array to localStorage safely.
 */
function setLeaderboard(board) {
  try {
    localStorage.setItem("leaderboard", JSON.stringify(board));
  } catch (e) {
    /* Storage full or unavailable — fail silently */
  }
}

/**
 * Transitions between two screen sections with a fade effect.
 */
function fadeTo(hideId, showId) {
  const hideEl = document.getElementById(hideId);
  const showEl = document.getElementById(showId);

  hideEl.style.opacity = "0";
  setTimeout(function () {
    hideEl.style.display = "none";
    showEl.style.display = "block";
    showEl.style.opacity = "0";
    setTimeout(function () {
      showEl.style.opacity = "1";
    }, 50);
  }, 300);
}

/**
 * Sanitizes a string to prevent XSS when inserting into innerHTML.
 */
function escapeHtml(text) {
  var div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/* ==================== NAME HANDLING ==================== */

/**
 * Validates the player name input and transitions to difficulty select.
 */
function saveName() {
  var input = playerNameInput.value.trim();
  nameError.textContent = "";

  if (!input) {
    nameError.textContent = "Please enter a name to continue.";
    playerNameInput.focus();
    return;
  }

  if (input.length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    playerNameInput.focus();
    return;
  }

  if (input.length > 20) {
    nameError.textContent = "Name must be 20 characters or fewer.";
    playerNameInput.focus();
    return;
  }

  var board = getLeaderboard();
  var nameExists = board.some(function (entry) {
    return entry.name.toLowerCase() === input.toLowerCase();
  });

  if (nameExists) {
    nameError.textContent = "This name is taken. Please choose another.";
    playerNameInput.focus();
    return;
  }

  playerName = input;
  fadeTo("nameScreen", "difficultySelect");
}

/* ==================== GAME START ==================== */

/**
 * Initialises a new quiz round with the chosen difficulty level.
 */
function startGame(level) {
  currentLevel = level;
  fadeTo("difficultySelect", "quiz");

  currentQuestions = questions[level].slice().sort(function () {
    return Math.random() - 0.5;
  });
  currentIndex = 0;
  score = 0;

  scoreEl.textContent = "Score: 0";
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback-msg";
  timerEl.classList.remove("low");
  questionImg.style.display = "block";
  leaderboardSection.style.display = "none";
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";

  if (speedrun) {
    startTimer();
  }

  loadQuestion();
}

/* ==================== TIMER ==================== */

/**
 * Starts the 60-second speedrun countdown timer.
 */
function startTimer() {
  timerEl.style.display = "block";
  timeLeft = 60;
  timerEl.textContent = "Time: 60";

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(function () {
    timeLeft -= 1;
    timerEl.textContent = "Time: " + timeLeft;

    if (timeLeft <= 10) {
      timerEl.classList.add("low");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      gameOver("Time's up!");
    }
  }, 1000);
}

/* ==================== QUESTION LOADING ==================== */

/**
 * Loads the current question, image, and answer buttons into the DOM.
 */
function loadQuestion() {
  var q = currentQuestions[currentIndex];

  if (!q) {
    gameOver("No more questions.");
    return;
  }

  /* Update progress indicator */
  progressEl.textContent = "Question " + (currentIndex + 1) + " of " + currentQuestions.length;

  /* Reset feedback */
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback-msg";

  /* Load image with fade-in */
  questionImg.classList.remove("fade-in");
  questionImg.style.display = "block";
  setTimeout(function () {
    questionImg.src = q.img;
    questionImg.alt = q.alt;
    questionImg.classList.add("fade-in");
  }, 50);

  /* Set question text */
  questionEl.textContent = q.question;

  /* Build answer buttons */
  answersEl.innerHTML = "";

  q.answers.forEach(function (ans, i) {
    var btn = document.createElement("button");
    btn.className = "answer";
    btn.type = "button";
    btn.textContent = ans;
    btn.setAttribute("aria-label", "Answer: " + ans);
    btn.addEventListener("click", function () {
      selectAnswer(btn, i, q.correct);
    });
    answersEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

/* ==================== ANSWER SELECTION ==================== */

/**
 * Handles the user's answer selection, marks correct/wrong,
 * reveals the correct answer, and updates the score.
 */
function selectAnswer(button, selectedIndex, correctIndex) {
  var buttons = answersEl.querySelectorAll("button.answer");

  /* Disable all answer buttons */
  buttons.forEach(function (btn) {
    btn.disabled = true;
  });

  if (selectedIndex === correctIndex) {
    button.classList.add("correct");
    score += 1;
    scoreEl.textContent = "Score: " + score;
    feedbackEl.textContent = "\u2705 Correct! Well done!";
    feedbackEl.className = "feedback-msg feedback-correct";
  } else {
    button.classList.add("wrong");
    feedbackEl.textContent = "\u274C Wrong! The correct answer is: " + currentQuestions[currentIndex].answers[correctIndex];
    feedbackEl.className = "feedback-msg feedback-wrong";

    /* Highlight the correct answer so the user can learn */
    buttons[correctIndex].classList.add("reveal-correct");
  }

  nextBtn.style.display = "block";
  nextBtn.focus();
}

/* ==================== NEXT QUESTION ==================== */

nextBtn.addEventListener("click", function () {
  currentIndex += 1;
  nextBtn.style.display = "none";

  if (currentIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    gameOver("Quiz complete!");
  }
});

/* ==================== GAME OVER ==================== */

/**
 * Ends the quiz, displays the final message, saves the score,
 * and shows the leaderboard.
 */
function gameOver(message) {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  questionEl.textContent = message + " You scored " + score + " out of " + currentQuestions.length + ".";
  answersEl.innerHTML = "";
  questionImg.style.display = "none";
  nextBtn.style.display = "none";
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback-msg";

  saveToLeaderboard();
  showLeaderboard();

  restartBtn.style.display = "block";
  restartBtn.focus();
}

/* ==================== LEADERBOARD ==================== */

/**
 * Saves the current player's score to the leaderboard in localStorage.
 * Keeps only the top 10 entries sorted by score (then by time).
 */
function saveToLeaderboard() {
  var board = getLeaderboard();

  board.push({
    name: playerName,
    score: score,
    total: currentQuestions.length,
    time: speedrun ? 60 - timeLeft : null,
    date: new Date().toLocaleDateString()
  });

  board.sort(function (a, b) {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    if (a.time !== null && b.time !== null) {
      return a.time - b.time;
    }
    return 0;
  });

  if (board.length > 10) {
    board.length = 10;
  }

  setLeaderboard(board);
}

/**
 * Renders the leaderboard table from localStorage data.
 */
function showLeaderboard() {
  var board = getLeaderboard();

  leaderboardSection.style.display = "block";

  if (board.length === 0) {
    leaderboardSection.innerHTML =
      "<h2 id=\"leaderboardHeading\">Leaderboard</h2>" +
      "<p>No scores yet. Be the first!</p>";
    return;
  }

  var html =
    "<h2 id=\"leaderboardHeading\">\uD83C\uDFC6 Leaderboard</h2>" +
    "<div role=\"region\" aria-label=\"Leaderboard results\" tabindex=\"0\" style=\"overflow-x:auto;\">" +
    "<table class=\"leaderboard-table\">" +
    "<thead>" +
    "<tr>" +
    "<th scope=\"col\">Rank</th>" +
    "<th scope=\"col\">Name</th>" +
    "<th scope=\"col\">Score</th>" +
    "<th scope=\"col\">Time</th>" +
    "<th scope=\"col\">Date</th>" +
    "</tr>" +
    "</thead>" +
    "<tbody>";

  board.forEach(function (entry, index) {
    var medal;
    if (index === 0) {
      medal = "\uD83E\uDD47";
    } else if (index === 1) {
      medal = "\uD83E\uDD48";
    } else if (index === 2) {
      medal = "\uD83E\uDD49";
    } else {
      medal = String(index + 1);
    }

    var isCurrentPlayer = entry.name === playerName && entry.score === score;
    var rowClass = isCurrentPlayer ? "highlight" : "";
    var timeDisplay = entry.time !== null ? entry.time + "s" : "\u2014";

    html +=
      "<tr class=\"" + rowClass + "\">" +
      "<td>" + medal + "</td>" +
      "<td>" + escapeHtml(entry.name) + "</td>" +
      "<td>" + entry.score + "/" + entry.total + "</td>" +
      "<td>" + timeDisplay + "</td>" +
      "<td>" + escapeHtml(entry.date) + "</td>" +
      "</tr>";
  });

  html += "</tbody></table></div>";
  leaderboardSection.innerHTML = html;
}

/* ==================== EVENT LISTENERS ==================== */

/* Continue button on name screen */
continueBtn.addEventListener("click", saveName);

/* Allow pressing Enter on the name input to continue */
playerNameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    saveName();
  }
});

/* Difficulty selection buttons using event delegation */
document.querySelector(".difficulty-group").addEventListener("click", function (event) {
  var btn = event.target;
  if (btn.classList.contains("difficulty-btn") && btn.dataset.level) {
    startGame(btn.dataset.level);
  }
});

/* Back button to return to name screen */
backToNameBtn.addEventListener("click", function () {
  fadeTo("difficultySelect", "nameScreen");
  playerNameInput.focus();
});

/* Restart button reloads the page for a fresh start */
restartBtn.addEventListener("click", function () {
  window.location.reload();
});

/* Handle broken images gracefully */
questionImg.addEventListener("error", function () {
  questionImg.alt = "Image could not be loaded for this question";
  questionImg.style.display = "none";
});


let db = new Localbase('otakuQuizDB');

/* ------------------ PLAYER NAME ------------------ */
let playerName = "";
function saveName() {
    const input = document.getElementById("playerName").value.trim();

    if (!input) {
        alert("Enter a name first");
        return;
    }

    // Load leaderboard from LocalStorage
    

    // Check if name already exists
    const nameExists = board.some(entry => entry.name.toLowerCase() === input.toLowerCase());

    if (nameExists) {
        alert("This name already exists. Please choose another.");
        return;
    }

    // Save name
    playerName = input;
    localStorage.setItem("playerName", playerName);

    fadeTo("nameScreen", "difficultySelect");
}


/* ------------------ ANIMATION ------------------ */
function fadeTo(hideId, showId) {
    const hide = document.getElementById(hideId);
    const show = document.getElementById(showId);

    hide.style.opacity = 0;
    setTimeout(() => {
        hide.style.display = "none";
        show.style.display = "block";
        setTimeout(() => show.style.opacity = 1, 50);
    }, 300);
}

/* ------------------ MODE SELECT ------------------ */
let speedrun = true;
let timeLeft = 60;
let timerInterval;


/* ------------------ QUESTIONS ------------------ */
const questions = {
easy: [
        { question: "Who is the Pirate King?", answers: ["Shanks","Roger","Luffy","Whitebeard"], correct: 1, img:"assets/images/luffy1.jpg" },
        { question: "What anime has a killing notebook?", answers: ["Death Parade","Death Note","Black Butler","Tokyo Ghoul"], correct: 1, img: "assets/images/deathnote1.jpg" },
        { question: "Naruto’s signature jutsu?", answers: ["Chidori","Rasengan","Amaterasu","Shadow Bind"], correct: 1, img: "assets/images/naruto1.png" },
        { question: "Who is Pikachu’s trainer?", answers: ["Brock","Ash","Gary","Dawn"], correct: 1, img: "assets/images/pokemon1.png" },
        { question: "Which anime has Dragon Balls?", answers: ["Bleach","DBZ","Naruto","One Piece"], correct: 1, img: "assets/images/dbz1.png" },
        { question: "Sailor Moon’s real name?", answers: ["Usagi","Rei","Ami","Makoto"], correct: 0, img: "assets/images/sailormoon1.png" },
        { question: "What village is Naruto from?", answers: ["Mist","Sand","Leaf","Cloud"], correct: 2, img: "assets/images/naruto2.png" },
        { question: "What is Luffy’s dream?", answers: ["Be a Marine","Find All Blue","Become Pirate King","Be Hokage"], correct: 2, img: "assets/images/luffy2.png" },
        { question: "What is Goku’s Saiyan name?", answers: ["Raditz","Kakarot","Bardock","Tarble"], correct: 1, img: "assets/images/goku1.png" },
        { question: "Who is the main character of Demon Slayer?", answers: ["Zenitsu","Tanjiro","Inosuke","Rengoku"], correct: 1, img: "assets/images/tanjiro1.png" }
    ],

    medium: [
        { question: "Tanjiro’s sword color?", answers: ["Red","Black","Blue","White"], correct: 1, img: "assets/images/tanjiro2.png" },
        { question: "Who are the Homunculi from?", answers: ["Bleach","Fullmetal alchemist","Soul Eater","Blue Exorcist"], correct: 1, img: "assets/images/fma1.png" },
        { question: "First Colossal Titan appearance?", answers: ["Ep1","Ep2","Ep3","Ep5"], correct: 0, img: "assets/images/aot1.png" },
        { question: "What is Gon’s father’s name?", answers: ["Ging","Killua","Hisoka","Netero"], correct: 0, img: "assets/images/hxh1.png" },
        { question: "Who is the Flame Hashira?", answers: ["Shinobu","Rengoku","Tengen","Mitsuri"], correct: 1, img: "assets/images/demonslayer1.png" },
        { question: "What is Ichigo’s Zanpakuto called?", answers: ["Senbonzakura","Zangetsu","Wabisuke","Hyōrinmaru"], correct: 1, img: "assets/images/bleach1.png" },
        { question: "Who is the captain of the Black Bulls?", answers: ["Yami","Asta","Nozel","Fuegoleon"], correct: 0, img: "assets/images/blackclover1.png" },
        { question: "What is Killua’s assassin family name?", answers: ["Nara","Zoldyck","Ackerman","Joestar"], correct: 1, img: "assets/images/hxh2.png" },
        { question: "Who is the Water Hashira?", answers: ["Giyu","Sanemi","Obanai","Gyomei"], correct: 0, img: "assets/images/demonslayer2.png" },
        { question: "What is the name of the Soul Society’s military?", answers: ["Gotei 13","Survey Corps","Magic Knights","Hero Association"], correct: 0, img: "assets/images/bleach2.png" }
    ],

    hard: [
        { question: "Lelouch’s Geass ability?", answers: ["Hypnosis","Power of Kings","Absolute Obedience","Mind Rewrite"], correct: 2, img: "assets/images/codegeas2.png" },
        { question: "Rarest Nen type?", answers: ["Emission","Transmutation","Specialization","Conjuration"], correct: 2, img: "assets/images/hxh3.png" },
        { question: "Beast Titan identity?", answers: ["Reiner","Zeke","Bertholdt","Porco"], correct: 1, img: "assets/images/aot2.png" },
        { question: "Who killed L in Death Note?", answers: ["Light","Misa","Rem","Near"], correct: 2, img: "assets/images/deathnote2.png" },
        { question: "What is Itachi’s illness?", answers: ["Cancer","Heart Disease","Unknown","Respiratory Illness"], correct: 3, img: "assets/images/itachi1.png" },
        { question: "What is the name of the First Hokage?", answers: ["Tobirama","Hashirama","Hiruzen","Madara"], correct: 1, img: "assets/images/naruto3.png" },
        { question: "Who is the strongest Esper in Mob Psycho?", answers: ["Reigen","Mob","Teru","Ritsu"], correct: 1, img: "assets/images/mobpsycho1.png" },
        { question: "What is the true identity of Father in Fullmetal Alchemist?", answers: ["Dwarf in the Flask","Truth","Hohenheim","Greed"], correct: 0, img: "assets/images/fma2.png" },
        { question: "What is Gojo Satoru’s domain expansion?", answers: ["Infinite Void","Malevolent Shrine","Unlimited Blade Works","Eternal Darkness"], correct: 0, img: "assets/images/jujutsu1.png" },
        { question: "Who is the original wielder of One For All?", answers: ["All Might","Deku","Yoichi","Bakugo"], correct: 2, img: "assets/images/myhero1.png" }
    ]
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;

/* ------------------ START GAME ------------------ */
function startGame(level) {
    fadeTo("difficultySelect", "quiz");

    currentQuestions = [...questions[level]].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    score = 0;

    document.getElementById("score").style.display = "block";
    document.getElementById("score").textContent = "Score: 0";

    if (speedrun) startTimer();

    loadQuestion();
}

/* ------------------ TIMER ------------------ */
function startTimer() {
    const timerEl = document.getElementById("timer");
    timerEl.style.display = "block";
    timeLeft = 60;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft <= 10) timerEl.classList.add("low");

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameOver("Time's up!");
        }
    }, 1000);
}

/* ------------------ LOAD QUESTION ------------------ */
function loadQuestion() {
    const q = currentQuestions[currentIndex];

    const img = document.getElementById("questionImg");
    img.classList.remove("fade-in");
    setTimeout(() => {
        img.src = q.img;
        img.classList.add("fade-in");
    }, 50);

    document.getElementById("question").textContent = q.question;

    const answersEl = document.getElementById("answers");
    answersEl.innerHTML = "";

    q.answers.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.className = "answer";
        btn.textContent = ans;
        btn.onclick = () => selectAnswer(btn, i === q.correct);
        answersEl.appendChild(btn);
    });
}

/* ------------------ SELECT ANSWER ------------------ */
function selectAnswer(button, isCorrect) {
    [...document.getElementById("answers").children].forEach(btn => btn.disabled = true);

    if (isCorrect) {
        button.classList.add("correct");
        score++;
        document.getElementById("score").textContent = "Score: " + score;
    } else {
        button.classList.add("wrong");
    }

    document.getElementById("nextBtn").style.display = "block";
}

document.getElementById("nextBtn").onclick = () => {
    currentIndex++;
    document.getElementById("nextBtn").style.display = "none";

    if (currentIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        gameOver("Quiz Complete!");
    }
};

/* ------------------ GAME OVER ------------------ */
function gameOver(message) {
    clearInterval(timerInterval);

    document.getElementById("question").textContent = message;
    document.getElementById("answers").innerHTML = "";
    document.getElementById("questionImg").style.display = "none";

    saveToLeaderboard();

    showLeaderboard();

    document.getElementById("restartBtn").style.display = "block";
}

document.getElementById("restartBtn").onclick = () => location.reload();

/* ------------------ LEADERBOARD ------------------ */



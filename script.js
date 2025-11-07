// ------------------- Global Variables -------------------
let selectedCategory = "";
let numQuestions = 0;
let quiz = [];
let currentQ = 0;
let score = 0;
let wrongQuestions = [];

// ------------------- Category Selection -------------------
function selectCategory(cat) {
    selectedCategory = cat;

    // Check if category exists in data.js
    if (!questionsData[selectedCategory]) {
        alert("No questions found for this category!");
        return;
    }

    document.getElementById("numQuestions").style.display = "block";
}

// ------------------- Start Quiz -------------------
function startQuiz() {
    numQuestions = parseInt(document.getElementById("questionCount").value);

    // Load questions from data.js
    let allQ = [...questionsData[selectedCategory]];
    quiz = allQ.slice(0, numQuestions);

    localStorage.setItem("currentQuiz", JSON.stringify(quiz));
    localStorage.setItem("currentCategory", selectedCategory);
    localStorage.setItem("score", 0);
    localStorage.setItem("wrongQ", JSON.stringify([]));

    window.location.href = "quiz.html";
}

// ------------------- Load Quiz Page -------------------
if (window.location.pathname.includes("quiz.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        quiz = JSON.parse(localStorage.getItem("currentQuiz")) || [];
        score = 0;
        currentQ = 0;
        wrongQuestions = [];

        showQuestion();
    });
}

// ------------------- Show Question -------------------
function showQuestion() {
    if (currentQ >= quiz.length) {
        endQuiz();
        return;
    }

    let qObj = quiz[currentQ];

    document.getElementById("question").innerText = qObj.q;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    qObj.options.forEach(opt => {
        let btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, qObj.answer);
        optionsDiv.appendChild(btn);
    });
}

// ------------------- Check Answer -------------------
function checkAnswer(selected, correct) {
    let buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(b => b.disabled = true);

    if (selected === correct) {
        score++;
    } else {
        wrongQuestions.push({ q: quiz[currentQ].q, correct });
    }

    localStorage.setItem("score", score);
    localStorage.setItem("wrongQ", JSON.stringify(wrongQuestions));

    setTimeout(() => nextQuestion(), 800);
}

// ------------------- Next Question -------------------
function nextQuestion() {
    currentQ++;
    showQuestion();
}

// ------------------- End Quiz -------------------
function endQuiz() {
    let prev = JSON.parse(localStorage.getItem("previousQuizzes")) || [];

    prev.push({
        category: localStorage.getItem("currentCategory"),
        score: score,
        total: quiz.length
    });

    localStorage.setItem("previousQuizzes", JSON.stringify(prev));

    window.location.href = "result.html";
}
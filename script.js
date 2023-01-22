const quizData = [{
    question: "In which year of First World War Germany declared war on Russia and France?",
    a: "1914",
    b: "1915",
    c: "1916",
    d: "1917",
    correct: "a",
}, {
    question: "India has largest deposits of ____ in the world.",
    a: "gold",
    b: "copper",
    c: "mica",
    d: "None of the above",
    correct: "c",
}, {
    question: "How many Lok Sabha seats belong to Rajasthan?",
    a: "32",
    b: "25",
    c: "30",
    d: "17",
    correct: "b",
}, {
    question: "The treaty which ushered in NATO, was signed by the member nations at",
    a: "Geneva",
    b: "London",
    c: "Paris",
    d: "Washington",
    correct: "d",
}, ];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
                <button onclick="history.go(0)">Play Again</button> `
                // location.reload() won't work in CodePen for security reasons; } } });
        }
    }
});
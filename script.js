const quizData = [{
    question: "If soccer is called football in England, what is American football called in England?",
    a: "American football",
    b: "Combball",
    c: "Handball",
    d: "Touchdown",
    correct: "a"
},
{
    question: "What is the largest country in the world?",
    a: "Russia",
    b: "Canada",
    c: "China",
    d: "United States",
    correct: "a"
},
{
    question: "An organic compound is considered an alcohol if it has what functional group?",
    a: "Hydroxyl",
    b: "Carbonyl",
    c: "Alkyl",
    d: "Aldehyde",
    correct: "a"
},
{
    question: "What is the 100th digit of Pi?",
    a: "9",
    b: "4",
    c: "7",
    d: "2",
    correct: "a"
},
{
    question: "A doctor with a PhD is a doctor of what?",
    a: "Philosophy",
    b: "Psychology",
    c: "Phrenology",
    d: "Physical Therapy",
    correct: "a"
}
]
let currentQuest = 0;
let currentQuiz = 0;
let score = 0;



const questElem = document.getElementById('question');
const sbmtButt = document.getElementById('submit')
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerElems = document.getElementsByName('answer');

let yourAnswers = [];
let correctAnswers = [];
for (let i=0;i<quizData.length;i++){
    correctAnswers.push(quizData[i].correct);
}


loadQuiz();


function loadQuiz() {

    const currentQuizData = quizData[currentQuest]
    questElem.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
    currentQuest++;

}

function getSelectedItem() {

    let answer = undefined;
    answerElems.forEach((answerElem) => {
        // console.log(answerElem.checked);
        if (answerElem.checked) {
            answer = answerElem.id;
            yourAnswers.push(answerElem.id);
        }
    });

    return answer;
}

sbmtButt.addEventListener('click', () => {

    const answer = getSelectedItem();
    if (answer) {
        console.log(answer);
        if (answer == quizData[currentQuiz].correct)
            score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
            for (i = 0; i < answerElems.length; i++) {
                answerElems[i].checked = false;
            }

        } else {
            alert(`You finished! Your score is ${score}.`);
            alert(`Your answers: ${yourAnswers}. Correct answers: ${correctAnswers}.`);
            for (i = 0; i < answerElems.length; i++) {
                answerElems[i].checked = false;
            }
        }
    }
});

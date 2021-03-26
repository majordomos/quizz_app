const quizData = [{
    "question": "If soccer is called football in England, what is American football called in England?",
    "a": "American football",
    "b": "Combball",
    "c": "Handball",
    "d": "Touchdown",
    "correct": "a"
},
{
    "question": "What is the largest country in the world?",
    "a": "Russia",
    "b": "Canada",
    "c": "China",
    "d": "United States",
    "correct": "a"
},
{
    "question": "An organic compound is considered an alcohol if it has what functional group?",
    "a": "Hydroxyl",
    "b": "Carbonyl",
    "c": "Alkyl",
    "d": "Aldehyde",
    "correct": "a"
},
{
    "question": "What is the 100th digit of Pi?",
    "a": "9",
    "b": "4",
    "c": "7",
    "d": "2",
    "correct": "a"
},
{
    "question": "A doctor with a PhD is a doctor of what?",
    "a": "Philosophy",
    "b": "Psychology",
    "c": "Phrenology",
    "d": "Physical Therapy",
    "correct": "a"
}
];


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
const mainContElem = document.getElementById('main-container');


const answerKeys = ["a", "b", "c", "d"];


let yourAnswers = [];
let correctAnswers = [];
for (let i = 0; i < quizData.length; i++) {
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
        if (answerElem.checked) {
            answer = answerElem.id;
            yourAnswers.push(answerElem.id);
        }
    });

    return answer;
}

function _LiGenerator() {
    let answerElement = document.createElement("li");
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("disabled", "true");
    inputElement.setAttribute("id", "a");
    inputElement.setAttribute("name", "answer");
    inputElement.setAttribute("class", "answer");
    let labelElement = document.createElement("label");

    

    labelElement.setAttribute("id", "a_text");
    labelElement.setAttribute("for", "a");
    labelElement.innerHTML = "Question";
    answerElement.appendChild(inputElement);
    answerElement.appendChild(labelElement);
    answersList.appendChild(answerElement);
}


function showResults() {
    for (let i = quizData.length - 2; i >= 0; i--) {
        let questionHeader = document.createElement("h2");
        questionHeader.innerHTML = quizData[i].question;
        questionHeader.setAttribute("id", "question");
        let quizContainerDiv = document.createElement("div");
        quizContainerDiv.setAttribute("class", "quiz-container");
        let answersList = document.createElement("ul");

        var oCurrentQuizData = quizData[i];
        answerKeys.reduce(function (sAcc, sKey) {
            var sDomNodeLi = 
        }.bind(this), "")

        for (let i = 0; i < quizData.length - 1; i++) {

        }

        mainContElem.appendChild(questionHeader);
        mainContElem.appendChild(quizContainerDiv);
        quizContainerDiv.appendChild(answersList);
    }
}

sbmtButt.addEventListener('click', () => {

    const answer = getSelectedItem();
    if (answer) {
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
            //ToDo after quiz
            sbmtButt.parentNode.removeChild(sbmtButt);
            for (let i = 0; i < answerElems.length; i++)
                answerElems[i].disabled = true;

            showResults();
            // yourAnswers = [];
            // currentQuest = 0;
            // currentQuiz = 0;
            // loadQuiz();
        }
    }
});

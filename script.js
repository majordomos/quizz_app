const quizData = [{
    "question": "If soccer is called football in England, what is American football called in England?",
    "a": "American football",
    "b": "Combball",
    "c": "Handball",
    "d": "Touchdown",
    "answer": "",
    "correct": "a"
},
{
    "question": "What is the largest country in the world?",
    "a": "Russia",
    "b": "Canada",
    "c": "China",
    "d": "United States",
    "answer": "",
    "correct": "a"
},
{
    "question": "An organic compound is considered an alcohol if it has what functional group?",
    "a": "Hydroxyl",
    "b": "Carbonyl",
    "c": "Alkyl",
    "d": "Aldehyde",
    "answer": "",
    "correct": "a"
},
{
    "question": "What is the 100th digit of Pi?",
    "a": "9",
    "b": "4",
    "c": "7",
    "d": "2",
    "answer": "",
    "correct": "a"
},
{
    "question": "A doctor with a PhD is a doctor of what?",
    "a": "Philosophy",
    "b": "Psychology",
    "c": "Phrenology",
    "d": "Physical Therapy",
    "answer": "",
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
const quizContElem = document.getElementById('quiz-container');


const COLORS = {
    correct: '#0fd64fb5',
    incorrect: '#e50914ab'
};



const answerKeys = ["a", "b", "c", "d"];


let yourAnswers = [];
let correctAnswers = [];
for (let i = 0; i < quizData.length; i++) {
    correctAnswers.push(quizData[i].correct);
}


let aResults = yourAnswers.reverse();
let aCorrects = correctAnswers.reverse();

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

var iIterator = 0;


function _LiGenerator(oCurrentQuizData, sKey) {
    var answerElement = document.createElement("li");
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("disabled", "true");
    inputElement.setAttribute("id", sKey);
    inputElement.setAttribute("name", "answer" + String(iIterator));
    inputElement.setAttribute("class", "answer");
    let labelElement = document.createElement("label");
    labelElement.innerHTML = oCurrentQuizData[sKey];
    labelElement.setAttribute("id", sKey + "_text");
    labelElement.setAttribute("for", sKey);
    if (sKey === oCurrentQuizData.correct) {
        answerElement.style.background = COLORS.correct;
    }
    if (sKey === oCurrentQuizData.answer && oCurrentQuizData.answer !== oCurrentQuizData.correct) {
        answerElement.style.background = COLORS.incorrect;
    }
    if (sKey === oCurrentQuizData.answer) {
        console.log(`sKey - ${sKey}`);
        console.log(`oCurrentQuizData.answer - ${oCurrentQuizData.answer}`);
        inputElement.checked = true;
    }
    answerElement.appendChild(inputElement);
    answerElement.appendChild(labelElement);
    return answerElement;
}

function showResults() {
    for (let i = 0; i < quizData.length; i++) {
        quizData[i].answer = aResults[i];
        let questionHeader = document.createElement("h4");
        questionHeader.innerHTML = quizData[i].question;
        questionHeader.setAttribute("id", "question");
        questionHeader.setAttribute("class", "question");
        let quizContainerDiv = document.createElement("div");
        quizContainerDiv.setAttribute("class", "quiz-container");
        var answersList = document.createElement("ul");

        var oCurrentQuizData = quizData[i];
        ++iIterator;
        answerKeys.forEach(function (sKey) {
            var oDomLi = this._LiGenerator(oCurrentQuizData, sKey);
            answersList.append(oDomLi);
        })
        mainContElem.appendChild(questionHeader);
        mainContElem.appendChild(quizContainerDiv);
        quizContainerDiv.appendChild(answersList);
    }
    let resultsElement = document.createElement("h2");
    resultsElement.innerHTML = `Your score: ${score}`;
    resultsElement.setAttribute("id", "results");
    resultsElement.setAttribute("class", "results");
    mainContElem.appendChild(resultsElement);
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
            quizContElem.parentNode.removeChild(quizContElem);
            questElem.parentNode.removeChild(questElem);
            alert(`You finished! Your score is ${score}.`);
            alert(`Your answers: ${yourAnswers}. Correct answers: ${correctAnswers}.`);
            for (i = 0; i < answerElems.length; i++) {
                answerElems[i].checked = false;
            }
            sbmtButt.parentNode.removeChild(sbmtButt);
            for (let i = 0; i < answerElems.length; i++)
                answerElems[i].disabled = true;
            showResults();
        }
    }
});

const questions = [
    {
        ques: 'which is the larger animal?',
        ans: [
            { text: 'Shark', correct: 'false' },
            { text: 'Blue Whale', correct: 'true' },
            { text: 'Elephant', correct: 'false' },
            { text: 'Ant', correct: 'false' }
        ]
    },
    {
        ques: 'which is the smallest country?',
        ans: [
            { text: 'Vatican City', correct: 'true' },
            { text: 'Nepal', correct: 'false' },
            { text: 'Indonesia', correct: 'false' },
            { text: 'Norway', correct: 'false' }
        ]
    },
    {
        ques: 'which is the smallest continent?',
        ans: [
            { text: 'Asia', correct: 'false' },
            { text: 'Australia', correct: 'true' },
            { text: 'Africa', correct: 'false' },
            { text: 'Arctic', correct: 'false' }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuesIndex = 0;
let score = 0;

function startQuiz() {
    currentQuesIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuesIndex];
    let questionNo = currentQuesIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.ques;

    currentQuestion.ans.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);


        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        //In JavaScript event handling, the e (or event) parameter is automatically provided by the event system when an event occurs and the event listener is invoked. You don't explicitly declare e when attaching the event listener; it's automatically passed to the event listener function when the event happens.
    });

    // currentQuestion.ans.forEach(answer => { ... }): This code uses a forEach loop to iterate through an array of answer objects. For each entry (answer object) in the array, the code inside the curly braces is executed.
    // const button = document.createElement('button');: Inside the loop, it creates a new HTML button element using the document.createElement method.
    // button.innerHTML = answer.text;: It sets the inner HTML of the button to the text of the current answer. 
    // button.classList.add('btn');: It adds a CSS class "btn" to the button element.
    // answerButton.appendChild(button);: It appends the newly created button to the div with the class "answerButton." 

}

function resetState() {
    // nextButton.style.display = 'none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
    //This is a while loop that continues as long as there is a first child element in the answerButton element. In other words, it iterates through and removes all child elements of the answerButton element until there are no more child elements left.

}

function selectAnswer(e) {
    const selectedBtn = e.target;
    // Declare a constant named selectedBin and access e.target within the selectAnswer function to get a reference to the specific button element that was clicked. 

    // The e.target property is a commonly used property in JavaScript event handling, and it refers to the DOM element that triggered an event. It represents the specific element on which the event occurred. Here's a more detailed explanation:

    // Event Handling Context: When you attach an event listener to an element (e.g., a button, a div, an input field), you specify a function to be executed when a particular event (e.g., a click, a keypress) happens on that element.

    // Event Object (e): When the event occurs, a JavaScript event object (often denoted as e or another name of your choice) is automatically created. This event object contains information about the event, such as its type, the target element, and additional data related to the event.

    // e.target: The e.target property of the event object refers to the element that triggered the event. In other words, it points to the specific DOM element where the event occurred. For example, if you have multiple buttons on a webpage and you click one of them, e.target will be a reference to the button that was clicked.

    const isCorrect = selectedBtn.dataset.correct === 'true';
    //selectedBtn.dataset.correct is used to access the value of a custom data attribute named "correct" associated with the selectedBtn element.

    //selectedBtn: This is a reference to the button element that was clicked, which is stored in the selectedBtn variable. This element is the target of the click event. .dataset: The dataset property is an object that allows you to access all the custom data attributes (data-* attributes) of an HTML element. It provides a way to read and write data attributes using JavaScript. .correct: This is the specific data attribute you are accessing. 

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        // This line converts the child elements of the answerButton element into an array using Array.from(). This is done so that you can use array methods like forEach to iterate over the buttons. The forEach method is used to loop through each button element in the array of child elements.

        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    //iterating over child elements of an element with the class "answerButton," which contains the answer buttons. For each button, the code checks if it has a data-correct attribute with a value of "true." If a button is marked as the correct answer, it adds the "correct" CSS class to it and disables the button.

    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';

}
function handleNextButton() {
    currentQuesIndex++;
    if (currentQuesIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuesIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();

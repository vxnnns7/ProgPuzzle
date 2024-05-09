//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "1",
        question: "What is Swift?",
        options: [
            "A programming language developed by Apple",
            "A database management system",
            "A web server",
            "A markup language"
        ],
        correct: "A programming language developed by Apple"
    },
    {
        id: "2",
        question: "Who developed Swift?",
        options: [
            "Apple Inc.",
            "Google",
            "Microsoft",
            "Oracle"
        ],
        correct: "Apple Inc."
    },
    {
        id: "3",
        question: "Which of the following statements about Swift is true?",
        options: [
            "It is statically typed",
            "It is dynamically typed",
            "It is weakly typed",
            "It is not a typed language"
        ],
        correct: "It is statically typed"
    },
    {
        id: "4",
        question: "Which symbol is used to declare a constant in Swift?",
        options: [
            "let",
            "var",
            "#define",
            "const"
        ],
        correct: "let"
    },
    {
        id: "5",
        question: "Which keyword is used to define a function in Swift?",
        options: [
            "func",
            "function",
            "def",
            "define"
        ],
        correct: "func"
    },
    {
        id: "6",
        question: "What is the main feature of Swift known for its safety and performance?",
        options: [
            "Optionals",
            "Protocols",
            "Generics",
            "ARC (Automatic Reference Counting)"
        ],
        correct: "Optionals"
    },
    {
        id: "7",
        question: "What is the purpose of an optional in Swift?",
        options: [
            "To represent a value that may or may not exist",
            "To define a protocol",
            "To handle errors",
            "To perform automatic memory management"
        ],
        correct: "To represent a value that may or may not exist"
    },
    {
        id: "8",
        question: "Which operator is used for optional chaining in Swift?",
        options: [
            "?.",
            "??",
            "!.",
            "//"
        ],
        correct: "?."
    },
    {
        id: "9",
        question: "What does ARC stand for in Swift?",
        options: [
            "Automatic Reference Counting",
            "Automatic Resource Cleanup",
            "Automatic Retain Cycle",
            "Advanced Runtime Compiler"
        ],
        correct: "Automatic Reference Counting"
    },
    {
        id: "10",
        question: "Which collection type in Swift is unordered and does not allow duplicate values?",
        options: [
            "Set",
            "Array",
            "Dictionary",
            "Tuple"
        ],
        correct: "Set"
    },
    {
        id: "11",
        question: "What is a closure in Swift?",
        options: [
            "A self-contained block of functionality",
            "An instance of a class",
            "A property of a struct",
            "A protocol"
        ],
        correct: "A self-contained block of functionality"
    },
    {
        id: "12",
        question: "What is the purpose of the `guard` statement in Swift?",
        options: [
            "To transfer control out of a scope if a condition is not met",
            "To handle errors",
            "To define a protocol",
            "To define a class"
        ],
        correct: "To transfer control out of a scope if a condition is not met"
    },
    {
        id: "13",
        question: "Which Swift feature is used to avoid retain cycles between objects?",
        options: [
            "Weak references",
            "Strong references",
            "Retain cycles",
            "Memory management"
        ],
        correct: "Weak references"
    },
    {
        id: "14",
        question: "What is the purpose of the `defer` statement in Swift?",
        options: [
            "To execute code just before leaving the current scope",
            "To handle errors",
            "To define a protocol",
            "To define a class"
        ],
        correct: "To execute code just before leaving the current scope"
    },
    {
        id: "15",
        question: "Which Swift feature is used for extending the functionality of an existing type?",
        options: [
            "Extensions",
            "Subclassing",
            "Protocols",
            "Generics"
        ],
        correct: "Extensions"
    },
    {
        id: "16",
        question: "What is a protocol in Swift?",
        options: [
            "A blueprint of methods and properties",
            "A type of data structure",
            "A statement",
            "A programming language feature"
        ],
        correct: "A blueprint of methods and properties"
    },
    {
        id: "17",
        question: "Which Swift feature is used to ensure that all requirements of a protocol are met?",
        options: [
            "Protocol conformance",
            "Protocol inheritance",
            "Protocol extension",
            "Protocol declaration"
        ],
        correct: "Protocol conformance"
    },
    {
        id: "18",
        question: "What is a typealias in Swift?",
        options: [
            "An alias for an existing type",
            "A type of data structure",
            "A statement",
            "A protocol"
        ],
        correct: "An alias for an existing type"
    },
    {
        id: "19",
        question: "What is the purpose of the `inout` keyword in Swift function parameters?",
        options: [
            "To pass a parameter by reference",
            "To define a protocol",
            "To handle errors",
            "To define a class"
        ],
        correct: "To pass a parameter by reference"
    },
    {
        id: "20",
        question: "Which Swift feature is used to represent multiple values in a single compound value?",
        options: [
            "Tuple",
            "Set",
            "Array",
            "Dictionary"
        ],
        correct: "Tuple"
    },
    {
        id: "21",
        question: "What is the purpose of the `@escaping` attribute in Swift?",
        options: [
            "To indicate that a closure can escape the current scope",
            "To define a protocol",
            "To handle errors",
            "To define a class"
        ],
        correct: "To indicate that a closure can escape the current scope"
    },
    {
        id: "22",
        question: "Which keyword is used to create an instance of a class in Swift?",
        options: [
            "init",
            "new",
            "alloc",
            "instance"
        ],
        correct: "init"
    },
    {
        id: "23",
        question: "What is the purpose of the `lazy` keyword in Swift?",
        options: [
            "To delay the initialization of a property until its first use",
            "To handle errors",
            "To define a protocol",
            "To define a class"
        ],
        correct: "To delay the initialization of a property until its first use"
    },
    {
        id: "24",
        question: "What is the purpose of the `public` keyword in Swift?",
        options: [
            "To specify access level",
            "To define a protocol",
            "To handle errors",
            "To define a class"
        ],
        correct: "To specify access level"
    },
    {
        id: "25",
        question: "What is the purpose of the `private` keyword in Swift?",
        options: [
            "To restrict access to an entity to its containing declaration",
            "To define a protocol",
            "To handle errors",
            "To define a class"
        ],
        correct: "To restrict access to an entity to its containing declaration"
    },
    {
        id: "26",
        question: "Which operator is used to unwrap an optional in Swift?",
        options: [
            "!",
            "?",
            "&",
            "$"
        ],
        correct: "!"
    },
    {
        id: "27",
        question: "What is the purpose of the `is` keyword in Swift?",
        options: [
            "To check if an instance is of a certain type",
            "To define a protocol",
            "To handle errors",
            "To define a class"
        ],
        correct: "To check if an instance is of a certain type"
    },
    {
        id: "28",
        question: "What is the purpose of the `as` keyword in Swift?",
        options: [
            "To perform type casting",
            "To define a protocol",
            "To handle errors",
            "To define a class"
        ],
        correct: "To perform type casting"
    },
    {
        id: "29",
        question: "Which Swift feature is used to handle errors?",
        options: [
            "Error handling with try, catch, and throw",
            "Optionals",
            "Protocols",
            "Closures"
        ],
        correct: "Error handling with try, catch, and throw"
    },
    {
        id: "30",
        question: "What is the purpose of the `switch` statement in Swift?",
        options: [
            "To make decisions based on multiple possible conditions",
            "To define a protocol",
            "To handle errors",
            "To define a class"
        ],
        correct: "To make decisions based on multiple possible conditions"
    }
];


//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    // For marking the correct option
    options.forEach((element) => {
        if (element.innerText == quizArray[questionCount].correct) {
            element.classList.add("correct");
        }
    });

    // Mark the user's selected option as incorrect and change its color to red
    userOption.classList.add("incorrect");

    // Clear interval (stop timer)
    clearInterval(countdown);

    // Disable all options
    options.forEach((element) => {
        element.disabled = true;
    });

    // Increment the score if the user's answer was initially correct
    if (userSolution == quizArray[questionCount].correct) {
        scoreCount++;
    }
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};

function redirectToIndexPage() {
    document.getElementById("exit").setAttribute("onclick", "window.location.href = '../index.html'");
}

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        // Close the current tab
        window.close();
    }
});
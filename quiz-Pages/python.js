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
        question: "What is Python?",
        options: [
            "A high-level programming language",
            "A markup language",
            "A database management system",
            "A scripting language"
        ],
        correct: "A high-level programming language"
    },
    {
        id: "2",
        question: "Which command is used to execute a Python script?",
        options: [
            "python run",
            "python start",
            "python execute",
            "python script"
        ],
        correct: "python script"
    },
    {
        id: "3",
        question: "Which of the following is NOT a data type in Python?",
        options: [
            "int",
            "float",
            "string",
            "boolean"
        ],
        correct: "boolean"
    },
    {
        id: "4",
        question: "What is the output of the following code: `print(2 + 3 * 4)`?",
        options: [
            "20",
            "14",
            "15",
            "24"
        ],
        correct: "14"
    },
    {
        id: "5",
        question: "Which keyword is used for function definition in Python?",
        options: [
            "func",
            "function",
            "def",
            "define"
        ],
        correct: "def"
    },
    {
        id: "6",
        question: "What does the 'len()' function do in Python?",
        options: [
            "Returns the length of a string",
            "Returns the length of a list",
            "Returns the length of a tuple",
            "All of the above"
        ],
        correct: "All of the above"
    },
    {
        id: "7",
        question: "What is the correct way to create a comment in Python?",
        options: [
            "// This is a comment",
            "# This is a comment",
            "' This is a comment",
            "* This is a comment"
        ],
        correct: "# This is a comment"
    },
    {
        id: "8",
        question: "Which data structure in Python is mutable?",
        options: [
            "List",
            "Tuple",
            "String",
            "Dictionary"
        ],
        correct: "List"
    },
    {
        id: "9",
        question: "What is the output of the following code: `print('Hello' + ' World')`?",
        options: [
            "Hello World",
            "Hello+World",
            "Hello\nWorld",
            "Error"
        ],
        correct: "Hello World"
    },
    {
        id: "10",
        question: "Which built-in function can be used to convert a string to an integer in Python?",
        options: [
            "int()",
            "str()",
            "convert()",
            "parse()"
        ],
        correct: "int()"
    },
    {
        id: "11",
        question: "What does the `range()` function in Python return?",
        options: [
            "A list of numbers",
            "A tuple of numbers",
            "An iterator",
            "A dictionary of numbers"
        ],
        correct: "An iterator"
    },
    {
        id: "12",
        question: "In Python, what is the result of 10 % 3?",
        options: [
            "3",
            "1",
            "0",
            "10"
        ],
        correct: "1"
    },
    {
        id: "13",
        question: "Which statement is used to exit a loop in Python?",
        options: [
            "break",
            "continue",
            "exit",
            "stop"
        ],
        correct: "break"
    },
    {
        id: "14",
        question: "What is the output of the following code: `print('Python'[2:])`?",
        options: [
            "Py",
            "Pyt",
            "thon",
            "th"
        ],
        correct: "thon"
    },
    {
        id: "15",
        question: "Which operator is used for exponentiation in Python?",
        options: [
            "**",
            "^",
            "^^",
            "//"
        ],
        correct: "**"
    },
    {
        id: "16",
        question: "What does the `strip()` function do in Python?",
        options: [
            "Removes leading and trailing whitespaces",
            "Removes all spaces from a string",
            "Converts a string to uppercase",
            "Converts a string to lowercase"
        ],
        correct: "Removes leading and trailing whitespaces"
    },
    {
        id: "17",
        question: "What is the output of the following code: `print('hello'.capitalize())`?",
        options: [
            "HELLO",
            "Hello",
            "hello",
            "olleh"
        ],
        correct: "Hello"
    },
    {
        id: "18",
        question: "Which of the following statements is used to create a set in Python?",
        options: [
            "{}",
            "[]",
            "()",
            "<>"
        ],
        correct: "{}"
    },
    {
        id: "19",
        question: "What is the result of the following comparison in Python: `5 == 5.0`?",
        options: [
            "True",
            "False",
            "None",
            "Error"
        ],
        correct: "True"
    },
    {
        id: "20",
        question: "Which function is used to read a single character from the user in Python?",
        options: [
            "read()",
            "get()",
            "input()",
            "scan()"
        ],
        correct: "input()"
    },
    {
        id: "21",
        question: "What does the `split()` function do in Python?",
        options: [
            "Splits a string into a list",
            "Joins elements of a list into a string",
            "Removes leading and trailing whitespaces",
            "None of the above"
        ],
        correct: "Splits a string into a list"
    },
    {
        id: "22",
        question: "Which of the following is a correct way to create a dictionary in Python?",
        options: [
            "{1: 'one', 2: 'two', 3: 'three'}",
            "[1: 'one', 2: 'two', 3: 'three']",
            "(1: 'one', 2: 'two', 3: 'three')",
            "<1: 'one', 2: 'two', 3: 'three'>"
        ],
        correct: "{1: 'one', 2: 'two', 3: 'three'}"
    },
    {
        id: "23",
        question: "What is the output of the following code: `print(2 * 'Python')`?",
        options: [
            "PythonPython",
            "Python2",
            "2Python",
            "Error"
        ],
        correct: "PythonPython"
    },
    {
        id: "24",
        question: "Which method is used to remove an item from a list in Python?",
        options: [
            "pop()",
            "remove()",
            "discard()",
            "delete()"
        ],
        correct: "pop()"
    },
    {
        id: "25",
        question: "What does the `join()` function do in Python?",
        options: [
            "Joins elements of a list into a string",
            "Splits a string into a list",
            "Removes leading and trailing whitespaces",
            "None of the above"
        ],
        correct: "Joins elements of a list into a string"
    },
    {
        id: "26",
        question: "Which operator is used for floor division in Python?",
        options: [
            "//",
            "/",
            "%",
            "**"
        ],
        correct: "//"
    },
    {
        id: "27",
        question: "What is the output of the following code: `print('Python'[1:4])`?",
        options: [
            "Py",
            "yth",
            "Pyt",
            "ytho"
        ],
        correct: "yth"
    },
    {
        id: "28",
        question: "Which statement is used to define a function in Python?",
        options: [
            "define",
            "function",
            "def",
            "func"
        ],
        correct: "def"
    },
    {
        id: "29",
        question: "What does the `replace()` function do in Python?",
        options: [
            "Replaces occurrences of a substring within a string",
            "Replaces a character at a specified index",
            "Replaces a character with another character",
            "None of the above"
        ],
        correct: "Replaces occurrences of a substring within a string"
    },
    {
        id: "30",
        question: "What is the output of the following code: `print(len([1, [2, 3], 4]))`?",
        options: [
            "3",
            "4",
            "5",
            "Error"
        ],
        correct: "3"
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
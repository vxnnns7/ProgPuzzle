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
        question: "What is Node.js?",
        options: [
            "A JavaScript runtime built on Chrome's V8 JavaScript engine",
            "A server-side scripting language",
            "A client-side scripting language",
            "A database management system"
        ],
        correct: "A JavaScript runtime built on Chrome's V8 JavaScript engine"
    },
    {
        id: "2",
        question: "Which command is used to initialize a Node.js project?",
        options: [
            "npm start",
            "npm init",
            "node init",
            "node start"
        ],
        correct: "npm init"
    },
    {
        id: "3",
        question: "Which module is used to create a web server in Node.js?",
        options: [
            "http",
            "fs",
            "path",
            "url"
        ],
        correct: "http"
    },
    {
        id: "4",
        question: "Which of the following is NOT a built-in module in Node.js?",
        options: [
            "fs",
            "http",
            "express",
            "path"
        ],
        correct: "express"
    },
    {
        id: "5",
        question: "What is the purpose of the fs module in Node.js?",
        options: [
            "To interact with the file system",
            "To create and manage HTTP servers",
            "To handle HTTP requests and responses",
            "To provide cryptographic functionality"
        ],
        correct: "To interact with the file system"
    },
    {
        id: "6",
        question: "Which of the following is used to include modules in Node.js?",
        options: [
            "require()",
            "import()",
            "include()",
            "import_module()"
        ],
        correct: "require()"
    },
    {
        id: "7",
        question: "What is npm?",
        options: [
            "Node Project Manager",
            "Node Package Manager",
            "Node Program Manager",
            "Node Process Manager"
        ],
        correct: "Node Package Manager"
    },
    {
        id: "8",
        question: "What is the purpose of the EventEmitter class in Node.js?",
        options: [
            "To interact with the file system",
            "To handle HTTP requests and responses",
            "To emit events that can be listened to by event listeners",
            "To manage asynchronous operations"
        ],
        correct: "To emit events that can be listened to by event listeners"
    },
    {
        id: "9",
        question: "Which method is used to read environment variables in Node.js?",
        options: [
            "process.env.get()",
            "process.readEnv()",
            "process.env",
            "process.getEnv()"
        ],
        correct: "process.env"
    },
    {
        id: "10",
        question: "Which command is used to install external packages in a Node.js project?",
        options: [
            "npm add",
            "npm install",
            "npm create",
            "npm download"
        ],
        correct: "npm install"
    },
    {
        id: "11",
        question: "What is the purpose of the 'module.exports' object in Node.js?",
        options: [
            "To export functions, objects, or primitives from a module",
            "To import functions, objects, or primitives into a module",
            "To define the main entry point of a Node.js application",
            "To configure environment variables for a module"
        ],
        correct: "To export functions, objects, or primitives from a module"
    },
    {
        id: "12",
        question: "What is the main advantage of using asynchronous programming in Node.js?",
        options: [
            "It makes the code simpler and easier to read",
            "It improves the performance of I/O bound operations",
            "It allows for better error handling",
            "It ensures that the code runs sequentially"
        ],
        correct: "It improves the performance of I/O bound operations"
    },
    {
        id: "13",
        question: "Which method is used to handle errors in asynchronous Node.js code?",
        options: [
            "try...catch",
            "async/await",
            "error",
            "callback function"
        ],
        correct: "callback function"
    },
    {
        id: "14",
        question: "What is the role of the 'Buffer' class in Node.js?",
        options: [
            "To manage streams of data",
            "To handle binary data",
            "To represent file paths",
            "To manage memory allocation"
        ],
        correct: "To handle binary data"
    },
    {
        id: "15",
        question: "What is the purpose of the 'os' module in Node.js?",
        options: [
            "To interact with the operating system's file system",
            "To handle HTTP requests and responses",
            "To provide utilities for working with file paths",
            "To get information about the computer's operating system"
        ],
        correct: "To get information about the computer's operating system"
    },
    {
        id: "16",
        question: "Which method is used to terminate a Node.js process?",
        options: [
            "process.terminate()",
            "process.exit()",
            "process.kill()",
            "process.end()"
        ],
        correct: "process.exit()"
    },
    {
        id: "17",
        question: "What is the purpose of the 'path' module in Node.js?",
        options: [
            "To provide utilities for working with file paths",
            "To interact with the operating system's file system",
            "To handle HTTP requests and responses",
            "To manage memory allocation"
        ],
        correct: "To provide utilities for working with file paths"
    },
    {
        id: "18",
        question: "Which method is used to perform an HTTP GET request in Node.js?",
        options: [
            "http.get()",
            "http.request()",
            "http.post()",
            "http.fetch()"
        ],
        correct: "http.get()"
    },
    {
        id: "19",
        question: "What is the purpose of the 'url' module in Node.js?",
        options: [
            "To provide utilities for parsing URL strings",
            "To interact with the operating system's file system",
            "To handle HTTP requests and responses",
            "To manage memory allocation"
        ],
        correct: "To provide utilities for parsing URL strings"
    },
    {
        id: "20",
        question: "Which of the following is a popular web framework for Node.js?",
        options: [
            "Express.js",
            "Angular.js",
            "React.js",
            "Vue.js"
        ],
        correct: "Express.js"
    },
    {
        id: "21",
        question: "What is middleware in the context of Node.js and Express.js?",
        options: [
            "A type of database management system",
            "A JavaScript data structure",
            "A function that receives the request and response objects",
            "A type of web server"
        ],
        correct: "A function that receives the request and response objects"
    },
    {
        id: "22",
        question: "Which npm command is used to install packages globally?",
        options: [
            "npm install",
            "npm add",
            "npm global",
            "npm install -g"
        ],
        correct: "npm install -g"
    },
    {
        id: "23",
        question: "What is the purpose of the 'crypto' module in Node.js?",
        options: [
            "To provide utilities for working with file paths",
            "To handle cryptographic functionality",
            "To manage memory allocation",
            "To interact with the operating system's file system"
        ],
        correct: "To handle cryptographic functionality"
    },
    {
        id: "24",
        question: "Which module is used to handle cookies in Node.js?",
        options: [
            "cookie-parser",
            "cookie-session",
            "express-cookies",
            "cookies"
        ],
        correct: "cookie-parser"
    },
    {
        id: "25",
        question: "What is the purpose of the 'child_process' module in Node.js?",
        options: [
            "To provide utilities for spawning child processes",
            "To handle HTTP requests and responses",
            "To manage memory allocation",
            "To interact with the operating system's file system"
        ],
        correct: "To provide utilities for spawning child processes"
    },
    {
        id: "26",
        question: "Which method is used to write data to a writable stream in Node.js?",
        options: [
            "stream.write()",
            "stream.writeData()",
            "stream.send()",
            "stream.writeStream()"
        ],
        correct: "stream.write()"
    },
    {
        id: "27",
        question: "What is the purpose of the 'cluster' module in Node.js?",
        options: [
            "To provide utilities for working with file paths",
            "To handle multiple instances of a Node.js application",
            "To manage memory allocation",
            "To interact with the operating system's file system"
        ],
        correct: "To handle multiple instances of a Node.js application"
    },
    {
        id: "28",
        question: "Which HTTP status code is used to indicate a successful response?",
        options: [
            "200",
            "404",
            "500",
            "302"
        ],
        correct: "200"
    },
    {
        id: "29",
        question: "What is the purpose of the 'util' module in Node.js?",
        options: [
            "To provide utilities for working with file paths",
            "To handle utility functions that are commonly used in Node.js",
            "To manage memory allocation",
            "To interact with the operating system's file system"
        ],
        correct: "To handle utility functions that are commonly used in Node.js"
    },
    {
        id: "30",
        question: "What is the purpose of the 'stream' module in Node.js?",
        options: [
            "To provide utilities for working with file paths",
            "To handle streaming data",
            "To manage memory allocation",
            "To interact with the operating system's file system"
        ],
        correct: "To handle streaming data"
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
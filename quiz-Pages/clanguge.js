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
        question: "What does the 'printf' function in C do?",
        options: [
            "Reads input from the user",
            "Prints output to the console",
            "Opens a file for writing",
            "Performs mathematical calculations"
        ],
        correct: "Prints output to the console"
    },
    {
        id: "2",
        question: "Which symbol is used to denote a single-line comment in C?",
        options: [
            "//",
            "#",
            "/*",
            "'"
        ],
        correct: "//"
    },
    {
        id: "3",
        question: "What is the syntax for declaring a variable in C?",
        options: [
            "var myVariable;",
            "int myVariable;",
            "variable myVariable;",
            "myVariable = int;"
        ],
        correct: "int myVariable;"
    },
    {
        id: "4",
        question: "Which statement is used to terminate the execution of a loop in C?",
        options: [
            "halt;",
            "end;",
            "terminate;",
            "break;"
        ],
        correct: "break;"
    },
    {
        id: "5",
        question: "What is the purpose of the 'scanf' function in C?",
        options: [
            "Prints formatted output",
            "Reads input from the user",
            "Performs mathematical calculations",
            "Terminates the program"
        ],
        correct: "Reads input from the user"
    },
    {
        id: "6",
        question: "Which data type is used to store single characters in C?",
        options: [
            "char",
            "int",
            "float",
            "string"
        ],
        correct: "char"
    },
    {
        id: "7",
        question: "What is the output of the following code snippet?\n\n#include <stdio.h>\n\nint main() {\n    int x = 5;\n    printf(\"%d\", x++);\n    return 0;\n}",
        options: [
            "5",
            "6",
            "Error",
            "Undefined"
        ],
        correct: "5"
    },
    {
        id: "8",
        question: "What is the syntax for defining a constant in C?",
        options: [
            "#define MY_CONSTANT 10",
            "const MY_CONSTANT = 10;",
            "constant MY_CONSTANT = 10;",
            "const int MY_CONSTANT = 10;"
        ],
        correct: "#define MY_CONSTANT 10"
    },
    {
        id: "9",
        question: "Which operator is used to access the value stored in a pointer variable in C?",
        options: [
            "&",
            "*",
            "->",
            "."
        ],
        correct: "*"
    },
    {
        id: "10",
        question: "What is the purpose of the 'return' statement in a function in C?",
        options: [
            "Prints output to the console",
            "Reads input from the user",
            "Terminates the program",
            "Returns a value from the function"
        ],
        correct: "Returns a value from the function"
    },
    {
        id: "11",
        question: "What is the output of the following code snippet?\n\n#include <stdio.h>\n\nint main() {\n    int x = 10;\n    if (x > 5) {\n        printf(\"Hello\");\n    }\n    return 0;\n}",
        options: [
            "Hello",
            "Nothing",
            "Error",
            "Undefined"
        ],
        correct: "Hello"
    },
    {
        id: "12",
        question: "Which library is used for input and output functions in C?",
        options: [
            "<conio.h>",
            "<math.h>",
            "<stdio.h>",
            "<stdlib.h>"
        ],
        correct: "<stdio.h>"
    },
    {
        id: "13",
        question: "Which statement is used to declare a function in C?",
        options: [
            "define",
            "function",
            "method",
            "void"
        ],
        correct: "void"
    },
    {
        id: "14",
        question: "What is the purpose of the 'sizeof' operator in C?",
        options: [
            "Returns the size of a variable or data type",
            "Returns the address of a variable",
            "Performs mathematical calculations",
            "Prints formatted output"
        ],
        correct: "Returns the size of a variable or data type"
    },
    {
        id: "15",
        question: "What is the output of the following code snippet?\n\n#include <stdio.h>\n\nint main() {\n    printf(\"%d\", sizeof(int));\n    return 0;\n}",
        options: [
            "4",
            "2",
            "8",
            "Depends on the system architecture"
        ],
        correct: "Depends on the system architecture"
    },
    {
        id: "16",
        question: "Which operator is used to find the remainder of a division operation in C?",
        options: [
            "/",
            "%",
            "**",
            "//"
        ],
        correct: "%"
    },
    {
        id: "17",
        question: "What is the output of the following code snippet?\n\n#include <stdio.h>\n\nint main() {\n    int x = 5;\n    printf(\"%d\", x << 1);\n    return 0;\n}",
        options: [
            "5",
            "10",
            "15",
            "Error"
        ],
        correct: "10"
    },
    {
        id: "18",
        question: "Which statement is used to define a multi-dimensional array in C?",
        options: [
            "array",
            "list",
            "matrix",
            "None of the above"
        ],
        correct: "None of the above"
    },
    {
        id: "19",
        question: "Which loop is used to execute a block of code multiple times in C?",
        options: [
            "for",
            "while",
            "do-while",
            "All of the above"
        ],
        correct: "All of the above"
    },
    {
        id: "20",
        question: "What is the purpose of the 'break' statement in a switch-case construct in C?",
        options: [
            "Terminates the program",
            "Exits the loop",
            "Jumps to a specific case label",
            "Continues to the next iteration of the loop"
        ],
        correct: "Exits the loop"
    },
    {
        id: "21",
        question: "Which statement is used to include the contents of another file in a C program?",
        options: [
            "#include",
            "#import",
            "#require",
            "#attach"
        ],
        correct: "#include"
    },
    {
        id: "22",
        question: "What is the purpose of the 'continue' statement in a loop in C?",
        options: [
            "Exits the loop",
            "Jumps to a specific case label",
            "Continues to the next iteration of the loop",
            "None of the above"
        ],
        correct: "Continues to the next iteration of the loop"
    },
    {
        id: "23",
        question: "Which statement is used to dynamically allocate memory in C?",
        options: [
            "malloc()",
            "calloc()",
            "realloc()",
            "All of the above"
        ],
        correct: "All of the above"
    },
    {
        id: "24",
        question: "What is the output of the following code snippet?\n\n#include <stdio.h>\n\nint main() {\n    int x = 5;\n    printf(\"%d\", x / 2);\n    return 0;\n}",
        options: [
            "2.5",
            "2",
            "2.0",
            "Error"
        ],
        correct: "2"
    },
    {
        id: "25",
        question: "What is the purpose of the 'do-while' loop in C?",
        options: [
            "To execute a block of code multiple times",
            "To execute a block of code at least once",
            "To iterate over the elements of an array",
            "To terminate the program"
        ],
        correct: "To execute a block of code at least once"
    },
    {
        id: "26",
        question: "Which statement is used to define a structure in C?",
        options: [
            "struct",
            "class",
            "type",
            "None of the above"
        ],
        correct: "struct"
    },
    {
        id: "27",
        question: "What is the output of the following code snippet?\n\n#include <stdio.h>\n\nint main() {\n    int x = 5;\n    printf(\"%d\", x > 2 ? x : 2);\n    return 0;\n}",
        options: [
            "5",
            "2",
            "Error",
            "Undefined"
        ],
        correct: "5"
    },
    {
        id: "28",
        question: "What is the purpose of the 'void' keyword in a function declaration in C?",
        options: [
            "To indicate that the function returns no value",
            "To indicate that the function accepts no parameters",
            "To indicate that the function is private",
            "To indicate that the function is static"
        ],
        correct: "To indicate that the function returns no value"
    },
    {
        id: "29",
        question: "Which statement is used to define a pointer variable in C?",
        options: [
            "var",
            "ptr",
            "pointer",
            "None of the above"
        ],
        correct: "None of the above"
    },
    {
        id: "30",
        question: "What is the output of the following code snippet?\n\n#include <stdio.h>\n\nint main() {\n    int x = 10;\n    x += 5;\n    printf(\"%d\", x);\n    return 0;\n}",
        options: [
            "5",
            "10",
            "15",
            "Error"
        ],
        correct: "15"
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
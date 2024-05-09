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
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Sequential Query Language",
            "Structured Question Language",
            "Sequential Question Language"
        ],
        correct: "Structured Query Language"
    },
    {
        id: "2",
        question: "Which SQL keyword is used to retrieve data from a database?",
        options: [
            "GET",
            "RETRIEVE",
            "SELECT",
            "FETCH"
        ],
        correct: "SELECT"
    },
    {
        id: "3",
        question: "Which SQL keyword is used to update data in a database?",
        options: [
            "UPDATE",
            "MODIFY",
            "CHANGE",
            "ALTER"
        ],
        correct: "UPDATE"
    },
    {
        id: "4",
        question: "Which SQL keyword is used to delete data from a database?",
        options: [
            "REMOVE",
            "DELETE",
            "ERASE",
            "DISCARD"
        ],
        correct: "DELETE"
    },
    {
        id: "5",
        question: "Which SQL keyword is used to add new data to a database?",
        options: [
            "ADD",
            "INSERT",
            "CREATE",
            "NEW"
        ],
        correct: "INSERT"
    },
    {
        id: "6",
        question: "Which SQL keyword is used to create a new table?",
        options: [
            "CREATE TABLE",
            "DEFINE TABLE",
            "NEW TABLE",
            "ADD TABLE"
        ],
        correct: "CREATE TABLE"
    },
    {
        id: "7",
        question: "Which SQL keyword is used to define the conditions for the rows to be selected in a query?",
        options: [
            "FILTER",
            "CONDITION",
            "WHERE",
            "SELECT"
        ],
        correct: "WHERE"
    },
    {
        id: "8",
        question: "Which SQL keyword is used to sort the result set in ascending order?",
        options: [
            "ASC",
            "SORT",
            "ORDER BY",
            "ASCENDING"
        ],
        correct: "ASC"
    },
    {
        id: "9",
        question: "Which SQL keyword is used to join two or more tables?",
        options: [
            "MERGE",
            "JOIN",
            "COMBINE",
            "UNION"
        ],
        correct: "JOIN"
    },
    {
        id: "10",
        question: "Which SQL function is used to count the number of rows in a table?",
        options: [
            "COUNT()",
            "SUM()",
            "TOTAL()",
            "NUM_ROWS()"
        ],
        correct: "COUNT()"
    },
    {
        id: "11",
        question: "Which SQL function is used to find the maximum value in a column?",
        options: [
            "MAX()",
            "LARGEST()",
            "TOP()",
            "HIGHEST()"
        ],
        correct: "MAX()"
    },
    {
        id: "12",
        question: "Which SQL function is used to find the minimum value in a column?",
        options: [
            "MIN()",
            "SMALLEST()",
            "BOTTOM()",
            "LOWEST()"
        ],
        correct: "MIN()"
    },
    {
        id: "13",
        question: "Which SQL function is used to find the average value in a column?",
        options: [
            "AVG()",
            "MEAN()",
            "AVERAGE()",
            "TOTAL()"
        ],
        correct: "AVG()"
    },
    {
        id: "14",
        question: "Which SQL function is used to find the sum of values in a column?",
        options: [
            "SUM()",
            "TOTAL()",
            "ADD()",
            "SUM_VALUES()"
        ],
        correct: "SUM()"
    },
    {
        id: "15",
        question: "Which SQL operator is used to select rows based on multiple conditions?",
        options: [
            "AND",
            "OR",
            "NOT",
            "XOR"
        ],
        correct: "AND"
    },
    {
        id: "16",
        question: "Which SQL clause is used to filter rows based on a specified condition?",
        options: [
            "FILTER BY",
            "CONDITION",
            "WHERE",
            "LIMIT"
        ],
        correct: "WHERE"
    },
    {
        id: "17",
        question: "Which SQL clause is used to sort the result set in descending order?",
        options: [
            "DESC",
            "SORT",
            "ORDER DESC",
            "DESCENDING"
        ],
        correct: "DESC"
    },
    {
        id: "18",
        question: "Which SQL statement is used to remove duplicates from a result set?",
        options: [
            "REMOVE DUPLICATES",
            "DISTINCT",
            "UNIQUE",
            "REMOVE REPEATS"
        ],
        correct: "DISTINCT"
    },
    {
        id: "19",
        question: "Which SQL statement is used to change data in a table?",
        options: [
            "MODIFY",
            "CHANGE",
            "UPDATE",
            "ALTER"
        ],
        correct: "UPDATE"
    },
    {
        id: "20",
        question: "Which SQL statement is used to create a copy of an existing table?",
        options: [
            "CLONE TABLE",
            "COPY TABLE",
            "REPLICATE TABLE",
            "CREATE TABLE AS"
        ],
        correct: "CREATE TABLE AS"
    },
    {
        id: "21",
        question: "Which SQL statement is used to combine the results of two or more SELECT statements?",
        options: [
            "COMBINE",
            "UNION",
            "MERGE",
            "JOIN"
        ],
        correct: "UNION"
    },
    {
        id: "22",
        question: "Which SQL statement is used to retrieve data from more than one table?",
        options: [
            "FETCH",
            "JOIN",
            "MERGE",
            "UNION"
        ],
        correct: "JOIN"
    },
    {
        id: "23",
        question: "Which SQL statement is used to delete all rows in a table?",
        options: [
            "DELETE ALL",
            "DELETE",
            "REMOVE",
            "DROP"
        ],
        correct: "DELETE"
    },
    {
        id: "24",
        question: "Which SQL statement is used to permanently remove a table from the database?",
        options: [
            "DELETE TABLE",
            "REMOVE TABLE",
            "DROP TABLE",
            "ERASE TABLE"
        ],
        correct: "DROP TABLE"
    },
    {
        id: "25",
        question: "Which SQL statement is used to define a constraint on a column?",
        options: [
            "CONSTRAINT",
            "DEFINE",
            "ENFORCE",
            "ASSERT"
        ],
        correct: "CONSTRAINT"
    },
    {
        id: "26",
        question: "Which SQL statement is used to add a new column to a table?",
        options: [
            "ADD COLUMN",
            "INSERT COLUMN",
            "CREATE COLUMN",
            "DEFINE COLUMN"
        ],
        correct: "ADD COLUMN"
    },
    {
        id: "27",
        question: "Which SQL statement is used to rename a table?",
        options: [
            "RENAME TABLE",
            "ALTER TABLE",
            "CHANGE TABLE",
            "MODIFY TABLE"
        ],
        correct: "ALTER TABLE"
    },
    {
        id: "28",
        question: "Which SQL statement is used to change the data type of a column in a table?",
        options: [
            "CHANGE COLUMN",
            "MODIFY COLUMN",
            "ALTER COLUMN",
            "REDEFINE COLUMN"
        ],
        correct: "ALTER COLUMN"
    },
    {
        id: "29",
        question: "Which SQL statement is used to define a primary key for a table?",
        options: [
            "DEFINE KEY",
            "CREATE PRIMARY KEY",
            "SET PRIMARY KEY",
            "PRIMARY KEY"
        ],
        correct: "PRIMARY KEY"
    },
    {
        id: "30",
        question: "Which SQL statement is used to create an index on a table?",
        options: [
            "CREATE INDEX",
            "DEFINE INDEX",
            "SET INDEX",
            "INDEX"
        ],
        correct: "CREATE INDEX"
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
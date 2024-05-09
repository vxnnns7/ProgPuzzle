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
    question: "Which of the following is not a valid JavaScript variable name?",
    options: [
      "myVariable",
      "_myVariable",
      "2myVariable",
      "$myVariable"
    ],
    correct: "2myVariable"
  },
  {
    id: "2",
    question: "What will the following code output?\n\nconsole.log(2 + '2');",
    options: [
      "4",
      "22",
      "Error",
      "NaN"
    ],
    correct: "22"
  },
  {
    id: "3",
    question: "What is the result of the following expression: 5 == '5'?",
    options: [
      "true",
      "false",
      "Error",
      "NaN"
    ],
    correct: "true"
  },
  {
    id: "4",
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction() {}",
      "def myFunction() {}",
      "function myFunction() {}",
      "myFunction = function() {}"
    ],
    correct: "function myFunction() {}"
  },
  {
    id: "5",
    question: "What is the correct way to write an if statement in JavaScript?",
    options: [
      "if (x == 5) {}",
      "if x == 5 {}",
      "if x = 5 then {}",
      "if x = 5 {}"
    ],
    correct: "if (x == 5) {}"
  },
  {
    id: "6",
    question: "How do you add a comment in JavaScript?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment",
      "' This is a comment"
    ],
    correct: "// This is a comment"
  },
  {
    id: "7",
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "var",
      "let",
      "const",
      "All of the above"
    ],
    correct: "All of the above"
  },
  {
    id: "8",
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = (\"red\", \"green\", \"blue\")",
      "var colors = [\"red\", \"green\", \"blue\"]",
      "var colors = \"red\", \"green\", \"blue\"",
      "var colors = {\"red\", \"green\", \"blue\"}"
    ],
    correct: "var colors = [\"red\", \"green\", \"blue\"]"
  },
  {
    id: "9",
    question: "How do you access the last element of an array named 'myArray' in JavaScript?",
    options: [
      "myArray[length]",
      "myArray[length - 1]",
      "myArray[last]",
      "myArray[lastElement]"
    ],
    correct: "myArray[length - 1]"
  },
  {
    id: "10",
    question: "What does the 'typeof' operator in JavaScript return?",
    options: [
      "The type of a variable",
      "The value of a variable",
      "The length of a variable",
      "The address of a variable"
    ],
    correct: "The type of a variable"
  },
  {
    id: "11",
    question: "What is the result of the following expression: '10' + 5?",
    options: [
      "15",
      "105",
      "Error",
      "NaN"
    ],
    correct: "105"
  },
  {
    id: "12",
    question: "Which built-in method returns the length of a string in JavaScript?",
    options: [
      "length()",
      "size()",
      "count()",
      "None of the above"
    ],
    correct: "None of the above"
  },
  {
    id: "13",
    question: "What is the output of the following code snippet?\n\nconsole.log(typeof undefined);",
    options: [
      "undefined",
      "null",
      "Error",
      "string"
    ],
    correct: "undefined"
  },
  {
    id: "14",
    question: "Which of the following is not a valid JavaScript data type?",
    options: [
      "string",
      "boolean",
      "integer",
      "object"
    ],
    correct: "integer"
  },
  {
    id: "15",
    question: "What is the purpose of the 'return' statement in a JavaScript function?",
    options: [
      "To terminate the function",
      "To return a value from the function",
      "To print a value to the console",
      "To declare a variable"
    ],
    correct: "To return a value from the function"
  },
  {
    id: "16",
    question: "What is the output of the following code snippet?\n\nvar x = 10;\nconsole.log(x == '10');",
    options: [
      "true",
      "false",
      "Error",
      "NaN"
    ],
    correct: "true"
  },
  {
    id: "17",
    question: "Which method is used to add new items to the end of an array in JavaScript?",
    options: [
      "push()",
      "add()",
      "insert()",
      "append()"
    ],
    correct: "push()"
  },
  {
    id: "18",
    question: "What is the output of the following code snippet?\n\nconsole.log(Math.floor(4.6));",
    options: [
      "4.6",
      "5",
      "4",
      "6"
    ],
    correct: "4"
  },
  {
    id: "19",
    question: "What is the purpose of the 'typeof' operator in JavaScript?",
    options: [
      "To check the type of a variable",
      "To convert a variable to a different type",
      "To create a new variable",
      "To delete a variable"
    ],
    correct: "To check the type of a variable"
  },
  {
    id: "20",
    question: "What is the output of the following code snippet?\n\nconsole.log(10 > 5 && 5 < 10);",
    options: [
      "true",
      "false",
      "Error",
      "NaN"
    ],
    correct: "true"
  },
  {
    id: "21",
    question: "What is the result of the following expression: 5 + '5'?",
    options: [
      "10",
      "55",
      "Error",
      "NaN"
    ],
    correct: "55"
  },
  {
    id: "22",
    question: "What is the output of the following code snippet?\n\nconsole.log('hello'.toUpperCase());",
    options: [
      "HELLO",
      "Hello",
      "hello",
      "Error"
    ],
    correct: "HELLO"
  },
  {
    id: "23",
    question: "Which method is used to remove the last item from an array in JavaScript?",
    options: [
      "pop()",
      "remove()",
      "delete()",
      "last()"
    ],
    correct: "pop()"
  },
  {
    id: "24",
    question: "What is the output of the following code snippet?\n\nconsole.log(Math.max(0, 150, 30, 20));",
    options: [
      "150",
      "30",
      "20",
      "Error"
    ],
    correct: "150"
  },
  {
    id: "25",
    question: "Which built-in method returns the string representation of the number's value in JavaScript?",
    options: [
      "toString()",
      "toNumber()",
      "numberToString()",
      "stringify()"
    ],
    correct: "toString()"
  },
  {
    id: "26",
    question: "What is the output of the following code snippet?\n\nconsole.log(typeof NaN);",
    options: [
      "number",
      "NaN",
      "Error",
      "string"
    ],
    correct: "number"
  },
  {
    id: "27",
    question: "Which method is used to round a number downwards to the nearest integer in JavaScript?",
    options: [
      "Math.floor()",
      "Math.round()",
      "Math.ceil()",
      "Math.trunc()"
    ],
    correct: "Math.floor()"
  },
  {
    id: "28",
    question: "What does the 'new' keyword do in JavaScript?",
    options: [
      "Creates a new function",
      "Creates a new instance of an object",
      "Deletes an object",
      "None of the above"
    ],
    correct: "Creates a new instance of an object"
  },
  {
    id: "29",
    question: "Which operator is used for exponentiation in JavaScript?",
    options: [
      "**",
      "^",
      "^^",
      "//"
    ],
    correct: "**"
  },
  {
    id: "30",
    question: "What is the output of the following code snippet?\n\nvar x = 5;\nconsole.log(x++);",
    options: [
      "5",
      "6",
      "Error",
      "NaN"
    ],
    correct: "5"
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
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
      question: "What is Ruby?",
      options: [
          "A programming language",
          "A database management system",
          "A web server",
          "A JavaScript library"
      ],
      correct: "A programming language"
  },
  {
      id: "2",
      question: "Who created Ruby?",
      options: [
          "Yukihiro Matsumoto",
          "Guido van Rossum",
          "Linus Torvalds",
          "James Gosling"
      ],
      correct: "Yukihiro Matsumoto"
  },
  {
      id: "3",
      question: "What is the main feature of Ruby known for its simplicity and productivity?",
      options: [
          "RubyGems",
          "Ruby on Rails",
          "Sinatra",
          "Rack"
      ],
      correct: "Ruby on Rails"
  },
  {
      id: "4",
      question: "Which symbol is used to define a block in Ruby?",
      options: [
          "{}",
          "()",
          "[]",
          "<>"
      ],
      correct: "{}"
  },
  {
      id: "5",
      question: "What does IRB stand for in Ruby?",
      options: [
          "Interactive Ruby",
          "Integrated Ruby Builder",
          "Internal Ruby",
          "Innovative Ruby Base"
      ],
      correct: "Interactive Ruby"
  },
  {
      id: "6",
      question: "What does RVM stand for in Ruby development?",
      options: [
          "Ruby Version Manager",
          "Ruby Virtual Machine",
          "Ruby Version Migration",
          "Ruby Validation Module"
      ],
      correct: "Ruby Version Manager"
  },
  {
      id: "7",
      question: "Which operator is used to concatenate strings in Ruby?",
      options: [
          "+",
          "&",
          ".",
          ","
      ],
      correct: "+"
  },
  {
      id: "8",
      question: "What is a gem in the context of Ruby?",
      options: [
          "A package management system",
          "A programming language feature",
          "A type of data structure",
          "A database management system"
      ],
      correct: "A package management system"
  },
  {
      id: "9",
      question: "Which module is used for handling HTTP requests and responses in Ruby?",
      options: [
          "Net::HTTP",
          "HTTParty",
          "HTTPClient",
          "Faraday"
      ],
      correct: "Net::HTTP"
  },
  {
      id: "10",
      question: "What is the purpose of the `require` keyword in Ruby?",
      options: [
          "To include external libraries",
          "To define a variable",
          "To loop through an array",
          "To define a class"
      ],
      correct: "To include external libraries"
  },
  {
      id: "11",
      question: "What is the purpose of the `yield` keyword in Ruby?",
      options: [
          "To return a value from a method",
          "To define a block",
          "To loop through a collection",
          "To execute a block passed to a method"
      ],
      correct: "To execute a block passed to a method"
  },
  {
      id: "12",
      question: "Which symbol is used to define a symbol in Ruby?",
      options: [
          ":",
          "$",
          "@",
          "&"
      ],
      correct: ":"
  },
  {
      id: "13",
      question: "What is the purpose of the `attr_accessor` method in Ruby?",
      options: [
          "To create getter and setter methods for class attributes",
          "To define a class variable",
          "To access an instance variable",
          "To define a class method"
      ],
      correct: "To create getter and setter methods for class attributes"
  },
  {
      id: "14",
      question: "Which loop construct is used to iterate over a collection of elements in Ruby?",
      options: [
          "each",
          "for",
          "while",
          "until"
      ],
      correct: "each"
  },
  {
      id: "15",
      question: "What is the purpose of the `include?` method in Ruby?",
      options: [
          "To check if an element exists in an array",
          "To include a module in a class",
          "To concatenate strings",
          "To check if a string includes another string"
      ],
      correct: "To check if a string includes another string"
  },
  {
      id: "16",
      question: "What is the purpose of the `self` keyword in Ruby?",
      options: [
          "To refer to the current instance of a class",
          "To define a class method",
          "To create a new instance of a class",
          "To access a class variable"
      ],
      correct: "To refer to the current instance of a class"
  },
  {
      id: "17",
      question: "Which method is used to convert a string to uppercase in Ruby?",
      options: [
          "upcase",
          "uppercase",
          "to_upper",
          "to_uppercase"
      ],
      correct: "upcase"
  },
  {
      id: "18",
      question: "What is the purpose of the `puts` method in Ruby?",
      options: [
          "To print a string with a newline character",
          "To concatenate strings",
          "To define a variable",
          "To check if a condition is true"
      ],
      correct: "To print a string with a newline character"
  },
  {
      id: "19",
      question: "Which method is used to sort an array in Ruby?",
      options: [
          "sort",
          "order",
          "arrange",
          "sort_by"
      ],
      correct: "sort"
  },
  {
      id: "20",
      question: "What does `puts` stand for in Ruby?",
      options: [
          "Put String",
          "Print with Newline",
          "Print String",
          "Print to STDOUT"
      ],
      correct: "Print to STDOUT"
  },
  {
      id: "21",
      question: "What is the purpose of the `module` keyword in Ruby?",
      options: [
          "To define a namespace",
          "To define a class",
          "To include a module",
          "To define a method"
      ],
      correct: "To define a namespace"
  },
  {
      id: "22",
      question: "Which method is used to remove duplicate elements from an array in Ruby?",
      options: [
          "uniq",
          "unique",
          "remove_duplicates",
          "distinct"
      ],
      correct: "uniq"
  },
  {
      id: "23",
      question: "What is the purpose of the `gsub` method in Ruby?",
      options: [
          "To replace substrings in a string",
          "To split a string into an array",
          "To concatenate strings",
          "To check if a string includes another string"
      ],
      correct: "To replace substrings in a string"
  },
  {
      id: "24",
      question: "Which operator is used to check if two values are equal in Ruby?",
      options: [
          "==",
          "=",
          "===",
          "!="
      ],
      correct: "=="
  },
  {
      id: "25",
      question: "What is the purpose of the `||` operator in Ruby?",
      options: [
          "Logical OR",
          "Logical AND",
          "Logical NOT",
          "Bitwise OR"
      ],
      correct: "Logical OR"
  },
  {
      id: "26",
      question: "What is the purpose of the `nil` keyword in Ruby?",
      options: [
          "To represent absence of a value",
          "To define a class",
          "To define a method",
          "To check if a variable is empty"
      ],
      correct: "To represent absence of a value"
  },
  {
      id: "27",
      question: "What is the purpose of the `to_s` method in Ruby?",
      options: [
          "To convert an object to a string",
          "To convert a string to an integer",
          "To convert a string to a symbol",
          "To convert an object to an array"
      ],
      correct: "To convert an object to a string"
  },
  {
      id: "28",
      question: "What is the purpose of the `to_i` method in Ruby?",
      options: [
          "To convert a string to an integer",
          "To convert an integer to a string",
          "To convert an object to a string",
          "To convert a string to a symbol"
      ],
      correct: "To convert a string to an integer"
  },
  {
      id: "29",
      question: "What is the purpose of the `to_f` method in Ruby?",
      options: [
          "To convert a string to a floating-point number",
          "To convert a floating-point number to a string",
          "To convert an object to a floating-point number",
          "To convert a floating-point number to an integer"
      ],
      correct: "To convert a string to a floating-point number"
  },
  {
      id: "30",
      question: "Which method is used to iterate over the keys and values of a hash in Ruby?",
      options: [
          "each",
          "for",
          "map",
          "collect"
      ],
      correct: "each"
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
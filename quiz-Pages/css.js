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

const quizArray = [
    {
        id: "1",
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Cascaded Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets"
        ],
        correct: "Cascading Style Sheets"
    },
    {
        id: "2",
        question: "Which CSS property is used to change the text color of an element?",
        options: [
            "text-color",
            "font-color",
            "color",
            "text-style"
        ],
        correct: "color"
    },
    {
        id: "3",
        question: "What does CSS box model consist of?",
        options: [
            "Margin, Border, Padding, Content",
            "Border, Padding, Content, Margin",
            "Padding, Border, Margin, Content",
            "Content, Padding, Border, Margin"
        ],
        correct: "Padding, Border, Margin, Content"
    },
    {
        id: "4",
        question: "Which CSS property is used to control the space between elements?",
        options: [
            "margin",
            "spacing",
            "padding",
            "gap"
        ],
        correct: "margin"
    },
    {
        id: "5",
        question: "Which of the following is NOT a valid value for the display property?",
        options: [
            "block",
            "inline",
            "flex",
            "box"
        ],
        correct: "box"
    },
    {
        id: "6",
        question: "Which CSS property is used to set the background color of an element?",
        options: [
            "background-color",
            "color",
            "background",
            "bg-color"
        ],
        correct: "background-color"
    },
    {
        id: "7",
        question: "Which CSS property is used to set the font size of an element?",
        options: [
            "font-style",
            "size",
            "font-size",
            "text-size"
        ],
        correct: "font-size"
    },
    {
        id: "8",
        question: "Which CSS property is used to specify the font family for an element?",
        options: [
            "font-family",
            "font-style",
            "font-type",
            "family"
        ],
        correct: "font-family"
    },
    {
        id: "9",
        question: "Which CSS property is used to make text bold?",
        options: [
            "font-weight",
            "bold",
            "text-weight",
            "weight"
        ],
        correct: "font-weight"
    },
    {
        id: "10",
        question: "Which CSS property is used to add rounded corners to an element?",
        options: [
            "corner-radius",
            "rounded-corners",
            "border-radius",
            "border-corner"
        ],
        correct: "border-radius"
    },
    {
        id: "11",
        question: "Which CSS property is used to specify the opacity of an element?",
        options: [
            "opacity",
            "transparent",
            "visibility",
            "opacity-level"
        ],
        correct: "opacity"
    },
    {
        id: "12",
        question: "Which CSS property is used to create shadow effects around an element's box?",
        options: [
            "box-shadow",
            "shadow",
            "box-effect",
            "element-shadow"
        ],
        correct: "box-shadow"
    },
    {
        id: "13",
        question: "Which CSS property is used to specify the space between the lines of text?",
        options: [
            "line-height",
            "text-line",
            "spacing",
            "line-spacing"
        ],
        correct: "line-height"
    },
    {
        id: "14",
        question: "Which CSS property is used to make text italic?",
        options: [
            "italic",
            "font-style",
            "text-style",
            "italic-style"
        ],
        correct: "font-style"
    },
    {
        id: "15",
        question: "Which CSS property is used to align text to the left?",
        options: [
            "text-align",
            "align",
            "left-align",
            "text-left"
        ],
        correct: "text-align"
    },
    {
        id: "16",
        question: "Which CSS property is used to align an element horizontally?",
        options: [
            "horizontal-align",
            "align",
            "center",
            "text-center"
        ],
        correct: "align"
    },
    {
        id: "17",
        question: "Which CSS property is used to add an underline to text?",
        options: [
            "text-decoration",
            "underline",
            "decoration",
            "text-underline"
        ],
        correct: "text-decoration"
    },
    {
        id: "18",
        question: "Which CSS property is used to hide an element?",
        options: [
            "hidden",
            "display",
            "visibility",
            "hide"
        ],
        correct: "display"
    },
    {
        id: "19",
        question: "Which CSS property is used to set the width of an element?",
        options: [
            "width",
            "element-width",
            "size",
            "set-width"
        ],
        correct: "width"
    },
    {
        id: "20",
        question: "Which CSS property is used to set the height of an element?",
        options: [
            "height",
            "element-height",
            "size",
            "set-height"
        ],
        correct: "height"
    },
    {
        id: "21",
        question: "Which CSS property is used to set the space between the content and the border of an element?",
        options: [
            "margin",
            "border-spacing",
            "padding",
            "spacing"
        ],
        correct: "padding"
    },
    {
        id: "22",
        question: "Which CSS property is used to set the thickness of an element's border?",
        options: [
            "border-width",
            "border-thickness",
            "thickness",
            "border-size"
        ],
        correct: "border-width"
    },
    {
        id: "23",
        question: "Which CSS property is used to set the style of an element's border?",
        options: [
            "border-style",
            "border",
            "style",
            "border-decoration"
        ],
        correct: "border-style"
    },
    {
        id: "24",
        question: "Which CSS property is used to add a shadow to the text?",
        options: [
            "text-shadow",
            "shadow",
            "font-shadow",
            "text-effect"
        ],
        correct: "text-shadow"
    },
    {
        id: "25",
        question: "Which CSS property is used to specify the position of an element?",
        options: [
            "position",
            "place",
            "align",
            "layout"
        ],
        correct: "position"
    },
    {
        id: "26",
        question: "Which CSS property is used to control the order of an element within its container?",
        options: [
            "z-index",
            "order",
            "index",
            "placement"
        ],
        correct: "order"
    },
    {
        id: "27",
        question: "Which CSS property is used to set the rotation of an element?",
        options: [
            "rotate",
            "rotation",
            "transform",
            "rotate-element"
        ],
        correct: "transform"
    },
    {
        id: "28",
        question: "Which CSS property is used to set the visibility of an element?",
        options: [
            "visible",
            "display",
            "visibility",
            "show"
        ],
        correct: "visibility"
    },
    {
        id: "29",
        question: "Which CSS property is used to set the display behavior of an element?",
        options: [
            "display",
            "show",
            "visible",
            "render"
        ],
        correct: "display"
    },
    {
        id: "30",
        question: "Which CSS property is used to create a transition effect on an element?",
        options: [
            "transition",
            "transform",
            "animation",
            "effect"
        ],
        correct: "transition"
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
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
        question: "What is Tailwind CSS?",
        options: [
            "A utility-first CSS framework",
            "A JavaScript library",
            "A server-side language",
            "A design tool"
        ],
        correct: "A utility-first CSS framework"
    },
    {
        id: "2",
        question: "Which of the following best describes the philosophy behind Tailwind CSS?",
        options: [
            "Providing low-level utility classes to build custom designs",
            "Using pre-built components to create designs",
            "Writing CSS from scratch for each project",
            "Adopting a traditional CSS framework approach"
        ],
        correct: "Providing low-level utility classes to build custom designs"
    },
    {
        id: "3",
        question: "How are styles applied in Tailwind CSS?",
        options: [
            "By using utility classes directly in HTML",
            "By writing traditional CSS files",
            "By using JavaScript functions",
            "By using CSS preprocessors like Sass or Less"
        ],
        correct: "By using utility classes directly in HTML"
    },
    {
        id: "4",
        question: "What is the primary benefit of using utility-first CSS frameworks like Tailwind CSS?",
        options: [
            "Faster development and more consistent styling",
            "More flexibility and control over styles",
            "Less reliance on HTML for styling",
            "Easier integration with JavaScript frameworks"
        ],
        correct: "Faster development and more consistent styling"
    },
    {
        id: "5",
        question: "Which of the following is NOT a core concept of Tailwind CSS?",
        options: [
            "Pre-built components",
            "Utility classes",
            "Responsive design",
            "Configuration and customization"
        ],
        correct: "Pre-built components"
    },
    {
        id: "6",
        question: "What does the 'container' class in Tailwind CSS do?",
        options: [
            "Creates a centered container with a max-width",
            "Styles the text content of an element",
            "Adds padding to an element",
            "Creates a full-width container"
        ],
        correct: "Creates a centered container with a max-width"
    },
    {
        id: "7",
        question: "Which of the following utilities is used to change the font size in Tailwind CSS?",
        options: [
            "text-sm",
            "font-size",
            "text-size",
            "text-lg"
        ],
        correct: "text-sm"
    },
    {
        id: "8",
        question: "What utility class is used to set the background color in Tailwind CSS?",
        options: [
            "bg-{color}",
            "background-color-{color}",
            "bg-color-{color}",
            "bg-{color}-500"
        ],
        correct: "bg-{color}"
    },
    {
        id: "9",
        question: "How do you create a responsive layout using Tailwind CSS?",
        options: [
            "By using responsive utility classes like sm, md, lg, etc.",
            "By writing custom media queries in CSS files",
            "By using JavaScript to dynamically adjust styles",
            "By using a pre-built responsive grid system"
        ],
        correct: "By using responsive utility classes like sm, md, lg, etc."
    },
    {
        id: "10",
        question: "Which of the following is a valid Tailwind CSS configuration file format?",
        options: [
            "tailwind.config.js",
            "tailwind.css",
            "tailwind.json",
            "tailwind.config.json"
        ],
        correct: "tailwind.config.js"
    },
    {
        id: "11",
        question: "What is the purpose of the 'hover' variant in Tailwind CSS?",
        options: [
            "To apply styles on hover",
            "To apply styles when an element is clicked",
            "To apply styles when an element is focused",
            "To apply styles based on the scroll position"
        ],
        correct: "To apply styles on hover"
    },
    {
        id: "12",
        question: "Which of the following is NOT a valid Tailwind CSS color scale?",
        options: [
            "text-blue",
            "bg-green",
            "border-red",
            "hover-purple"
        ],
        correct: "hover-purple"
    },
    {
        id: "13",
        question: "What does the 'p-4' utility class in Tailwind CSS do?",
        options: [
            "Adds padding to all sides of an element",
            "Sets the font size to 4",
            "Adds padding to the top and bottom of an element",
            "Adds padding to the left and right of an element"
        ],
        correct: "Adds padding to all sides of an element"
    },
    {
        id: "14",
        question: "Which of the following utilities is used to add margin to the bottom of an element?",
        options: [
            "mb-{size}",
            "margin-bottom-{size}",
            "mt-{size}",
            "pb-{size}"
        ],
        correct: "mb-{size}"
    },
    {
        id: "15",
        question: "What does the 'flex' utility class in Tailwind CSS do?",
        options: [
            "Creates a flex container",
            "Adds padding to all sides of an element",
            "Sets the font size to 4",
            "Sets the text color"
        ],
        correct: "Creates a flex container"
    },
    {
        id: "16",
        question: "What is the purpose of the 'grid-cols-{n}' utility class in Tailwind CSS?",
        options: [
            "Defines the number of columns in a grid layout",
            "Sets the font size to n",
            "Adds padding to all sides of an element",
            "Sets the text color to n"
        ],
        correct: "Defines the number of columns in a grid layout"
    },
    {
        id: "17",
        question: "How can you customize the default colors in Tailwind CSS?",
        options: [
            "By configuring the 'theme' object in the tailwind.config.js file",
            "By overriding default styles with custom CSS",
            "By using a preprocessor like Sass or Less",
            "By creating a new utility class"
        ],
        correct: "By configuring the 'theme' object in the tailwind.config.js file"
    },
    {
        id: "18",
        question: "What does the 'shadow-lg' utility class in Tailwind CSS do?",
        options: [
            "Adds a large shadow to an element",
            "Sets the font size to large",
            "Adds a light gray border to an element",
            "Adds a light gray background to an element"
        ],
        correct: "Adds a large shadow to an element"
    },
    {
        id: "19",
        question: "What is the purpose of the 'z-10' utility class in Tailwind CSS?",
        options: [
            "Sets the z-index of an element to 10",
            "Adds padding to all sides of an element",
            "Adds a border to an element",
            "Sets the text color to black"
        ],
        correct: "Sets the z-index of an element to 10"
    },
    {
        id: "20",
        question: "What does the 'uppercase' utility class in Tailwind CSS do?",
        options: [
            "Transforms text to uppercase",
            "Transforms text to lowercase",
            "Transforms text to capitalize",
            "Transforms text to italics"
        ],
        correct: "Transforms text to uppercase"
    },
    {
        id: "21",
        question: "What is the purpose of the 'transition' utility class in Tailwind CSS?",
        options: [
            "To apply smooth transitions to CSS properties",
            "To transition between different layout styles",
            "To define a protocol",
            "To handle errors"
        ],
        correct: "To apply smooth transitions to CSS properties"
    },
    {
        id: "22",
        question: "What does the 'from-blue-500' utility class in Tailwind CSS do?",
        options: [
            "Sets the starting color of a gradient to blue",
            "Sets the ending color of a gradient to blue",
            "Sets the text color to blue",
            "Sets the background color to blue"
        ],
        correct: "Sets the starting color of a gradient to blue"
    },
    {
        id: "23",
        question: "How can you include custom utilities in Tailwind CSS?",
        options: [
            "By using the '@apply' directive in CSS",
            "By modifying the Tailwind CSS source code",
            "By creating a plugin for Tailwind CSS",
            "By importing a JavaScript library"
        ],
        correct: "By creating a plugin for Tailwind CSS"
    },
    {
        id: "24",
        question: "What does the 'grid-flow-col' utility class in Tailwind CSS do?",
        options: [
            "Defines the flow direction of a grid layout to be column",
            "Defines the flow direction of a grid layout to be row",
            "Adds padding to all sides of an element",
            "Adds a border to an element"
        ],
        correct: "Defines the flow direction of a grid layout to be column"
    },
    {
        id: "25",
        question: "What does the 'hover:underline' utility class in Tailwind CSS do?",
        options: [
            "Underlines text on hover",
            "Removes underline from text on hover",
            "Adds a border to an element on hover",
            "Adds a shadow to an element on hover"
        ],
        correct: "Underlines text on hover"
    },
    {
        id: "26",
        question: "What is the purpose of the 'divide-y' utility class in Tailwind CSS?",
        options: [
            "Adds a vertical divider between elements",
            "Adds a horizontal divider between elements",
            "Adds padding to all sides of an element",
            "Adds a shadow to an element"
        ],
        correct: "Adds a vertical divider between elements"
    },
    {
        id: "27",
        question: "What does the 'rounded-md' utility class in Tailwind CSS do?",
        options: [
            "Applies medium rounded corners to an element",
            "Applies small rounded corners to an element",
            "Applies large rounded corners to an element",
            "Removes rounded corners from an element"
        ],
        correct: "Applies medium rounded corners to an element"
    },
    {
        id: "28",
        question: "What is the purpose of the 'flex-grow' utility class in Tailwind CSS?",
        options: [
            "Allows a flex item to grow to fill available space",
            "Sets the flex basis of a flex item",
            "Defines the number of columns in a flex container",
            "Adds padding to all sides of a flex item"
        ],
        correct: "Allows a flex item to grow to fill available space"
    },
    {
        id: "29",
        question: "What does the 'border-opacity-50' utility class in Tailwind CSS do?",
        options: [
            "Sets the opacity of the border to 50%",
            "Adds a border to an element with 50% opacity",
            "Adds padding to all sides of an element",
            "Adds a shadow to an element with 50% opacity"
        ],
        correct: "Sets the opacity of the border to 50%"
    },
    {
        id: "30",
        question: "How can you extend Tailwind CSS with additional utilities?",
        options: [
            "By using plugins",
            "By modifying the Tailwind CSS source code",
            "By importing a JavaScript library",
            "By writing custom CSS"
        ],
        correct: "By using plugins"
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
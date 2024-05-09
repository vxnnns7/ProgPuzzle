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
        question: "What is React?",
        options: [
            "A JavaScript library for building user interfaces",
            "A backend framework",
            "A programming language",
            "A database management system"
        ],
        correct: "A JavaScript library for building user interfaces"
    },
    {
        id: "2",
        question: "Which command is used to create a new React app?",
        options: [
            "create-react-app",
            "new-react-app",
            "react-create-app",
            "generate-react-app"
        ],
        correct: "create-react-app"
    },
    {
        id: "3",
        question: "What is JSX?",
        options: [
            "A JavaScript syntax extension",
            "A CSS preprocessor",
            "A React component",
            "A package manager"
        ],
        correct: "A JavaScript syntax extension"
    },
    {
        id: "4",
        question: "What is the main purpose of state in React?",
        options: [
            "To store and manage component data",
            "To style components",
            "To define the structure of components",
            "To handle routing"
        ],
        correct: "To store and manage component data"
    },
    {
        id: "5",
        question: "Which method is used to change the state of a component in React?",
        options: [
            "setState()",
            "changeState()",
            "updateState()",
            "modifyState()"
        ],
        correct: "setState()"
    },
    {
        id: "6",
        question: "What is a prop in React?",
        options: [
            "An input value passed to a component",
            "A state variable",
            "A CSS property",
            "A React component"
        ],
        correct: "An input value passed to a component"
    },
    {
        id: "7",
        question: "What is a component in React?",
        options: [
            "A reusable piece of UI",
            "A JavaScript function or class that returns JSX",
            "A function that modifies component state",
            "A method used for handling events"
        ],
        correct: "A JavaScript function or class that returns JSX"
    },
    {
        id: "8",
        question: "What is the purpose of keys in React lists?",
        options: [
            "To identify unique items in a list",
            "To style list items",
            "To define the order of list items",
            "To create nested lists"
        ],
        correct: "To identify unique items in a list"
    },
    {
        id: "9",
        question: "What does the `useState` hook do in React?",
        options: [
            "Adds state to functional components",
            "Renders a component",
            "Defines props for a component",
            "Defines lifecycle methods for a component"
        ],
        correct: "Adds state to functional components"
    },
    {
        id: "10",
        question: "What is a React component lifecycle method?",
        options: [
            "componentDidMount",
            "renderComponent",
            "setState",
            "componentRender"
        ],
        correct: "componentDidMount"
    },
    {
        id: "11",
        question: "Which method is used to render a React component to the DOM?",
        options: [
            "ReactDOM.render()",
            "React.render()",
            "component.render()",
            "renderComponent()"
        ],
        correct: "ReactDOM.render()"
    },
    {
        id: "12",
        question: "What is the purpose of the `key` prop in React?",
        options: [
            "To uniquely identify elements in an array",
            "To style elements",
            "To define component state",
            "To handle user input"
        ],
        correct: "To uniquely identify elements in an array"
    },
    {
        id: "13",
        question: "What is the virtual DOM in React?",
        options: [
            "A lightweight representation of the actual DOM",
            "A virtual reality simulation",
            "A database management system",
            "A rendering engine"
        ],
        correct: "A lightweight representation of the actual DOM"
    },
    {
        id: "14",
        question: "What is the purpose of React Router?",
        options: [
            "To handle routing in React applications",
            "To manage component state",
            "To create reusable components",
            "To manage component lifecycles"
        ],
        correct: "To handle routing in React applications"
    },
    {
        id: "15",
        question: "What is the purpose of the `useEffect` hook in React?",
        options: [
            "To perform side effects in functional components",
            "To define component state",
            "To handle user input",
            "To render components"
        ],
        correct: "To perform side effects in functional components"
    },
    {
        id: "16",
        question: "What is the purpose of React.Fragment?",
        options: [
            "To group multiple elements without adding extra nodes to the DOM",
            "To define a component's lifecycle",
            "To create a reusable component",
            "To style components"
        ],
        correct: "To group multiple elements without adding extra nodes to the DOM"
    },
    {
        id: "17",
        question: "What is the purpose of the `useRef` hook in React?",
        options: [
            "To create a reference to a DOM element or React component",
            "To define component state",
            "To manage component lifecycles",
            "To handle user input"
        ],
        correct: "To create a reference to a DOM element or React component"
    },
    {
        id: "18",
        question: "What is a higher-order component (HOC) in React?",
        options: [
            "A function that takes a component and returns a new component",
            "A component that renders other components",
            "A component with complex state logic",
            "A component with custom styling"
        ],
        correct: "A function that takes a component and returns a new component"
    },
    {
        id: "19",
        question: "What is the purpose of the `useReducer` hook in React?",
        options: [
            "To manage complex state logic",
            "To define component state",
            "To render components",
            "To handle user input"
        ],
        correct: "To manage complex state logic"
    },
    {
        id: "20",
        question: "What is a React context?",
        options: [
            "A way to pass data through the component tree without having to pass props manually at every level",
            "A component's local state",
            "A function that takes a component and returns a new component",
            "A higher-order component (HOC)"
        ],
        correct: "A way to pass data through the component tree without having to pass props manually at every level"
    },
    {
        id: "21",
        question: "What is the purpose of the `useContext` hook in React?",
        options: [
            "To access React context in functional components",
            "To define component state",
            "To render components",
            "To handle user input"
        ],
        correct: "To access React context in functional components"
    },
    {
        id: "22",
        question: "What is the purpose of the `useCallback` hook in React?",
        options: [
            "To memoize functions in functional components",
            "To define component state",
            "To render components",
            "To handle user input"
        ],
        correct: "To memoize functions in functional components"
    },
    {
        id: "23",
        question: "What is the purpose of the `useMemo` hook in React?",
        options: [
            "To memoize the result of a function",
            "To define component state",
            "To render components",
            "To handle user input"
        ],
        correct: "To memoize the result of a function"
    },
    {
        id: "24",
        question: "What is the purpose of the `useEffect` hook in React?",
        options: [
            "To perform side effects in functional components",
            "To define component state",
            "To handle user input",
            "To render components"
        ],
        correct: "To perform side effects in functional components"
    },
    {
        id: "25",
        question: "What is the purpose of the `useLayoutEffect` hook in React?",
        options: [
            "To perform side effects synchronously after all DOM mutations",
            "To define component state",
            "To handle user input",
            "To render components"
        ],
        correct: "To perform side effects synchronously after all DOM mutations"
    },
    {
        id: "26",
        question: "What is a React hook?",
        options: [
            "A function that lets you use state and other React features without writing a class",
            "A class-based component in React",
            "A way to manage component lifecycle",
            "A function that defines component state"
        ],
        correct: "A function that lets you use state and other React features without writing a class"
    },
    {
        id: "27",
        question: "What is the purpose of the `forwardRef` function in React?",
        options: [
            "To forward a ref to a child component",
            "To define component state",
            "To render components",
            "To handle user input"
        ],
        correct: "To forward a ref to a child component"
    },
    {
        id: "28",
        question: "What is the purpose of the `useImperativeHandle` hook in React?",
        options: [
            "To customize the instance value that is exposed to parent components when using refs",
            "To define component state",
            "To render components",
            "To handle user input"
        ],
        correct: "To customize the instance value that is exposed to parent components when using refs"
    },
    {
        id: "29",
        question: "What is the purpose of the `useDebugValue` hook in React?",
        options: [
            "To display a label for custom hooks in React DevTools",
            "To define component state",
            "To render components",
            "To handle user input"
        ],
        correct: "To display a label for custom hooks in React DevTools"
    },
    {
        id: "30",
        question: "What is the purpose of the `React.memo` function in React?",
        options: [
            "To memoize a functional component",
            "To define component state",
            "To render components",
            "To handle user input"
        ],
        correct: "To memoize a functional component"
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
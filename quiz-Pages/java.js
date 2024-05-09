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
        question: "What does the following Java code print?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++);\n    }\n}",
        options: [
            "5",
            "6",
            "Compiler Error",
            "Undefined Behavior"
        ],
        correct: "5"
    },
    {
        id: "2",
        question: "Which of the following is not a valid Java keyword?",
        options: [
            "class",
            "interface",
            "package",
            "function"
        ],
        correct: "function"
    },
    {
        id: "3",
        question: "What is the result of the expression '5 + 3 * 2' in Java?",
        options: [
            "16",
            "11",
            "13",
            "18"
        ],
        correct: "11"
    },
    {
        id: "4",
        question: "Which of the following is the correct way to declare an array in Java?",
        options: [
            "int[] arr = new int[5];",
            "int arr[5];",
            "arr[5] = new int[];",
            "new int arr[5];"
        ],
        correct: "int[] arr = new int[5];"
    },
    {
        id: "5",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(10 / 3);\n    }\n}",
        options: [
            "3",
            "3.33",
            "3.0",
            "Compiler Error"
        ],
        correct: "3"
    },
    {
        id: "6",
        question: "Which of the following is a valid way to declare a String object in Java?",
        options: [
            "String str = \"Hello\";",
            "str = new String(\"Hello\");",
            "str = String(\"Hello\");",
            "Both A and B"
        ],
        correct: "Both A and B"
    },
    {
        id: "7",
        question: "Which operator is used to allocate memory for an object in Java?",
        options: [
            "alloc",
            "new",
            "malloc",
            "allocate"
        ],
        correct: "new"
    },
    {
        id: "8",
        question: "What does the 'println' method do in Java?",
        options: [
            "Prints a new line to the console",
            "Prints a formatted line to the console",
            "Prints a line without a newline character",
            "Prints a line to a file"
        ],
        correct: "Prints a new line to the console"
    },
    {
        id: "9",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        System.out.println(x / 3);\n    }\n}",
        options: [
            "3",
            "3.33",
            "3.0",
            "Compiler Error"
        ],
        correct: "3"
    },
    {
        id: "10",
        question: "Which of the following is not a valid Java variable name?",
        options: [
            "myVariable",
            "_myVariable",
            "123Variable",
            "variable123"
        ],
        correct: "123Variable"
    },
    {
        id: "11",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        int y = 10;\n        System.out.println(x + y);\n    }\n}",
        options: [
            "510",
            "15",
            "5 + 10",
            "Compiler Error"
        ],
        correct: "15"
    },
    {
        id: "12",
        question: "Which Java keyword is used to define a class?",
        options: [
            "class",
            "define",
            "struct",
            "create"
        ],
        correct: "class"
    },
    {
        id: "13",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3};\n        System.out.println(arr[1]);\n    }\n}",
        options: [
            "1",
            "2",
            "3",
            "Compiler Error"
        ],
        correct: "2"
    },
    {
        id: "14",
        question: "What is the correct way to initialize an array in Java?",
        options: [
            "int[] arr = {1, 2, 3};",
            "arr[] = {1, 2, 3};",
            "int[] arr; arr = {1, 2, 3};",
            "int[] arr = new int[3] {1, 2, 3};"
        ],
        correct: "int[] arr = {1, 2, 3};"
    },
    {
        id: "15",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, \" + \"world!\");\n    }\n}",
        options: [
            "Hello, world!",
            "Hello,",
            "world!",
            "Compiler Error"
        ],
        correct: "Hello, world!"
    },
    {
        id: "16",
        question: "Which Java keyword is used to declare a method?",
        options: [
            "method",
            "func",
            "define",
            "function"
        ],
        correct: "method"
    },
    {
        id: "17",
        question: "What is the correct way to declare a constant variable in Java?",
        options: [
            "final int x = 5;",
            "constant int x = 5;",
            "int final x = 5;",
            "int x = const 5;"
        ],
        correct: "final int x = 5;"
    },
    {
        id: "18",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(5 > 3);\n    }\n}",
        options: [
            "True",
            "False",
            "1",
            "0"
        ],
        correct: "True"
    },
    {
        id: "19",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 20;\n        int ref = x;\n        System.out.println(ref);\n    }\n}",
        options: [
            "10",
            "Reference Error",
            "Compiler Error",
            "Undefined Behavior"
        ],
        correct: "10"
    },
    {
        id: "20",
        question: "Which Java keyword is used to exit from a loop or switch case block?",
        options: [
            "exit",
            "break",
            "end",
            "stop"
        ],
        correct: "break"
    },
    {
        id: "21",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        int y = 2;\n        System.out.println(x % y);\n    }\n}",
        options: [
            "2",
            "2.5",
            "0.5",
            "1"
        ],
        correct: "1"
    },
    {
        id: "22",
        question: "What is the correct syntax to define a method outside the class in Java?",
        options: [
            "void myMethod() {}",
            "void MyClass.myMethod() {}",
            "void myMethod()::MyClass {}",
            "void myMethod() MyClass:: {}"
        ],
        correct: "void myMethod() {}"
    },
    {
        id: "23",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 20;\n        int ptr = x;\n        System.out.println(ptr);\n        ptr = 30;\n        System.out.println(x);\n    }\n}",
        options: [
            "10 30",
            "20 30",
            "10 20",
            "Compiler Error"
        ],
        correct: "10 30"
    },
    {
        id: "24",
        question: "What is the purpose of the 'final' keyword in Java?",
        options: [
            "To specify that the variable can only be assigned once",
            "To specify that the variable cannot be changed after initialization",
            "To specify that a class cannot be subclassed",
            "To specify that a method cannot be overridden"
        ],
        correct: "To specify that the variable cannot be changed after initialization"
    },
    {
        id: "25",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x);\n        x++;\n        System.out.println(x);\n    }\n}",
        options: [
            "5 6",
            "6 5",
            "Compiler Error",
            "Undefined Behavior"
        ],
        correct: "5 6"
    },
    {
        id: "26",
        question: "What is the purpose of the 'sizeof' operator in Java?",
        options: [
            "To determine the size of a data type",
            "To determine the memory address of a variable",
            "To determine the type of a variable",
            "To determine the number of elements in an array"
        ],
        correct: "There is no 'sizeof' operator in Java"
    },
    {
        id: "27",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        String str = \"Hello\";\n        System.out.println(str.charAt(5));\n    }\n}",
        options: [
            "H",
            "e",
            "l",
            "Compiler Error"
        ],
        correct: "StringIndexOutOfBoundsException"
    },
    {
        id: "28",
        question: "What is the correct syntax to access the 'myVar' member variable of an object 'obj'?",
        options: [
            "obj.myVar",
            "obj->myVar",
            "obj::myVar",
            "obj.myVar()"
        ],
        correct: "obj.myVar"
    },
    {
        id: "29",
        question: "What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        int ptr = x;\n        System.out.println(ptr);\n    }\n}",
        options: [
            "10",
            "10 10",
            "Memory Address of x",
            "Compiler Error"
        ],
        correct: "10"
    },
    {
        id: "30",
        question: "What is the purpose of the 'static' keyword in Java?",
        options: [
            "To specify that a variable can only be accessed within a method",
            "To specify that a method cannot be called recursively",
            "To specify that a variable retains its value between method calls",
            "To specify that a variable cannot be modified after initialization"
        ],
        correct: "To specify that a variable retains its value between method calls"
    },
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
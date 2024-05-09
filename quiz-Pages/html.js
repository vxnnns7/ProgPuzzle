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
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Tool Markup Language"
        ],
        correct: "Hyper Text Markup Language"
    },
    {
        id: "2",
        question: "Which HTML tag is used to define an unordered list?",
        options: [
            "ul",
            "ol",
            "li",
            "list"
        ],
        correct: "ul"
    },
    {
        id: "3",
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            'a href="http://www.example.com">link text</a>',
            'a url="http://www.example.com">link text</a>',
            'link src="http://www.example.com">link text</link>',
            'href="http://www.example.com">link text</href>'
        ],
        correct: 'a href="http://www.example.com">link text</a>'
    },
    {
        id: "4",
        question: "Which HTML tag is used to define a table?",
        options: [
            "table",
            "tr",
            "td",
            "th"
        ],
        correct: "table"
    },
    {
        id: "5",
        question: "What is the correct HTML for inserting an image?",
        options: [
            'img src="image.jpg" alt="MyImage"',
            'img href="image.jpg" alt="MyImage"',
            'a src="image.jpg" alt="MyImage"',
            'image src="image.jpg" alt="MyImage"'
        ],
        correct: 'img src="image.jpg" alt="MyImage"'
    },
    {
        id: "6",
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: [
            "title",
            "alt",
            "src",
            "href"
        ],
        correct: "alt"
    },
    {
        id: "7",
        question: "Which HTML tag is used to define bold text?",
        options: [
            "bold",
            "b",
            "strong",
            "em"
        ],
        correct: "b"
    },
    {
        id: "8",
        question: "What is the correct HTML for creating a hyperlink to another webpage?",
        options: [
            'a url="http://www.example.com">link text</a>',
            'a href="http://www.example.com">link text</a>',
            'link src="http://www.example.com">link text</link>',
            'href="http://www.example.com">link text</href>'
        ],
        correct: 'a href="http://www.example.com">link text</a>'
    },
    {
        id: "9",
        question: "Which HTML tag is used to define a footer for a document or section?",
        options: [
            "footer",
            "foot",
            "end",
            "section"
        ],
        correct: "footer"
    },
    {
        id: "10",
        question: "Which HTML element is used to specify a title for the document?",
        options: [
            "title",
            "head",
            "meta",
            "body"
        ],
        correct: "title"
    },
    {
        id: "11",
        question: "What is the correct HTML for creating a checkbox?",
        options: [
            'input type="check"',
            'input type="checkbox"',
            'checkbox',
            'check'
        ],
        correct: 'input type="checkbox"'
    },
    {
        id: "12",
        question: "Which HTML tag is used to define a hyperlink?",
        options: [
            "a",
            "link",
            "href",
            "hyperlink"
        ],
        correct: "a"
    },
    {
        id: "13",
        question: "What is the correct HTML for making a text input field?",
        options: [
            'input type="text"',
            'textfield',
            'textinput type="text"',
            'input type="input"'
        ],
        correct: 'input type="text"'
    },
    {
        id: "14",
        question: "Which character is used to indicate an end tag?",
        options: [
            "*",
            "/",
            "<",
            ">"
        ],
        correct: "/"
    },
    {
        id: "15",
        question: "Which HTML tag is used to define the navigation links in HTML5?",
        options: [
            "nav",
            "navigation",
            "links",
            "menu"
        ],
        correct: "nav"
    },
    {
        id: "16",
        question: "What is the correct HTML for creating a button?",
        options: [
            'btn>Click me</btn',
            'button>Click me</button',
            'input type="button" value="Click me"',
            'input button="Click me"'
        ],
        correct: 'button>Click me</button'
    },
    {
        id: "17",
        question: "What does the aside tag define in HTML5?",
        options: [
            "Defines important text",
            "Defines additional content like sidebars",
            "Defines a block of code",
            "Defines a section that is quoted from another source"
        ],
        correct: "Defines additional content like sidebars"
    },
    {
        id: "18",
        question: "What does the HTML br tag represent?",
        options: [
            "Break",
            "New Line",
            "Paragraph",
            "Line Break"
        ],
        correct: "Line Break"
    },
    {
        id: "19",
        question: "Which of the following elements is used to create an unordered list?",
        options: [
            "list",
            "ul",
            "li",
            "ol"
        ],
        correct: "ul"
    },
    {
        id: "20",
        question: "What is the correct HTML for inserting a background image?",
        options: [
            'background src="background.jpg"',
            'img background="background.jpg"',
            'background>background.jpg</background',
            'body style="background-image:url(background.jpg)"'
        ],
        correct: 'body style="background-image:url(background.jpg)"'
    },
    {
        id: "21",
        question: "What is the correct HTML for playing audio files?",
        options: [
            'sound src="audio.mp3"',
            'audio src="audio.mp3"',
            'mp3 src="audio.mp3"',
            'music src="audio.mp3"'
        ],
        correct: 'audio src="audio.mp3"'
    },
    {
        id: "22",
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            "a",
            "link",
            "href",
            "hyperlink"
        ],
        correct: "a"
    },
    {
        id: "23",
        question: "What is the correct HTML for inserting an image?",
        options: [
            'img src="image.jpg" alt="MyImage"',
            'img href="image.jpg" alt="MyImage"',
            'a src="image.jpg" alt="MyImage"',
            'image src="image.jpg" alt="MyImage"'
        ],
        correct: 'img src="image.jpg" alt="MyImage"'
    },
    {
        id: "24",
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: [
            "title",
            "alt",
            "src",
            "href"
        ],
        correct: "alt"
    },
    {
        id: "25",
        question: "Which HTML tag is used to define bold text?",
        options: [
            "bold",
            "b",
            "strong",
            "em"
        ],
        correct: "b"
    },
    {
        id: "26",
        question: "What is the correct HTML for creating a hyperlink to another webpage?",
        options: [
            'a url="http://www.example.com">link text</a>',
            'a href="http://www.example.com">link text</a>',
            'link src="http://www.example.com">link text</link>',
            'href="http://www.example.com">link text</href>'
        ],
        correct: 'a href="http://www.example.com">link text</a>'
    },
    {
        id: "27",
        question: "Which HTML tag is used to define a footer for a document or section?",
        options: [
            "footer",
            "foot",
            "end",
            "section"
        ],
        correct: "footer"
    },
    {
        id: "28",
        question: "Which HTML element is used to specify a title for the document?",
        options: [
            "title",
            "head",
            "meta",
            "body"
        ],
        correct: "title"
    },
    {
        id: "29",
        question: "What is the correct HTML for creating a checkbox?",
        options: [
            'input type="check"',
            'input type="checkbox"',
            'checkbox',
            'check'
        ],
        correct: 'input type="checkbox"'
    },
    {
        id: "30",
        question: "Which HTML tag is used to define a hyperlink?",
        options: [
            "a",
            "link",
            "href",
            "hyperlink"
        ],
        correct: "a"
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
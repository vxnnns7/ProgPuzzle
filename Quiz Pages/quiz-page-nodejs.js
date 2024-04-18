const nodejsObj = [
    {
        questionId: 1,
        name: 'question1',
        question: 'What is Node.js?',
        answers: {
            a: 'A frontend framework',
            b: 'A server-side JavaScript runtime',
            c: 'A relational database',
            d: 'A programming language',
        },
        correctanswer: 'b'
    },
    {
        questionId: 2,
        name: 'question2',
        question: 'Which event-driven architecture is used by Node.js?',
        answers: {
            a: 'Observer pattern',
            b: 'Pub/Sub pattern',
            c: 'Singleton pattern',
            d: 'Factory pattern',
        },
        correctanswer: 'b'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'What is npm?',
        answers: {
            a: 'Node Package Manager',
            b: 'Node Programming Module',
            c: 'Node Package Module',
            d: 'Node Project Manager',
        },
        correctanswer: 'a'
    },
    {
        questionId: 4,
        name: 'question4',
        question: 'Which built-in module is used to create a web server in Node.js?',
        answers: {
            a: 'http',
            b: 'fs',
            c: 'path',
            d: 'net',
        },
        correctanswer: 'a'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'What is the purpose of package.json in a Node.js application?',
        answers: {
            a: 'To store the application code',
            b: 'To manage project dependencies and configurations',
            c: 'To define routing rules',
            d: 'To handle database connections',
        },
        correctanswer: 'b'
    },
    {
        questionId: 6,
        name: 'question6',
        question: 'What is the purpose of require() function in Node.js?',
        answers: {
            a: 'To define variables',
            b: 'To include external modules',
            c: 'To handle HTTP requests',
            d: 'To create event listeners',
        },
        correctanswer: 'b'
    },
    {
        questionId: 7,
        name: 'question7',
        question: 'What is the purpose of module.exports in Node.js?',
        answers: {
            a: 'To export global variables',
            b: 'To import external modules',
            c: 'To export functions or objects from a module',
            d: 'To define routing rules',
        },
        correctanswer: 'c'
    },
    {
        questionId: 8,
        name: 'question8',
        question: 'Which command is used to install dependencies listed in package.json?',
        answers: {
            a: 'npm install',
            b: 'npm init',
            c: 'npm start',
            d: 'npm run build',
        },
        correctanswer: 'a'
    },
    {
        questionId: 9,
        name: 'question9',
        question: 'What is the purpose of the fs module in Node.js?',
        answers: {
            a: 'To create a web server',
            b: 'To handle file system operations',
            c: 'To perform HTTP requests',
            d: 'To manage database connections',
        },
        correctanswer: 'b'
    },
    {
        questionId: 10,
        name: 'question10',
        question: 'What is the purpose of process.argv in Node.js?',
        answers: {
            a: 'To store command line arguments',
            b: 'To access environment variables',
            c: 'To execute shell commands',
            d: 'To manage child processes',
        },
        correctanswer: 'a'
    },
    {
        questionId: 11,
        name: 'question11',
        question: 'Which method is used to handle asynchronous operations in Node.js?',
        answers: {
            a: 'sync()',
            b: 'await()',
            c: 'async()',
            d: 'callback()',
        },
        correctanswer: 'd'
    },
    {
        questionId: 12,
        name: 'question12',
        question: 'What is the purpose of EventEmitter in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To implement observer pattern for event-driven architecture',
            d: 'To define routing rules',
        },
        correctanswer: 'c'
    },
    {
        questionId: 13,
        name: 'question13',
        question: 'Which tool is used to manage Node.js processes in production?',
        answers: {
            a: 'npm',
            b: 'nodemon',
            c: 'PM2',
            d: 'Webpack',
        },
        correctanswer: 'c'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'What is the purpose of Buffer in Node.js?',
        answers: {
            a: 'To handle streams of data',
            b: 'To store binary data',
            c: 'To manage database connections',
            d: 'To define routing rules',
        },
        correctanswer: 'b'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'Which module is used to handle streams in Node.js?',
        answers: {
            a: 'http',
            b: 'fs',
            c: 'stream',
            d: 'net',
        },
        correctanswer: 'c'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'What is the purpose of util module in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To provide utility functions',
            d: 'To define routing rules',
        },
        correctanswer: 'c'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'Which module is used to handle child processes in Node.js?',
        answers: {
            a: 'http',
            b: 'child_process',
            c: 'process',
            d: 'net',
        },
        correctanswer: 'b'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'What is the purpose of global object in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To provide global variables and functions',
            d: 'To define routing rules',
        },
        correctanswer: 'c'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'Which version of JavaScript is supported by Node.js?',
        answers: {
            a: 'ES5',
            b: 'ES6',
            c: 'ES7',
            d: 'ES8',
        },
        correctanswer: 'b'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'What is the purpose of crypto module in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To provide cryptographic functionality',
            d: 'To define routing rules',
        },
        correctanswer: 'c'
    },
    {
        questionId: 21,
        name: 'question21',
        question: 'What is the purpose of dns module in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To perform DNS lookups',
            d: 'To define routing rules',
        },
        correctanswer: 'c'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'What is the purpose of cluster module in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To manage multiple instances of a Node.js process',
            c: 'To manage database connections',
            d: 'To define routing rules',
        },
        correctanswer: 'b'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'What is the purpose of readline module in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To read input from the command line',
            d: 'To define routing rules',
        },
        correctanswer: 'c'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'What is the purpose of timers module in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To schedule tasks to be executed in the future',
            d: 'To define routing rules',
        },
        correctanswer: 'c'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'Which event is emitted when an uncaught JavaScript exception occurs?',
        answers: {
            a: 'error',
            b: 'exception',
            c: 'uncaughtException',
            d: 'unhandledRejection',
        },
        correctanswer: 'c'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'What is the purpose of os module in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To provide operating system-related utility methods',
            c: 'To manage database connections',
            d: 'To define routing rules',
        },
        correctanswer: 'b'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'What is the purpose of url module in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To parse URL strings',
            d: 'To define routing rules',
        },
        correctanswer: 'c'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'What is the purpose of zlib module in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To provide compression and decompression functionality',
            d: 'To define routing rules',
        },
        correctanswer: 'c'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'Which method is used to exit from a Node.js process?',
        answers: {
            a: 'exit()',
            b: 'terminate()',
            c: 'end()',
            d: 'stop()',
        },
        correctanswer: 'a'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'What is the purpose of util.promisify() in Node.js?',
        answers: {
            a: 'To handle HTTP requests',
            b: 'To convert callback-based functions into Promise-based functions',
            c: 'To manage database connections',
            d: 'To define routing rules',
        },
        correctanswer: 'b'
    },
];



localStorage.setItem('nodejsquestions', JSON.stringify(nodejsObj))
displayData()
function displayData() {
    let getnodejsquestions = JSON.parse(localStorage.getItem('nodejsquestions'))
    console.log(getnodejsquestions);
    str = ''
    getnodejsquestions.map((v) => {
        str += `<div class="container mt-5 p-3" id="quiz">
    <div class="col">
        <h3 id="questionBox">
            ${v.questionId}) ${v.question}
        </h3>
    </div>
    <div class="col box">
        <input name="${v.name}" type="radio" id="${v.name}_a" value="a" required>
        <label for="${v.name}_a" class="mx-2">${v.answers.a}</label>
    </div>
    <div class="col box">
    <input name="${v.name}" type="radio" id="${v.name}_b" value="b" required>
    <label for="${v.name}_b" class="mx-2">${v.answers.b}</label>
    </div>
    <div class="col box">
    <input name="${v.name}" type="radio" id="${v.name}_c" value="c" required>
    <label for="${v.name}_c" class="mx-2">${v.answers.c}</label>
    </div>
    <div class="col box">
    <input name="${v.name}" type="radio" id="${v.name}_d" value="d" required>
    <label for="${v.name}_d" class="mx-2">${v.answers.d}</label>
    </div>
    </div>`
    })
    document.getElementById('main').innerHTML = str
}

function submitQuiz() {
    let userAnswers = {};

    // Use map to create an array of user answers
    const userAnswersArray = nodejsobj.map(question => {
        const selectedAnswer = document.querySelector(`input[name="${question.name}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });

    // Use reduce to calculate the score
    const score = userAnswersArray.reduce((totalScore, userAnswer, index) => {
        const correctAnswer = nodejsobj[index].correctanswer;
        return userAnswer === correctAnswer ? totalScore + 1 : totalScore;
    }, 0);

    document.getElementById('popup').style.display = 'block'
    // Display score
    document.getElementById('finalanswer').textContent = `Your score is: ${score} / 30`;
}

// comment it while you developing it. 

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "hidden") {
      // Close the current tab
      window.close();
    }
  });
const cppLangObj = [
    {
        questionId: 1,
        name: 'question1',
        question: 'What is the correct way to declare a variable in C++?',
        answers: {
            a: 'variableName = value;',
            b: 'var variableName = value;',
            c: 'int variableName = value;',
            d: 'variableName;',
        },
        correctanswer: 'c'
    },
    {
        questionId: 2,
        name: 'question2',
        question: 'Which of the following is NOT a valid data type in C++?',
        answers: {
            a: 'float',
            b: 'string',
            c: 'char',
            d: 'double',
        },
        correctanswer: 'b'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'What is the purpose of the cout object in C++?',
        answers: {
            a: 'To read input from the user',
            b: 'To perform mathematical calculations',
            c: 'To display output to the console',
            d: 'To define custom functions',
        },
        correctanswer: 'c'
    },
    {
        questionId: 4,
        name: 'question4',
        question: 'Which symbol is used for single-line comments in C++?',
        answers: {
            a: '//',
            b: '--',
            c: '/* */',
            d: '##',
        },
        correctanswer: 'a'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'What is the purpose of the cin object in C++?',
        answers: {
            a: 'To print output to the console',
            b: 'To read input from the user',
            c: 'To perform string operations',
            d: 'To define custom functions',
        },
        correctanswer: 'b'
    },
    {
        questionId: 6,
        name: 'question6',
        question: 'Which of the following is the correct way to declare a pointer variable in C++?',
        answers: {
            a: 'int ptr;',
            b: 'ptr int;',
            c: 'pointer int;',
            d: 'int *ptr;',
        },
        correctanswer: 'd'
    },
    {
        questionId: 7,
        name: 'question7',
        question: 'What is the purpose of the sizeof() operator in C++?',
        answers: {
            a: 'To determine the size of a variable or data type',
            b: 'To perform arithmetic operations',
            c: 'To read input from the user',
            d: 'To define custom functions',
        },
        correctanswer: 'a'
    },
    {
        questionId: 8,
        name: 'question8',
        question: 'Which header file is used for input and output operations in C++?',
        answers: {
            a: '<iostream>',
            b: '<stdlib.h>',
            c: '<math.h>',
            d: '<string>',
        },
        correctanswer: 'a'
    },
    {
        questionId: 9,
        name: 'question9',
        question: 'What is the output of the following code snippet?\n\nint x = 5, y = 3;\ncout << x / y;',
        answers: {
            a: '1',
            b: '1.6667',
            c: '1.5',
            d: '1.0',
        },
        correctanswer: 'd'
    },
    {
        questionId: 10,
        name: 'question10',
        question: 'What is the output of the following code snippet?\n\nstring str = "Hello";\ncout << str.length();',
        answers: {
            a: '5',
            b: '6',
            c: '11',
            d: '10',
        },
        correctanswer: 'a'
    },
    {
        questionId: 11,
        name: 'question11',
        question: 'Which of the following statements is true about arrays in C++?',
        answers: {
            a: 'Arrays can hold only elements of the same data type',
            b: 'Arrays can dynamically resize at runtime',
            c: 'Arrays can only store a fixed number of elements',
            d: 'Arrays can be initialized without specifying the size',
        },
        correctanswer: 'a'
    },
    {
        questionId: 12,
        name: 'question12',
        question: 'What is the purpose of the break statement in C++?',
        answers: {
            a: 'To terminate the program execution',
            b: 'To skip the current iteration of a loop',
            c: 'To return a value from a function',
            d: 'To define custom functions',
        },
        correctanswer: 'b'
    },
    {
        questionId: 13,
        name: 'question13',
        question: 'Which of the following is the correct syntax for the switch statement in C++?',
        answers: {
            a: 'switch (expression) { case constant: statements }',
            b: 'switch (expression) { default: statements }',
            c: 'switch (expression) { case constant: statements default: statements }',
            d: 'switch (expression) { case constant: statements; default: statements; }',
        },
        correctanswer: 'a'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'What is the purpose of the continue statement in C++?',
        answers: {
            a: 'To terminate the program execution',
            b: 'To skip the current iteration of a loop and continue with the next iteration',
            c: 'To return a value from a function',
            d: 'To define custom functions',
        },
        correctanswer: 'b'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'What is the output of the following code snippet?\n\nint arr[5];\ncout << arr[0];',
        answers: {
            a: '0',
            b: 'Undefined behavior',
            c: 'Garbage value',
            d: '5',
        },
        correctanswer: 'c'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'What is the purpose of the do-while loop in C++?',
        answers: {
            a: 'To execute a block of code repeatedly as long as a condition is true',
            b: 'To execute a block of code repeatedly until a condition becomes true',
            c: 'To execute a block of code once before checking the condition',
            d: 'To define custom functions',
        },
        correctanswer: 'a'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'What is the purpose of the static keyword in C++?',
        answers: {
            a: 'To define custom functions',
            b: 'To declare variables that are visible only within the function they are defined',
            c: 'To allocate memory dynamically',
            d: 'To perform arithmetic operations',
        },
        correctanswer: 'b'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'Which of the following is true about functions in C++?',
        answers: {
            a: 'Functions can only return a single value',
            b: 'Functions cannot call other functions',
            c: 'Functions can have multiple return statements',
            d: 'Functions cannot have parameters',
        },
        correctanswer: 'c'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'What is the purpose of recursion in C++?',
        answers: {
            a: 'To define custom functions',
            b: 'To execute a block of code repeatedly until a condition becomes true',
            c: 'To call a function from within the same function',
            d: 'To allocate memory dynamically',
        },
        correctanswer: 'c'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'What is the purpose of the void data type in C++?',
        answers: {
            a: 'To specify that a function does not return any value',
            b: 'To declare variables with an unknown data type',
            c: 'To define custom functions',
            d: 'To perform arithmetic operations',
        },
        correctanswer: 'a'
    },
    {
        questionId: 21,
        name: 'question21',
        question: 'What is the output of the following code snippet?\n\nint x = 10;\nint *ptr = &x;\ncout << *ptr;',
        answers: {
            a: '10',
            b: '0',
            c: 'Error',
            d: 'Undefined behavior',
        },
        correctanswer: 'a'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'What is the purpose of the new operator in C++?',
        answers: {
            a: 'To perform arithmetic operations',
            b: 'To allocate memory dynamically',
            c: 'To read input from the user',
            d: 'To define custom functions',
        },
        correctanswer: 'b'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'What is the purpose of the delete operator in C++?',
        answers: {
            a: 'To perform arithmetic operations',
            b: 'To deallocate memory previously allocated by new',
            c: 'To read input from the user',
            d: 'To define custom functions',
        },
        correctanswer: 'b'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'Which of the following is NOT a standard library function in C++?',
        answers: {
            a: 'cin',
            b: 'cout',
            c: 'strlen',
            d: 'input',
        },
        correctanswer: 'd'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'What is the output of the following code snippet?\n\nint x = 5;\nint *ptr = &x;\ncout << ptr;',
        answers: {
            a: '5',
            b: '0',
            c: 'Address of x',
            d: 'Undefined behavior',
        },
        correctanswer: 'c'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'What is the purpose of the typedef keyword in C++?',
        answers: {
            a: 'To perform arithmetic operations',
            b: 'To define custom data types',
            c: 'To read input from the user',
            d: 'To declare variables with an unknown data type',
        },
        correctanswer: 'b'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'What is the output of the following code snippet?\n\nint x = 5;\nint *ptr = &x;\ncout << ptr;',
        answers: {
            a: '5',
            b: '0',
            c: 'Address of x',
            d: 'Undefined behavior',
        },
        correctanswer: 'c'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'What is the purpose of the #include directive in C++?',
        answers: {
            a: 'To perform arithmetic operations',
            b: 'To include the contents of a header file',
            c: 'To read input from the user',
            d: 'To define custom functions',
        },
        correctanswer: 'b'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'Which of the following is true about classes in C++?',
        answers: {
            a: 'Classes cannot contain member functions',
            b: 'Classes cannot contain member variables',
            c: 'Classes cannot be instantiated',
            d: 'Classes can contain member functions and member variables',
        },
        correctanswer: 'd'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'What is the purpose of the const keyword in C++?',
        answers: {
            a: 'To define custom functions',
            b: 'To declare constants',
            c: 'To perform arithmetic operations',
            d: 'To allocate memory dynamically',
        },
        correctanswer: 'b'
    },
];



localStorage.setItem('cppLangquestions', JSON.stringify(cppLangObj))
displayData()
function displayData() {
    let getcppLangquestions = JSON.parse(localStorage.getItem('cppLangquestions'))
    console.log(getcppLangquestions);
    str = ''
    getcppLangquestions.map((v) => {
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
    const userAnswersArray = cppLangobj.map(question => {
        const selectedAnswer = document.querySelector(`input[name="${question.name}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });

    // Use reduce to calculate the score
    const score = userAnswersArray.reduce((totalScore, userAnswer, index) => {
        const correctAnswer = cppLangobj[index].correctanswer;
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
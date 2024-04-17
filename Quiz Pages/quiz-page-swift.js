const swiftQuestions = [
    {
        questionId: 1,
        name: 'question1',
        question: 'What is the keyword used to declare a constant in Swift?',
        answers: {
            a: 'let',
            b: 'var',
            c: 'const',
            d: 'final',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 2,
        name: 'question2',
        question: 'Which of the following is NOT a valid data type in Swift?',
        answers: {
            a: 'Int',
            b: 'String',
            c: 'Double',
            d: 'Float',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'What is the output of the following code snippet?\n\nlet x = 5\nlet y = 2\nprint(x % y)',
        answers: {
            a: '1',
            b: '2',
            c: '2.5',
            d: '3',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 4,
        name: 'question4',
        question: 'What is the purpose of the "guard" statement in Swift?',
        answers: {
            a: 'To declare a variable',
            b: 'To create a loop',
            c: 'To check for nil conditions and exit early',
            d: 'To define a switch case',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'What is the output of the following code snippet?\n\nvar str = "Hello"\nstr[0] = "h"\nprint(str)',
        answers: {
            a: 'hello',
            b: 'Hello',
            c: 'olleH',
            d: 'Error: Cannot assign to subscript: subscript is get-only',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 6,
        name: 'question6',
        question: 'What is the purpose of the "defer" statement in Swift?',
        answers: {
            a: 'To define a block of code that is executed when an error occurs',
            b: 'To delay the execution of a block of code until the end of the current scope',
            c: 'To break out of a loop',
            d: 'To create a closure',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 7,
        name: 'question7',
        question: 'What is the output of the following code snippet?\n\nlet myArray = [1, 2, 3, 4, 5]\nprint(myArray[-1])',
        answers: {
            a: '1',
            b: '5',
            c: '4',
            d: 'Error: Index out of range',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 8,
        name: 'question8',
        question: 'What is the purpose of the "lazy" keyword in Swift?',
        answers: {
            a: 'To delay the initialization of a property until it is accessed',
            b: 'To define a property that cannot be changed after it is set',
            c: 'To define a property that can be accessed without creating an instance of the class',
            d: 'To define a property that is only accessible within the same file',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 9,
        name: 'question9',
        question: 'What is the output of the following code snippet?\n\nlet myArray = [1, 2, 3, 4, 5]\nprint(myArray.count)',
        answers: {
            a: '1',
            b: '5',
            c: '4',
            d: 'Compilation error',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 10,
        name: 'question10',
        question: 'What is the purpose of the "map" function in Swift?',
        answers: {
            a: 'To transform each element of a collection using a provided closure',
            b: 'To filter elements of a collection based on a provided closure',
            c: 'To combine elements of a collection into a single value using a provided closure',
            d: 'To sort elements of a collection in ascending order',
        },
        correctAnswer: 'a'
    },
	{
        questionId: 11,
        name: 'question11',
        question: 'What is the output of the following code snippet?\n\nlet x = 3\nlet y = 4\nlet z = 5\nprint((x < y) ? x : (y < z) ? y : z)',
        answers: {
            a: '3',
            b: '4',
            c: '5',
            d: 'Compilation error',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 12,
        name: 'question12',
        question: 'What is the purpose of the "if let" statement in Swift?',
        answers: {
            a: 'To declare a variable',
            b: 'To check if an optional contains a value and unwrap it',
            c: 'To create a loop',
            d: 'To define a switch case',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 13,
        name: 'question13',
        question: 'What is the output of the following code snippet?\n\nlet myArray = [1, 2, 3, 4, 5]\nprint(myArray.first)',
        answers: {
            a: '1',
            b: '5',
            c: 'Optional(1)',
            d: 'Optional(5)',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'What is the purpose of the "switch" statement in Swift?',
        answers: {
            a: 'To declare a variable',
            b: 'To create a loop',
            c: 'To define a condition',
            d: 'To evaluate multiple conditions',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'What is the output of the following code snippet?\n\nvar str: String? = nil\nprint(str ?? "default")',
        answers: {
            a: 'nil',
            b: 'default',
            c: 'Compilation error',
            d: 'Error: Value of optional type "String?" must be unwrapped',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'What is the purpose of the "for-in" loop in Swift?',
        answers: {
            a: 'To iterate over a sequence, such as ranges, arrays, or dictionaries',
            b: 'To iterate over a fixed range of values',
            c: 'To create an infinite loop',
            d: 'To define a switch case',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'What is the output of the following code snippet?\n\nlet myArray = [1, 2, 3, 4, 5]\nprint(myArray.last)',
        answers: {
            a: '1',
            b: '5',
            c: 'Optional(1)',
            d: 'Optional(5)',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'What is the purpose of the "while" loop in Swift?',
        answers: {
            a: 'To iterate over a sequence, such as ranges, arrays, or dictionaries',
            b: 'To iterate over a fixed range of values',
            c: 'To create an infinite loop',
            d: 'To define a switch case',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'What is the output of the following code snippet?\n\nlet x = 5\nlet y = 2\nprint(x ** y)',
        answers: {
            a: '7',
            b: '10',
            c: '25',
            d: '8',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'What is the purpose of the "case" keyword in Swift?',
        answers: {
            a: 'To declare a variable',
            b: 'To define a condition',
            c: 'To specify the value of a switch case',
            d: 'To iterate over a sequence',
        },
        correctAnswer: 'c'
    },
{
        questionId: 21,
        name: 'question21',
        question: 'What is the purpose of the "throw" keyword in Swift?',
        answers: {
            a: 'To declare a variable',
            b: 'To define a condition',
            c: 'To indicate that an error occurred and throw an error',
            d: 'To iterate over a sequence',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'What is the output of the following code snippet?\n\nlet myArray = [1, 2, 3, 4, 5]\nprint(myArray.isEmpty)',
        answers: {
            a: 'true',
            b: 'false',
            c: 'nil',
            d: 'Compilation error',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'What is the purpose of the "continue" keyword in Swift?',
        answers: {
            a: 'To terminate the program',
            b: 'To skip the current iteration of a loop',
            c: 'To jump to the next iteration of a loop',
            d: 'To indicate the end of a function',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'What is the output of the following code snippet?\n\nvar str: String? = nil\nprint(str?.isEmpty)',
        answers: {
            a: 'true',
            b: 'false',
            c: 'nil',
            d: 'Compilation error',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'What is the purpose of the "switch" statement in Swift?',
        answers: {
            a: 'To declare a variable',
            b: 'To create a loop',
            c: 'To define a condition',
            d: 'To evaluate multiple conditions',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'What is the output of the following code snippet?\n\nlet myString = "Hello"\nprint(myString.reversed())',
        answers: {
            a: '"olleH"',
            b: '"Hello"',
            c: 'olleH',
            d: 'Hello',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'What is the purpose of the "defer" keyword in Swift?',
        answers: {
            a: 'To delay the initialization of a property until it is accessed',
            b: 'To execute a block of code when a function returns',
            c: 'To define a block of code that is executed when an error occurs',
            d: 'To delay the execution of a block of code until the end of the current scope',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'What is the output of the following code snippet?\n\nlet myArray = [1, 2, 3, 4, 5]\nprint(myArray.max())',
        answers: {
            a: '1',
            b: '5',
            c: 'nil',
            d: 'Compilation error',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'What is the purpose of the "try" keyword in Swift?',
        answers: {
            a: 'To declare a variable',
            b: 'To define a condition',
            c: 'To indicate that a function can throw an error and handle it',
            d: 'To iterate over a sequence',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'What is the output of the following code snippet?\n\nlet myArray = [1, 2, 3, 4, 5]\nprint(myArray.min())',
        answers: {
            a: '1',
            b: '5',
            c: 'nil',
            d: 'Compilation error',
        },
        correctAnswer: 'a'
    }

];


localStorage.setItem('swiftquestions', JSON.stringify(swiftQuestions))
displayData()
function displayData() {
    let getswiftquestions = JSON.parse(localStorage.getItem('swiftquestions'))
    console.log(getswiftquestions);
    str = ''
    getswiftquestions.map((v) => {
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
    const userAnswersArray = swiftQuestions.map(question => {
        const selectedAnswer = document.querySelector(`input[name="${question.name}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });

    // Use reduce to calculate the score
    const score = userAnswersArray.reduce((totalScore, userAnswer, index) => {
        const correctAnswer = swiftQuestions[index].correctanswer;
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
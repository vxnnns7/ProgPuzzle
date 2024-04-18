const pythonQuestions = [
    {
        questionId: 1,
        name: 'question1',
        question: 'What is the output of the following code snippet?\n\nx = 5\ny = 2\nprint(x % y)',
        answers: {
            a: '1',
            b: '2',
            c: '2.5',
            d: '3',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 2,
        name: 'question2',
        question: 'Which of the following is the correct way to declare a variable in Python?',
        answers: {
            a: 'variableName = value',
            b: 'var variableName = value',
            c: 'int variableName = value',
            d: 'variableName',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'What is the purpose of the "public" access modifier in Python?',
        answers: {
            a: 'To restrict access to the class',
            b: 'To make the class accessible only within the same package',
            c: 'To make the class accessible from any other class',
            d: 'To make the class abstract',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 4,
        name: 'question4',
        question: 'Which of the following is NOT a valid data type in Python?',
        answers: {
            a: 'Double',
            b: 'String',
            c: 'Char',
            d: 'Float',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'What is the output of the following code snippet?\n\nstr = "Hello World!"\nprint(str[6:])',
        answers: {
            a: 'World!',
            b: 'Hello',
            c: 'World!Hello',
            d: 'World',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 6,
        name: 'question6',
        question: 'What is the purpose of the "private" access modifier in Python?',
        answers: {
            a: 'To restrict access to the class',
            b: 'To make the class accessible only within the same package',
            c: 'To make the class accessible from any other class',
            d: 'To restrict access to the members within the same class',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 7,
        name: 'question7',
        question: 'Which of the following statements is true about Python functions?',
        answers: {
            a: 'Functions in Python must return a value',
            b: 'Python functions can only return one value',
            c: 'Python functions can have default arguments',
            d: 'Python functions cannot accept variable number of arguments',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 8,
        name: 'question8',
        question: 'What is the output of the following code snippet?\n\nstr = "Hello"\nresult = str + " World"\nprint(result)',
        answers: {
            a: 'Hello',
            b: 'Hello World',
            c: 'World',
            d: 'null',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 9,
        name: 'question9',
        question: 'Which keyword is used to prevent method overriding in Python?',
        answers: {
            a: 'override',
            b: 'final',
            c: 'static',
            d: 'private',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 10,
        name: 'question10',
        question: 'What is the output of the following code snippet?\n\narr = [1, 2, 3, 4, 5]\nprint(len(arr))',
        answers: {
            a: '5',
            b: '4',
            c: 'Compilation error',
            d: '0',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 11,
        name: 'question11',
        question: 'What is the output of the following code snippet?\n\ndef my_function(x, y=2):\n    return x * y\n\nprint(my_function(3))',
        answers: {
            a: '6',
            b: '9',
            c: '3',
            d: 'Compilation error',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 12,
        name: 'question12',
        question: 'Which of the following statements is true about Python dictionaries?',
        answers: {
            a: 'Dictionaries in Python are ordered collections',
            b: 'Keys in a dictionary must be of the same data type',
            c: 'Values in a dictionary must be unique',
            d: 'Python dictionaries are mutable',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 13,
        name: 'question13',
        question: 'What is the output of the following code snippet?\n\nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[10:])',
        answers: {
            a: '[]',
            b: 'IndexError: list index out of range',
            c: '[10]',
            d: 'None',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'What is the purpose of the "pass" statement in Python?',
        answers: {
            a: 'To halt the execution of a program',
            b: 'To skip the current iteration of a loop',
            c: 'To indicate that a method has not been implemented yet',
            d: 'To raise an exception',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'What is the output of the following code snippet?\n\nx = 3\ny = 4\nz = 5\nprint(x if x < y else y if y < z else z)',
        answers: {
            a: '3',
            b: '4',
            c: '5',
            d: 'Compilation error',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'What is the purpose of the "break" statement in Python?',
        answers: {
            a: 'To terminate the program',
            b: 'To skip the current iteration of a loop',
            c: 'To jump to the next iteration of a loop',
            d: 'To indicate the end of a function',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'What is the output of the following code snippet?\n\nmy_string = "Hello"\nmy_string[0] = "h"\nprint(my_string)',
        answers: {
            a: 'hello',
            b: 'Hello',
            c: 'olleH',
            d: "TypeError: 'str' object does not support item assignment",
        },
        correctAnswer: 'd'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'What is the purpose of the "continue" statement in Python?',
        answers: {
            a: 'To terminate the program',
            b: 'To skip the current iteration of a loop',
            c: 'To jump to the next iteration of a loop',
            d: 'To indicate the end of a function',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'What is the output of the following code snippet?\n\nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[10])',
        answers: {
            a: '[]',
            b: 'IndexError: list index out of range',
            c: '10',
            d: 'None',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'What is the purpose of the "is" keyword in Python?',
        answers: {
            a: 'To check if two variables refer to the same object',
            b: 'To check if two variables have the same value',
            c: 'To perform bitwise AND operation',
            d: 'To concatenate strings',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 21,
        name: 'question21',
        question: 'What is the output of the following code snippet?\n\nmy_dict = {1: "one", 2: "two", 3: "three"}\nprint(my_dict.get(4, "four"))',
        answers: {
            a: '1',
            b: 'two',
            c: 'three',
            d: 'four',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'What is the purpose of the "assert" statement in Python?',
        answers: {
            a: 'To terminate the program',
            b: 'To skip the current iteration of a loop',
            c: 'To raise an exception if a condition is false',
            d: 'To indicate the end of a function',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'What is the output of the following code snippet?\n\nx = 5\ny = 2\nprint(x ** y)',
        answers: {
            a: '7',
            b: '10',
            c: '25',
            d: '8',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'What is the purpose of the "global" keyword in Python?',
        answers: {
            a: 'To define a global variable',
            b: 'To declare a variable as constant',
            c: 'To specify that a variable cannot be reassigned',
            d: 'To restrict access to the variable',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'What is the output of the following code snippet?\n\nx = 5\ny = 2\nprint(x / y)',
        answers: {
            a: '2',
            b: '2.5',
            c: '3',
            d: '2.0',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'What is the purpose of the "lambda" keyword in Python?',
        answers: {
            a: 'To define a block of code that can be called later',
            b: 'To create an anonymous function',
            c: 'To define a generator function',
            d: 'To declare a variable as constant',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'What is the output of the following code snippet?\n\nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[-1])',
        answers: {
            a: '1',
            b: '5',
            c: '4',
            d: 'Compilation error',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'What is the purpose of the "enumerate" function in Python?',
        answers: {
            a: 'To remove duplicate elements from a list',
            b: 'To generate a sequence of numbers',
            c: 'To iterate over a sequence and keep track of the index',
            d: 'To reverse the elements of a list',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'What is the output of the following code snippet?\n\nx = 5\ny = 2\nprint(x // y)',
        answers: {
            a: '2',
            b: '2.5',
            c: '3',
            d: '2.0',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'What is the output of the following code snippet?\n\nx = 5\ny = 2\nprint(x * y)',
        answers: {
            a: '7',
            b: '10',
            c: '25',
            d: '8',
        },
        correctAnswer: 'c'
    }
];




localStorage.setItem('pythonquestions', JSON.stringify(pythonQuestions))
displayData()
function displayData() {
    let getpythonquestions = JSON.parse(localStorage.getItem('pythonquestions'))
    console.log(getpythonquestions);
    str = ''
    getpythonquestions.map((v) => {
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
    const userAnswersArray = pythonQuestions.map(question => {
        const selectedAnswer = document.querySelector(`input[name="${question.name}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });

    // Use reduce to calculate the score
    const score = userAnswersArray.reduce((totalScore, userAnswer, index) => {
        const correctAnswer = pythonQuestions[index].correctanswer;
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
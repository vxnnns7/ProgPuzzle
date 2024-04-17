const kotlinQuestions = [
    {
        questionId: 1,
        name: 'question1',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val x = 5\n    val y = 2\n    println(x % y)\n}',
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
        question: 'Which of the following is the correct way to declare a variable in Kotlin?',
        answers: {
            a: 'variableName = value',
            b: 'var variableName = value',
            c: 'int variableName = value',
            d: 'variableName',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'What is the purpose of the "public" access modifier in Kotlin?',
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
        question: 'Which of the following is NOT a valid data type in Kotlin?',
        answers: {
            a: 'Double',
            b: 'String',
            c: 'Char',
            d: 'Float*',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str = "Hello World!"\n    println(str.substring(6))\n}',
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
        question: 'What is the purpose of the "private" access modifier in Kotlin?',
        answers: {
            a: 'To restrict access to the class',
            b: 'To make the class accessible only within the same package',
            c: 'To make the class accessible from any other class',
            d: 'To restrict access to the members within the same class',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 7,
        name: 'question7',
        question: 'Which of the following statements is true about Kotlin interfaces?',
        answers: {
            a: 'Interfaces can contain implementations of methods',
            b: 'Classes can implement multiple interfaces with the same method signatures',
            c: 'Interfaces can extend multiple classes',
            d: 'Interfaces can be instantiated using the new keyword',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 8,
        name: 'question8',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str = "Hello"\n    println(str.concat(" World"))\n}',
        answers: {
            a: 'Hello',
            b: 'Hello World',
            c: 'World',
            d: 'null',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 9,
        name: 'question9',
        question: 'Which keyword is used to prevent method overriding in Kotlin?',
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
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val arr = arrayOf(1, 2, 3, 4, 5)\n    println(arr.size)\n}',
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
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    var x = 10\n    if (x > 5) {\n        println("x is greater than 5")\n    } else {\n        println("x is less than or equal to 5")\n    }\n}',
        answers: {
            a: 'x is greater than 5',
            b: 'x is less than 5',
            c: 'x is less than or equal to 5',
            d: 'Compilation error',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 12,
        name: 'question12',
        question: 'Which of the following statements is true about Kotlin packages?',
        answers: {
            a: 'A package can contain only classes',
            b: 'A package can contain both classes and functions',
            c: 'A package can only be defined at the top level of a Kotlin file',
            d: 'A package can have a private visibility modifier',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 13,
        name: 'question13',
        question: 'What is the purpose of the "lateinit" modifier in Kotlin?',
        answers: {
            a: 'To specify that a variable cannot be reassigned',
            b: 'To specify that a variable will be initialized later',
            c: 'To specify that a variable cannot be accessed from outside the class',
            d: 'To specify that a variable cannot be null',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val num: Int? = null\n    println(num ?: 0)\n}',
        answers: {
            a: 'null',
            b: '0',
            c: 'Compilation error',
            d: '1',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'What is the purpose of the "init" block in Kotlin?',
        answers: {
            a: 'To define the main function',
            b: 'To initialize properties of a class',
            c: 'To handle exceptions',
            d: 'To define a companion object',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val list = listOf(1, 2, 3, 4, 5)\n    println(list[5])\n}',
        answers: {
            a: '1',
            b: '5',
            c: 'IndexOutOfBoundsException',
            d: 'Compilation error',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'What is the purpose of the "internal" visibility modifier in Kotlin?',
        answers: {
            a: 'To restrict access to the class',
            b: 'To make the class accessible only within the same package',
            c: 'To make the class accessible from any other class',
            d: 'To make the class accessible from any other class within the same module',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str = "Hello"\n    val result = str.removePrefix("Hel")\n    println(result)\n}',
        answers: {
            a: 'Hello',
            b: 'lo',
            c: 'Hel',
            d: 'Compilation error',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'What is the purpose of the "sealed" modifier in Kotlin?',
        answers: {
            a: 'To specify that a class cannot be subclassed',
            b: 'To specify that a class cannot be instantiated',
            c: 'To restrict access to the class',
            d: 'To specify that a class can have only one instance',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val list = listOf(1, 2, 3, 4, 5)\n    println(list.getOrElse(10) { 0 })\n}',
        answers: {
            a: '0',
            b: '10',
            c: '5',
            d: 'Compilation error',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 21,
        name: 'question21',
        question: 'What is the purpose of the "const" keyword in Kotlin?',
        answers: {
            a: 'To define a constant property',
            b: 'To specify that a property cannot be reassigned',
            c: 'To define a static method',
            d: 'To specify that a class cannot be subclassed',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str = "Hello"\n    val result = str.capitalize()\n    println(result)\n}',
        answers: {
            a: 'hello',
            b: 'HELLO',
            c: 'Hello',
            d: 'Compilation error',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'Which of the following statements is true about Kotlin lambdas?',
        answers: {
            a: 'Kotlin lambdas always return a value',
            b: 'Kotlin lambdas can capture variables from the surrounding scope',
            c: 'Kotlin lambdas must have explicit return types',
            d: 'Kotlin lambdas cannot be passed as arguments to functions',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str = "Hello"\n    val result = str.reversed()\n    println(result)\n}',
        answers: {
            a: 'Hello',
            b: 'olleH',
            c: 'null',
            d: 'Compilation error',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'What is the purpose of the "this" keyword in Kotlin?',
        answers: {
            a: 'To refer to the current instance of a class',
            b: 'To refer to the superclass of a class',
            c: 'To create a new instance of a class',
            d: 'To refer to the class itself',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val x = 5\n    val y = 2\n    println("$x + $y = ${x + y}")\n}',
        answers: {
            a: '5 + 2 = 7',
            b: '7',
            c: 'Compilation error',
            d: '"5 + 2 = 7"',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'What is the purpose of the "tailrec" modifier in Kotlin?',
        answers: {
            a: 'To specify that a function is tail-recursive',
            b: 'To specify that a function can only be called from tail positions',
            c: 'To specify that a function cannot be tail-recursive',
            d: 'To specify that a function cannot have more than one parameter',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str1 = "Hello"\n    val str2 = "Hello"\n    println(str1 === str2)\n}',
        answers: {
            a: 'true',
            b: 'false',
            c: 'Compilation error',
            d: 'null',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'What is the purpose of the "lazy" keyword in Kotlin?',
        answers: {
            a: 'To define a property that is initialized only when accessed for the first time',
            b: 'To define a property that cannot be reassigned',
            c: 'To specify that a property cannot be null',
            d: 'To define a property that can only be accessed from within the class',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val list = mutableListOf(1, 2, 3, 4, 5)\n    list.add(6)\n    println(list.size)\n}',
        answers: {
            a: '6',
            b: '5',
            c: 'Compilation error',
            d: 'null',
        },
        correctAnswer: 'a'
    }
];




localStorage.setItem('kotlinquestions', JSON.stringify(kotlinQuestions))
displayData()
function displayData() {
    let getkotlinquestions = JSON.parse(localStorage.getItem('kotlinquestions'))
    console.log(getkotlinquestions);
    str = ''
    getkotlinquestions.map((v) => {
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
    const userAnswersArray = kotlinQuestions.map(question => {
        const selectedAnswer = document.querySelector(`input[name="${question.name}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });

    // Use reduce to calculate the score
    const score = userAnswersArray.reduce((totalScore, userAnswer, index) => {
        const correctAnswer = kotlinQuestions[index].correctanswer;
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
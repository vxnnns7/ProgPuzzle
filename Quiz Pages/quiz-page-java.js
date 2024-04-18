
const javaQuestions = [
    {
        questionId: 1,
        name: 'question1',
        question: 'What is the output of the following code snippet?\n\nint x = 5;\nint y = 2;\nSystem.out.println(x % y);',
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
        question: 'Which of the following is the correct way to declare a variable in Java?',
        answers: {
            a: 'variableName = value;',
            b: 'var variableName = value;',
            c: 'int variableName = value;',
            d: 'variableName;',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'What is the purpose of the "public" access modifier in Java?',
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
        question: 'Which of the following is NOT a valid data type in Java?',
        answers: {
            a: 'double',
            b: 'String',
            c: 'char',
            d: 'float*',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'What is the output of the following code snippet?\n\nString str = "Hello World!";\nSystem.out.println(str.substring(6));',
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
        question: 'What is the purpose of the "private" access modifier in Java?',
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
        question: 'Which of the following statements is true about Java interfaces?',
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
        question: 'What is the output of the following code snippet?\n\nString str = "Hello";\nstr.concat(" World");\nSystem.out.println(str);',
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
        question: 'Which keyword is used to prevent method overriding in Java?',
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
        question: 'What is the output of the following code snippet?\n\nint arr[] = {1, 2, 3, 4, 5};\nSystem.out.println(arr.length);',
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
        question: 'What is the output of the following code snippet?\n\nint x = 10;\nif(x > 5) {\n  System.out.println("x is greater than 5");\n}\nelse {\n  System.out.println("x is less than or equal to 5");\n}',
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
        question: 'Which of the following statements is true about Java packages?',
        answers: {
            a: 'A package can contain only classes but not interfaces',
            b: 'A package can be renamed anytime without affecting the code',
            c: 'Package names correspond to directory structures',
            d: 'Only one package can be imported in a Java file',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 13,
        name: 'question13',
        question: 'What is the purpose of the "this" keyword in Java?',
        answers: {
            a: 'To refer to the current class object',
            b: 'To refer to the parent class object',
            c: 'To refer to the child class object',
            d: 'To refer to the superclass object',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'Which of the following is a marker interface in Java?',
        answers: {
            a: 'Runnable',
            b: 'Serializable',
            c: 'Cloneable',
            d: 'Comparable',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'What is the purpose of the "super" keyword in Java?',
        answers: {
            a: 'To refer to the current class object',
            b: 'To refer to the parent class object',
            c: 'To refer to the child class object',
            d: 'To refer to the superclass object',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'What is the output of the following code snippet?\n\nint x = 5;\nint result = x > 5 ? 10 : 20;\nSystem.out.println(result);',
        answers: {
            a: '5',
            b: '10',
            c: '20',
            d: 'Compilation error',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'Which of the following is NOT a valid Java identifier?',
        answers: {
            a: 'my_variable',
            b: '$variable',
            c: '123variable',
            d: 'variable_123',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'What is the output of the following code snippet?\n\nint i = 0;\nwhile (i < 5) {\n  System.out.print(i);\n  i++;\n}\nSystem.out.println();',
        answers: {
            a: '01234',
            b: '54321',
            c: '012345',
            d: '543210',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'Which of the following is NOT a valid access modifier in Java?',
        answers: {
            a: 'public',
            b: 'private',
            c: 'protected',
            d: 'default',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'What is the output of the following code snippet?\n\nString str1 = "Hello";\nString str2 = "Hello";\nSystem.out.println(str1 == str2);',
        answers: {
            a: 'true',
            b: 'false',
            c: 'Compilation error',
            d: 'Runtime error',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 21,
        name: 'question21',
        question: 'What is the purpose of the "static" keyword in Java?',
        answers: {
            a: 'To indicate that a variable or method belongs to the class rather than instances of the class',
            b: 'To prevent a class from being subclassed',
            c: 'To prevent a method from being overridden',
            d: 'To make a class immutable',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'Which of the following statements is true about method overloading in Java?',
        answers: {
            a: 'It allows a method to have different return types',
            b: 'It allows a method to have different access modifiers',
            c: 'It allows a method to have the same name but different parameter lists',
            d: 'It allows a method to have different method signatures',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'What is the output of the following code snippet?\n\nint x = 10;\nSystem.out.println(x++);',
        answers: {
            a: '10',
            b: '11',
            c: '12',
            d: '0',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'Which of the following is true about Java garbage collection?',
        answers: {
            a: 'Java garbage collection guarantees that a program will not run out of memory',
            b: 'Java garbage collection runs only when the system is low on memory',
            c: 'Java garbage collection can be forced using System.gc()',
            d: 'Java garbage collection is a manual process',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'What is the purpose of the "final" keyword in Java?',
        answers: {
            a: 'To indicate that a class cannot be extended',
            b: 'To indicate that a method cannot be overridden',
            c: 'To indicate that a variable cannot be changed',
            d: 'All of the above',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'Which of the following is true about Java exceptions?',
        answers: {
            a: 'All exceptions are checked exceptions',
            b: 'All exceptions are unchecked exceptions',
            c: 'Checked exceptions must be caught or declared in the method signature',
            d: 'Unchecked exceptions must be caught or declared in the method signature',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'What is the output of the following code snippet?\n\nint x = 10;\nif (x == 10) {\n  System.out.println("x is 10");\n} else if (x == 20) {\n  System.out.println("x is 20");\n} else {\n  System.out.println("x is neither 10 nor 20");\n}',
        answers: {
            a: 'x is 10',
            b: 'x is 20',
            c: 'x is neither 10 nor 20',
            d: 'Compilation error',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'What is the purpose of the "try-catch" block in Java?',
        answers: {
            a: 'To handle exceptions',
            b: 'To define a method that can throw exceptions',
            c: 'To indicate that a method is a constructor',
            d: 'To define a block of code that runs regardless of exceptions',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'What is the output of the following code snippet?\n\nint[] arr = new int[5];\nSystem.out.println(arr[0]);',
        answers: {
            a: '0',
            b: '1',
            c: 'null',
            d: 'Compilation error',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'Which of the following statements is true about method overriding in Java?',
        answers: {
            a: 'The overridden method must have a different name from the original method',
            b: 'The overridden method must have a different return type from the original method',
            c: 'The overridden method must have the same parameter list as the original method',
            d: 'The'
},
        correctAnswer: 'c'
    }
];



localStorage.setItem('javaquestions', JSON.stringify(javaQuestions))
displayData()
function displayData() {
    let getjavaquestions = JSON.parse(localStorage.getItem('javaquestions'))
    console.log(getjavaquestions);
    str = ''
    getjavaquestions.map((v) => {
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
    const userAnswersArray = javaQuestions.map(question => {
        const selectedAnswer = document.querySelector(`input[name="${question.name}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });

    // Use reduce to calculate the score
    const score = userAnswersArray.reduce((totalScore, userAnswer, index) => {
        const correctAnswer = javaQuestions[index].correctanswer;
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
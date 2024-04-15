const jsobj = [
    {
        questionId: 1,
        name: 'question1',
        question: 'What is JavaScript?',
        answers: {
            a: 'A markup language',
            b: 'A programming language',
            c: 'A database technology',
            d: 'A networking protocol',
        },
        correctanswer: 'b'
    },
    {
        questionId: 2,
        name: 'question2',
        question: 'What symbol is used to denote comments in JavaScript?',
        answers: {
            a: '&#x2F;&#x2F;',
            b: '&#x2F;* *&#x2F;',
            c: '&#x23;',
            d: '&#x3C;!-- --&#x3E;',
        },
        correctanswer: 'a'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'What keyword is used to declare variables in JavaScript?',
        answers: {
            a: 'var',
            b: 'let',
            c: 'const',
            d: 'variable',
        },
        correctanswer: 'a'
    },
    {
        questionId: 4,
        name: 'question4',
        question: 'Which operator is used for equality comparison without type coercion?',
        answers: {
            a: '==',
            b: '===',
            c: '=',
            d: '!=',
        },
        correctanswer: 'b'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'What is the result of 5 + "5" in JavaScript?',
        answers: {
            a: '10',
            b: '55',
            c: 'Error',
            d: 'NaN',
        },
        correctanswer: 'b'
    },
    {
        questionId: 6,
        name: 'question6',
        question: 'Which function is used to parse a string into an integer in JavaScript?',
        answers: {
            a: 'parseInt()',
            b: 'stringToInt()',
            c: 'toInteger()',
            d: 'convertToInt()',
        },
        correctanswer: 'a'
    },
    {
        questionId: 7,
        name: 'question7',
        question: 'What is the purpose of the `typeof` operator in JavaScript?',
        answers: {
            a: 'To check if a variable is defined',
            b: 'To check the data type of a variable',
            c: 'To assign a new type to a variable',
            d: 'To compare two variables',
        },
        correctanswer: 'b'
    },
    {
        questionId: 8,
        name: 'question8',
        question: 'What is an example of a JavaScript framework?',
        answers: {
            a: 'React',
            b: 'JavaFX',
            c: 'Django',
            d: 'Laravel',
        },
        correctanswer: 'a'
    },
    // More questions follow...
    {
        questionId: 9,
        name: 'question9',
        question: 'What is the purpose of the `this` keyword in JavaScript?',
        answers: {
            a: 'To declare a function',
            b: 'To refer to the current object',
            c: 'To iterate over an array',
            d: 'To create a new object',
        },
        correctanswer: 'b'
    },
    {
        questionId: 10,
        name: 'question10',
        question: 'What does the `Array.prototype.map()` method do?',
        answers: {
            a: 'Adds an element to the end of an array',
            b: 'Removes the last element from an array',
            c: 'Calls a function on each element of an array and returns a new array with the results',
            d: 'Finds the index of a specified element in an array',
        },
        correctanswer: 'c'
    },
    {
        questionId: 11,
        name: 'question11',
        question: 'Which method is used to add one or more elements to the end of an array?',
        answers: {
            a: 'push()',
            b: 'pop()',
            c: 'shift()',
            d: 'unshift()',
        },
        correctanswer: 'a'
    },
    {
        questionId: 12,
        name: 'question12',
        question: 'What is the purpose of the `setTimeout()` function in JavaScript?',
        answers: {
            a: 'To execute a function repeatedly at specified intervals',
            b: 'To execute a function after a specified amount of time',
            c: 'To stop the execution of a function',
            d: 'To execute a function immediately',
        },
        correctanswer: 'b'
    },
    {
        questionId: 13,
        name: 'question13',
        question: 'What is the output of the expression `typeof null`?',
        answers: {
            a: '"null"',
            b: '"undefined"',
            c: '"object"',
            d: '"number"',
        },
        correctanswer: 'c'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'What is the purpose of the `Math.random()` function in JavaScript?',
        answers: {
            a: 'To generate a random number between 0 and 1',
            b: 'To round a number to the nearest integer',
            c: 'To return the maximum value of a set of numbers',
            d: 'To return the minimum value of a set of numbers',
        },
        correctanswer: 'a'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'What is the purpose of the `addEventListener()` method in JavaScript?',
        answers: {
            a: 'To remove an event listener from an element',
            b: 'To add an event listener to an element',
            c: 'To create a new event object',
            d: 'To trigger an event on an element',
        },
        correctanswer: 'b'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'What does the `Array.prototype.filter()` method do?',
        answers: {
            a: 'Creates a new array with the results of calling a provided function on every element in the calling array',
            b: 'Returns the first element that satisfies the provided testing function',
            c: 'Creates a new array containing elements that pass the test implemented by the provided function',
            d: 'Returns the index of the first occurrence of a specified value in an array',
        },
        correctanswer: 'c'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'Which method is used to remove the last element from an array and return that element?',
        answers: {
            a: 'pop()',
            b: 'push()',
            c: 'shift()',
            d: 'unshift()',
        },
        correctanswer: 'a'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'What is the purpose of the `Array.prototype.reduce()` method?',
        answers: {
            a: 'Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value',
            b: 'Adds one or more elements to the beginning of an array and returns the new length of the array',
            c: 'Reverses the order of the elements in an array',
            d: 'Joins all elements of an array into a string',
        },
        correctanswer: 'a'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'What is the output of the expression `3 + 2 + "7"` in JavaScript?',
        answers: {
            a: '57',
            b: '12',
            c: '32',
            d: 'Error',
        },
        correctanswer: 'c'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'Which method is used to convert a JavaScript object to a JSON string?',
        answers: {
            a: 'JSON.stringify()',
            b: 'JSON.parse()',
            c: 'Object.toJSON()',
            d: 'Object.toString()',
        },
        correctanswer: 'a'
    },
    {
        questionId: 21,
        name: 'question21',
        question: 'What does the `Array.prototype.slice()` method do?',
        answers: {
            a: 'Removes the first element from an array and returns that element',
            b: 'Removes the last element from an array and returns that element',
            c: 'Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)',
            d: 'Adds new elements to an array and returns the new length of the array',
        },
        correctanswer: 'c'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'Which keyword is used to declare a block scope variable in JavaScript?',
        answers: {
            a: 'var',
            b: 'let',
            c: 'const',
            d: 'block',
        },
        correctanswer: 'b'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'What does the `Array.prototype.every()` method do?',
        answers: {
            a: 'Tests whether at least one element in the array passes the test implemented by the provided function',
            b: 'Tests whether all elements in the array pass the test implemented by the provided function',
            c: 'Returns the value of the first element in the array that satisfies the provided testing function',
            d: 'Returns the index of the first occurrence of a specified value in an array',
        },
        correctanswer: 'b'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'What is the purpose of the `Array.prototype.concat()` method?',
        answers: {
            a: 'Creates a new array with all elements that pass the test implemented by the provided function',
            b: 'Returns a new array comprised of this array joined with other array(s) and/or value(s)',
            c: 'Reverses the order of the elements in an array',
            d: 'Sorts the elements of an array in place and returns the sorted array',
        },
        correctanswer: 'b'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'What is the output of the expression `typeof NaN`?',
        answers: {
            a: '"number"',
            b: '"NaN"',
            c: '"undefined"',
            d: '"string"',
        },
        correctanswer: 'a'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'Which method is used to remove the first element from an array and return that element?',
        answers: {
            a: 'pop()',
            b: 'push()',
            c: 'shift()',
            d: 'unshift()',
        },
        correctanswer: 'c'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'What is the purpose of the `Array.prototype.indexOf()` method?',
        answers: {
            a: 'Adds one or more elements to the end of an array and returns the new length of the array',
            b: 'Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex',
            c: 'Returns the index of the first occurrence of a specified value in an array',
            d: 'Removes the last element from an array and returns that element',
        },
        correctanswer: 'c'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'What is the purpose of the `Array.prototype.join()` method?',
        answers: {
            a: 'Joins all elements of an array into a string',
            b: 'Sorts the elements of an array in place and returns the sorted array',
            c: 'Creates a new array with all elements that pass the test implemented by the provided function',
            d: 'Reverses the order of the elements in an array',
        },
        correctanswer: 'a'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'What is the purpose of the `Object.keys()` method in JavaScript?',
        answers: {
            a: 'Returns an array of a given object\'s property names',
            b: 'Returns the keys of an array element',
            c: 'Returns the keys of a JSON object',
            d: 'Returns the keys of a function',
        },
        correctanswer: 'a'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'What is the output of the expression `typeof undefined`?',
        answers: {
            a: '"undefined"',
            b: '"null"',
            c: '"object"',
            d: '"number"',
        },
        correctanswer: 'a'
    },
];


localStorage.setItem('jsquestions', JSON.stringify(jsobj))
displayData()
function displayData() {
    let getjsquestions = JSON.parse(localStorage.getItem('jsquestions'))
    console.log(getjsquestions);
    str = ''
    getjsquestions.map((v) => {
        str += `<div class="my-2"><div class="text-center">
        <li style="color: #E0E1DD;list-style-type: none;display: inline;margin-right: px;">${v.questionId}. </li>
        <p style="color: #E0E1DD;display: inline;"><u><b>${v.question}</b></u></p>
    </div>
    <div class="d-flex justify-content-around my-3">
    <div>
        <input type="radio" name="${v.name}" id="answers">
        <label for="" style="color: #E0E1DD;">${v.answers.a}</label>
    </div>
    <div>
        <input type="radio" name="${v.name}" id="answers">
        <label for="" style="color: #E0E1DD;">${v.answers.b}</label>
    </div>
    </div>
    <div class="d-flex justify-content-around my-3">
    <div>
        <input type="radio" name="${v.name}" id="answers">
        <label for="" style="color: #E0E1DD;">${v.answers.c}</label>
    </div>
    <div>
        <input type="radio" name="${v.name}" id="answers">
        <label for="" style="color: #E0E1DD;">${v.answers.d}</label>
    </div></div>
    </div>`
    })
    document.getElementById('form').innerHTML = str
}
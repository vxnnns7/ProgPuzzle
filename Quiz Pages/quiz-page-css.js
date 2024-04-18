const cssobj = [
    {
        questionId: 1,
        name: 'question1',
        question: 'What does CSS stand for?',
        answers: {
            a: 'Computer Style Sheets',
            b: 'Creative Style Sheets',
            c: 'Cascading Style Sheets',
            d: 'Colorful Style Sheets',
        },
        correctanswer: 'c'
    },
    {
        questionId: 2,
        name: 'question2',
        question: 'Which HTML tag is used to link an external CSS file?',
        answers: {
            a: '&#x2039 style &#x203A',
            b: '&#x2039 script &#x203A',
            c: '&#x2039 link &#x203A',
            d: '&#x2039 css &#x203A',
        },
        correctanswer: 'c'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        answers: {
            a: 'At the end of the document',
            b: 'In the <body> section',
            c: 'In the <head> section',
            d: 'In the <footer> section',
        },
        correctanswer: 'c'
    },
    {
        questionId: 4,
        name: 'question4',
        question: 'Which CSS property controls the text size?',
        answers: {
            a: 'text-size',
            b: 'font-size',
            c: 'text-style',
            d: 'font-style',
        },
        correctanswer: 'b'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'Which CSS property is used to change the background color of an element?',
        answers: {
            a: 'bgcolor',
            b: 'color',
            c: 'background-color',
            d: 'background',
        },
        correctanswer: 'c'
    },
    {
        questionId: 6,
        name: 'question6',
        question: 'Which property is used to change the font of an element?',
        answers: {
            a: 'font-family',
            b: 'font-style',
            c: 'font-variant',
            d: 'font-color',
        },
        correctanswer: 'a'
    },
    {
        questionId: 7,
        name: 'question7',
        question: 'What is the correct CSS syntax for making all the <p> elements bold?',
        answers: {
            a: '&#x2039 p {text-size: bold;} &#x203A',
            b: '&#x2039 p {font-weight: bold;} &#x203A',
            c: '&#x2039 p {style: bold;} &#x203A',
            d: '&#x2039 p {font-style: bold;} &#x203A',
        },
        correctanswer: 'b'
    },
    {
        questionId: 8,
        name: 'question8',
        question: 'How do you display hyperlinks without an underline?',
        answers: {
            a: 'a {text-decoration:none;}',
            b: 'a {underline:none;}',
            c: 'a {text-decoration:no-underline;}',
            d: 'a {underline:no;}',
        },
        correctanswer: 'a'
    },
    // More questions follow...
    {
        questionId: 9,
        name: 'question9',
        question: 'Which CSS property is used to specify the stack order of an element?',
        answers: {
            a: 'z-index',
            b: 'stacking-order',
            c: 'layer-index',
            d: 'stack-order',
        },
        correctanswer: 'a'
    },
    {
        questionId: 10,
        name: 'question10',
        question: 'What is the correct CSS syntax for making the text of all &#x2039; h1 &#x203A; elements green?',
        answers: {
            a: 'h1 {color: green;}',
            b: 'h1 {text-color: green;}',
            c: 'h1 {font-color: green;}',
            d: 'h1 {text: green;}',
        },
        correctanswer: 'a'
    },
    {
        questionId: 11,
        name: 'question11',
        question: 'Which CSS property is used to make an element float to the right?',
        answers: {
            a: 'float-right',
            b: 'align',
            c: 'float',
            d: 'align-right',
        },
        correctanswer: 'c'
    },
    {
        questionId: 12,
        name: 'question12',
        question: 'What is the correct CSS syntax for making all the <p> elements with class "center" center-aligned?',
        answers: {
            a: 'p.center {text-align: center;}',
            b: '.center {text-align: center;}',
            c: '#center {text-align: center;}',
            d: 'p#center {text-align: center;}',
        },
        correctanswer: 'a'
    },
    {
        questionId: 13,
        name: 'question13',
        question: 'Which CSS property is used to set the opacity of an element?',
        answers: {
            a: 'transparency',
            b: 'opacity',
            c: 'alpha',
            d: 'opacity-level',
        },
        correctanswer: 'b'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'How do you make a text italic in CSS?',
        answers: {
            a: 'text-decoration: italic;',
            b: 'font-style: italic;',
            c: 'italic-style: true;',
            d: 'font-decoration: italic;',
        },
        correctanswer: 'b'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'Which CSS property is used to add shadow to text?',
        answers: {
            a: 'shadow',
            b: 'text-shadow',
            c: 'text-effect',
            d: 'shadow-text',
        },
        correctanswer: 'b'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'What is the default value of the position property?',
        answers: {
            a: 'static',
            b: 'relative',
            c: 'absolute',
            d: 'fixed',
        },
        correctanswer: 'a'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'How do you add a background color for all &#x2039; h1 &#x203A; elements?',
        answers: {
            a: 'h1 {background-color: #FFFFFF;}',
            b: 'h1 {bg-color: #FFFFFF;}',
            c: 'h1 {color: #FFFFFF;}',
            d: 'h1 {bg: #FFFFFF;}',
        },
        correctanswer: 'a'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'How do you make a &#x2039; div &#x203A; element center-aligned?',
        answers: {
            a: 'div {align: center;}',
            b: 'div {text-align: center;}',
            c: 'div {position: center;}',
            d: 'div {margin: auto;}',
        },
        correctanswer: 'd'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'What is the correct CSS syntax for making all the &#x2039; p &#x203A; elements italic?',
        answers: {
            a: 'p {text-style: italic;}',
            b: 'p {font-style: italic;}',
            c: 'p {style: italic;}',
            d: 'p {italic: true;}',
        },
        correctanswer: 'b'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'Which CSS property is used to set the left margin of an element?',
        answers: {
            a: 'padding-left',
            b: 'margin-left',
            c: 'indent-left',
            d: 'spacing-left',
        },
        correctanswer: 'b'
    },
    {
        questionId: 21,
        name: 'question21',
        question: 'How do you make a list that lists its items horizontally instead of vertically?',
        answers: {
            a: 'list-style-type: inline;',
            b: 'list-type: horizontal;',
            c: 'list: inline;',
            d: 'style: list-horizontal;',
        },
        correctanswer: 'a'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'Which CSS property is used to add rounded corners to an element?',
        answers: {
            a: 'border-radius',
            b: 'corner-radius',
            c: 'rounded-corners',
            d: 'corner-style',
        },
        correctanswer: 'a'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'How do you make the text bold in CSS?',
        answers: {
            a: 'text-decoration: bold;',
            b: 'font-weight: bold;',
            c: 'text-style: bold;',
            d: 'font-style: bold;',
        },
        correctanswer: 'b'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'Which CSS property is used to change the color of the bottom border of an element?',
        answers: {
            a: 'border-color-bottom',
            b: 'bottom-border-color',
            c: 'border-bottom-color',
            d: 'border-color',
        },
        correctanswer: 'c'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'How do you make a text blink in CSS?',
        answers: {
            a: 'text-effect: blink;',
            b: 'effect: blink;',
            c: 'text-decoration: blink;',
            d: 'animation: blink;',
        },
        correctanswer: 'c'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'Which CSS property is used to change the spacing between lines of text?',
        answers: {
            a: 'line-height',
            b: 'spacing',
            c: 'text-spacing',
            d: 'line-spacing',
        },
        correctanswer: 'a'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'How do you make a text strikethrough in CSS?',
        answers: {
            a: 'text-decoration: strikethrough;',
            b: 'style: strikethrough;',
            c: 'text-style: strikethrough;',
            d: 'font-style: strikethrough;',
        },
        correctanswer: 'a'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'Which CSS property is used to specify the stack order of an element?',
        answers: {
            a: 'z-index',
            b: 'stacking-order',
            c: 'layer-index',
            d: 'stack-order',
        },
        correctanswer: 'a'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'What is the correct CSS syntax for making the text of all &#x2039; h1 &#x203A; elements green?',
        answers: {
            a: 'h1 {color: green;}',
            b: 'h1 {text-color: green;}',
            c: 'h1 {font-color: green;}',
            d: 'h1 {text: green;}',
        },
        correctanswer: 'a'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'Which CSS property is used to make an element float to the right?',
        answers: {
            a: 'float-right',
            b: 'align',
            c: 'float',
            d: 'align-right',
        },
        correctanswer: 'c'
    },
];



localStorage.setItem('cssquestions', JSON.stringify(cssobj))
displayData()
function displayData() {
    let getcssquestions = JSON.parse(localStorage.getItem('cssquestions'))
    // console.log(getcssquestions);
    str = ''
    getcssquestions.map((v) => {
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
    const userAnswersArray = jsobj.map(question => {
        const selectedAnswer = document.querySelector(`input[name="${question.name}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });

    // Use reduce to calculate the score
    const score = userAnswersArray.reduce((totalScore, userAnswer, index) => {
        const correctAnswer = jsobj[index].correctanswer;
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
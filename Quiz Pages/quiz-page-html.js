const htmlobj = [
    {
        questionId: 1,
        name: 'question1',
        question: 'HTML stands for -',
        answers: {
            a: 'HighText Machine Language',
            b: 'HyperText and links Markup Language',
            c: 'HyperText Markup Language',
            d: 'None of these',
        },
        correctanswer: 'c'
    },
    {
        questionId: 2,
        name: 'question2',
        question: 'The correct sequence of HTML tags for starting a webpage is -',
        answers: {
            a: 'Head, Title, HTML, body',
            b: 'HTML, Body, Title, Head',
            c: 'HTML, Head, Title, Body',
            d: 'HTML, Head, Title, Body',
        },
        correctanswer: 'd'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'Which of the following element is responsible for making the text bold in HTML?',
        answers: {
            a: '&#x2039 pre &#x203A;',
            b: '&#x2039 a &#x203A;',
            c: '&#x2039 b &#x203A;',
            d: '&#x2039 br &#x203A;',
        },
        correctanswer: 'c'
    },
    {
        questionId: 4,
        name: 'question4',
        question: 'Which of the following tag is used for inserting the largest heading in HTML?',
        answers: {
            a: '&#x2039 h3 &#x203A',
            b: '&#x2039 h1 &#x203A',
            c: '&#x2039 h5 &#x203A',
            d: '&#x2039 h6 &#x203A',
        },
        correctanswer: 'b'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'Which of the following tag is used to insert a line-break in HTML?',
        answers: {
            a: '&#x2039 br &#x203A',
            b: '&#x2039 a &#x203A',
            c: '&#x2039 pre &#x203A',
            d: '&#x2039 b &#x203A',
        },
        correctanswer: 'a'
    },
    {
        questionId: 6,
        name: 'question6',
        question: 'How to create an unordered list (a list with the list items in bullets) in HTML?',
        answers: {
            a: '&#x2039 ul &#x203A',
            b: '&#x2039 ol &#x203A',
            c: '&#x2039 li &#x203A',
            d: '&#x2039 i &#x203A',
        },
        correctanswer: 'a'
    },
    {
        questionId: 7,
        name: 'question7',
        question: 'Which character is used to represent the closing of a tag in HTML?',
        answers: {
            a: '&#x5c;',
            b: '&#x21;',
            c: '&#x2f;',
            d: '&#x2e;',
        },
        correctanswer: 'c'
    },
    {
        questionId: 8,
        name: 'question8',
        question: 'How to create a hyperlink in HTML?',
        answers: {
            a: '&#x2039 a href = "www.javatpoint.com" &#x203A javaTpoint.com &#x2039 &#x2f a &#x203A',
            b: '&#x2039 a url = "www.javatpoint.com" javaTpoint.com &#x2f a &#x203A',
            c: '&#x2039 a link = "www.javatpoint.com" &#x203A javaTpoint.com &#x2039 &#x2f a &#x203A',
            d: '&#x2039 a &#x203A www.javatpoint.com &#x2039 javaTpoint.com &#x2f a &#x203A',
        },
        correctanswer: 'a'
    },
    {
        questionId: 9,
        name: 'question9',
        question: 'How to create an ordered list (a list with the list items in numbers) in HTML?',
        answers: {
            a: '&#x2039 ul &#x203A',
            b: '&#x2039 ol &#x203A',
            c: '&#x2039 li &#x203A',
            d: '&#x2039 i &#x203A',
        },
        correctanswer: 'b'
    },
    {
        questionId: 10,
        name: 'question10',
        question: 'Which of the following element is responsible for making the text italic in HTML?',
        answers: {
            a: '&#x2039 i &#x203A',
            b: '&#x2039 italic &#x203A',
            c: '&#x2039 it &#x203A',
            d: '&#x2039 pre &#x203A',
        },
        correctanswer: 'a'
    },
    {
        questionId: 11,
        name: 'question11',
        question: 'How to insert an image in HTML?',
        answers: {
            a: '&#x2039 img href = "jtp.png" &#x2f&#x203A',
            b: '&#x2039 img url = "jtp.png" &#x2f&#x203A',
            c: '&#x2039 img link = "jtp.png" &#x2f&#x203A',
            d: '&#x2039 img src = "jtp.png" &#x2f&#x203A',
        },
        correctanswer: 'd'
    },
    {
        questionId: 12,
        name: 'question12',
        question: 'How to insert an image in HTML?',
        answers: {
            a: '&#x2039 marquee bg color: "red" &#x203A',
            b: '&#x2039 marquee bg-color = "red" &#x203A',
            c: '&#x2039 marquee bgcolor = "red" &#x203A',
            d: '&#x2039 marquee color = "red" &#x203A',
        },
        correctanswer: 'c'
    },
    {
        questionId: 13,
        name: 'question13',
        question: '&#x2039input&#x203A is -',
        answers: {
            a: 'a format tag.',
            b: 'an empty tag.',
            c: 'All of the above',
            d: 'None of the above',
        },
        correctanswer: 'b'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'Which of the following tag is used to make the underlined text?',
        answers: {
            a: '&#x2039i&#x203A',
            b: '&#x2039ul&#x203A',
            c: '&#x2039u&#x203A',
            d: '&#x2039pre&#x203A',
        },
        correctanswer: 'c'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'How to create a checkbox in HTML?',
        answers: {
            a: '&#x2039input type = "checkbox"&#x203A',
            b: '&#x2039input type = "button"&#x203A',
            c: '&#x2039 checkbox &#x203A',
            d: '&#x2039input type = "check"&#x203A',
        },
        correctanswer: 'a'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'Which of the following tag is used to define options in a drop-down selection list?',
        answers: {
            a: '&#x2039select&#x203A',
            b: '&#x2039list&#x203A',
            c: '&#x2039 dropdown &#x203A',
            d: '&#x2039option&#x203A',
        },
        correctanswer: 'd'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'HTML tags are enclosed in-',
        answers: {
            a: '# and #',
            b: '{ and }',
            c: '! and ?',
            d: '&#x2039 and &#x203A',
        },
        correctanswer: 'd'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'Which of the following tag is used to add rows in the table?',
        answers: {
            a: '&#x2039 td &#x203A and &#x2039/td &#x203A',
            b: '&#x2039 th &#x203A and &#x2039/th &#x203A',
            c: '&#x2039 tr &#x203A and &#x2039/tr &#x203A',
            d: 'None of the Above',
        },
        correctanswer: 'c'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'The &#x2039 hr &#x203A tag in HTML is used for -',
        answers: {
            a: 'new line',
            b: 'vertical ruler',
            c: 'new paragrapgh',
            d: 'horizontal ruler',
        },
        correctanswer: 'd'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'Which of the following attribute is used to provide a unique name to an element?',
        answers: {
            a: 'class',
            b: 'id',
            c: 'type',
            d: 'None of the Above',
        },
        correctanswer: 'b'
    },
    {
        questionId: 21,
        name: 'question21',
        question: 'Which of the following HTML tag is used to display the text with scrolling effect?',
        answers: {
            a: '&#x2039 marquee &#x203A',
            b: '&#x2039 scroll &#x203A',
            c: '&#x2039 div &#x203A',
            d: 'None of the Above',
        },
        correctanswer: 'a'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'Which of the following HTML tag is the special formatting tag?',
        answers: {
            a: '&#x2039 p &#x203A',
            b: '&#x2039 b &#x203A',
            c: '&#x2039 pre &#x203A',
            d: 'None of the Above',
        },
        correctanswer: 'c'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'Which of the following is the correct way to send mail in HTML?',
        answers: {
            a: '&#x2039 a href = "mailto: xy@y" &#x203A',
            b: '&#x2039 a href = "xy@y" &#x203A',
            c: '&#x2039 mail xy@y &#x203A',
            d: 'None of the Above',
        },
        correctanswer: 'a'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'Which of the following is the container for &#x2039 tr &#x203A, &#x2039 th &#x203A, and &#x2039 td &#x203A ?',
        answers: {
            a: '&#x2039 data &#x203A',
            b: '&#x2039 table &#x203A',
            c: '&#x2039 group &#x203A',
            d: 'All of the Above',
        },
        correctanswer: 'b'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'How to insert a background image in HTML?',
        answers: {
            a: '&#x2039 body background = "img.png" &#x203A',
            b: '&#x2039 img background = "img.png" &#x203A',
            c: '&#x2039 bg-image = "img.png" &#x203A',
            d: 'None of the Above',
        },
        correctanswer: 'a'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'Which HTML tag is used to define an internal style sheet?',
        answers: {
            a: '&#x2039 style &#x203A',
            b: '&#x2039 css &#x203A',
            c: '&#x2039 stylesheet &#x203A',
            d: '&#x2039 script &#x203A',
        },
        correctanswer: 'a'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'What does HTML mean?',
        answers: {
            a: 'Hyper Text Markup Language',
            b: 'High Text Markup Language',
            c: 'Hyper Tabular Markup Language',
            d: 'Hyperlink Text Markup Language',
        },
        correctanswer: 'a'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'What is the correct HTML for making a text input field?',
        answers: {
            a: '&#x2039 input type="text" &#x203A',
            b: '&#x2039 text &#x203A',
            c: '&#x2039 input type="textfield" &#x203A',
            d: '&#x2039 textbox &#x203A',
        },
        correctanswer: 'a'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'What is the correct HTML for adding a background color?',
        answers: {
            a: '&#x2039 background-color:yellow; &#x203A',
            b: '&#x2039 style="background-color:yellow;" &#x203A',
            c: '&#x2039 bg color="yellow" &#x203A',
            d: '&#x2039 bgcolor="yellow" &#x203A',
        },
        correctanswer: 'b'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'Choose the correct HTML element to define important text',
        answers: {
            a: '&#x2039 important &#x203A',
            b: '&#x2039 strong &#x203A',
            c: '&#x2039 b &#x203A',
            d: '&#x2039 i &#x203A',
        },
        correctanswer: 'b'
    },
]


localStorage.setItem('htmlquestions', JSON.stringify(htmlobj))
displayData()
function displayData() {
    let gethtmlquestions = JSON.parse(localStorage.getItem('htmlquestions'))
    console.log(gethtmlquestions);
    str = ''
    gethtmlquestions.map((v) => {
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
    const userAnswersArray = htmlobj.map(question => {
        const selectedAnswer = document.querySelector(`input[name="${question.name}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });

    // Use reduce to calculate the score
    const score = userAnswersArray.reduce((totalScore, userAnswer, index) => {
        const correctAnswer = htmlobj[index].correctanswer;
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
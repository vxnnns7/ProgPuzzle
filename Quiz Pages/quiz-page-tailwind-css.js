const tailwindCssQuestions = [
    {
        questionId: 1,
        name: 'question1',
        question: 'What does Tailwind CSS primarily focus on?',
        answers: {
            a: 'Using pre-built components',
            b: 'Providing a set of utility classes',
            c: 'Writing custom CSS',
            d: 'Using JavaScript frameworks',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 2,
        name: 'question2',
        question: 'Which of the following best describes the utility-first approach of Tailwind CSS?',
        answers: {
            a: 'It promotes writing custom CSS for each component',
            b: 'It encourages the use of pre-built components',
            c: 'It provides a large number of utility classes for styling',
            d: 'It discourages using any utility classes',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'Which file is commonly used to configure Tailwind CSS?',
        answers: {
            a: 'tailwind.config.js',
            b: 'style.css',
            c: 'index.html',
            d: 'package.json',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 4,
        name: 'question4',
        question: 'What is the purpose of the "container" class in Tailwind CSS?',
        answers: {
            a: 'To create a grid container',
            b: 'To style a container element with predefined max-width',
            c: 'To create a flex container',
            d: 'To style a container element with predefined padding',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'Which of the following utility classes is used to set the font size in Tailwind CSS?',
        answers: {
            a: 'text-size',
            b: 'font-size',
            c: 'text-font',
            d: 'font-style',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 6,
        name: 'question6',
        question: 'What is the purpose of the "flex" utility class in Tailwind CSS?',
        answers: {
            a: 'To set the font style',
            b: 'To create a flex container',
            c: 'To align text',
            d: 'To set the text color',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 7,
        name: 'question7',
        question: 'Which utility class is used to apply padding to an element in Tailwind CSS?',
        answers: {
            a: 'padding',
            b: 'p',
            c: 'pad',
            d: 'pad-x',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 8,
        name: 'question8',
        question: 'What is the purpose of the "hover" variant in Tailwind CSS?',
        answers: {
            a: 'To apply styles on focus',
            b: 'To apply styles on hover',
            c: 'To apply styles on active state',
            d: 'To apply styles on disabled elements',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 9,
        name: 'question9',
        question: 'Which of the following is a valid Tailwind CSS color class for background color?',
        answers: {
            a: 'bg-color-blue',
            b: 'bg-blue',
            c: 'background-blue',
            d: 'color-blue',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 10,
        name: 'question10',
        question: 'What is the purpose of the "text-center" class in Tailwind CSS?',
        answers: {
            a: 'To set the text color to white',
            b: 'To align text to the center',
            c: 'To set the font size to large',
            d: 'To apply italic style to text',
        },
        correctAnswer: 'b'
    },
{
        questionId: 11,
        name: 'question11',
        question: 'Which of the following utility classes is used to set the width of an element in Tailwind CSS?',
        answers: {
            a: 'width',
            b: 'w',
            c: 'width-size',
            d: 'width-set',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 12,
        name: 'question12',
        question: 'What is the purpose of the "border" utility class in Tailwind CSS?',
        answers: {
            a: 'To apply a border to an element',
            b: 'To set the background color of an element',
            c: 'To adjust the spacing between elements',
            d: 'To set the font size of an element',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 13,
        name: 'question13',
        question: 'Which utility class is used to adjust the margin on all sides of an element in Tailwind CSS?',
        answers: {
            a: 'margin',
            b: 'm',
            c: 'space',
            d: 'spacing',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'What is the purpose of the "z-index" utility class in Tailwind CSS?',
        answers: {
            a: 'To set the index of an element',
            b: 'To apply styles on hover',
            c: 'To adjust the stacking order of an element',
            d: 'To apply styles on focus',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'Which of the following utility classes is used to set the opacity of an element in Tailwind CSS?',
        answers: {
            a: 'opacity',
            b: 'op',
            c: 'o',
            d: 'transparency',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'What is the purpose of the "flex-grow" utility class in Tailwind CSS?',
        answers: {
            a: 'To set the font size of an element',
            b: 'To control the maximum width of an element',
            c: 'To adjust the spacing between elements',
            d: 'To control the flexibility of a flex item',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'Which utility class is used to adjust the padding on the top and bottom of an element in Tailwind CSS?',
        answers: {
            a: 'py',
            b: 'p-y',
            c: 'padding-y',
            d: 'pad-y',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'What is the purpose of the "shadow" utility class in Tailwind CSS?',
        answers: {
            a: 'To apply a shadow to an element',
            b: 'To set the font size of an element',
            c: 'To adjust the spacing between elements',
            d: 'To set the background color of an element',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'Which utility class is used to apply a border radius to an element in Tailwind CSS?',
        answers: {
            a: 'border-radius',
            b: 'radius',
            c: 'r',
            d: 'border-r',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'What is the purpose of the "transform" utility class in Tailwind CSS?',
        answers: {
            a: 'To adjust the spacing between elements',
            b: 'To set the font size of an element',
            c: 'To apply transformation effects like rotation, scaling, etc., to an element',
            d: 'To set the background color of an element',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 21,
        name: 'question21',
        question: 'Which utility class is used to apply a gradient background to an element in Tailwind CSS?',
        answers: {
            a: 'gradient',
            b: 'bg-gradient',
            c: 'bg-gradient-to',
            d: 'bg-gradient-from-to',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'What is the purpose of the "space-x" utility class in Tailwind CSS?',
        answers: {
            a: 'To apply space between the border and content of an element',
            b: 'To apply space between flex items horizontally',
            c: 'To set the font size of an element',
            d: 'To control the maximum width of an element',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'Which utility class is used to adjust the opacity of an element in Tailwind CSS?',
        answers: {
            a: 'opacity',
            b: 'op',
            c: 'o',
            d: 'transparency',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'What is the purpose of the "divide-x" utility class in Tailwind CSS?',
        answers: {
            a: 'To apply a border between flex items horizontally',
            b: 'To apply space between flex items horizontally',
            c: 'To set the font size of an element',
            d: 'To apply space between the border and content of an element',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'Which of the following utility classes is used to apply a transition effect to an element in Tailwind CSS?',
        answers: {
            a: 'transition',
            b: 'trans',
            c: 't',
            d: 'animate',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'What is the purpose of the "truncate" utility class in Tailwind CSS?',
        answers: {
            a: 'To apply space between flex items horizontally',
            b: 'To set the font size of an element',
            c: 'To truncate text that overflows its container',
            d: 'To apply a border between flex items horizontally',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'Which utility class is used to set the position of an element in Tailwind CSS?',
        answers: {
            a: 'position',
            b: 'pos',
            c: 'p',
            d: 'absolute',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'What is the purpose of the "ring" utility class in Tailwind CSS?',
        answers: {
            a: 'To apply space between flex items horizontally',
            b: 'To set the font size of an element',
            c: 'To create a ring around an element for focus or hover states',
            d: 'To apply a border between flex items horizontally',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'Which of the following utility classes is used to set the text color in Tailwind CSS?',
        answers: {
            a: 'text-color',
            b: 'text',
            c: 'color',
            d: 'text-color',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'What is the purpose of the "from" and "to" keywords in the "bg-gradient-to" utility class in Tailwind CSS?',
        answers: {
            a: 'To set the starting and ending colors of the gradient',
            b: 'To specify the direction of the gradient',
            c: 'To define the shape of the gradient',
            d: 'To set the font size of an element',
        },
        correctAnswer: 'a'
    }
];






localStorage.setItem('tailwindCssquestions', JSON.stringify(tailwindCssQuestions))
displayData()
function displayData() {
    let gettailwindCssquestions = JSON.parse(localStorage.getItem('tailwindCssquestions'))
    console.log(gettailwindCssquestions);
    str = ''
    gettailwindCssquestions.map((v) => {
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
    const userAnswersArray = tailwindCssQuestions.map(question => {
        const selectedAnswer = document.querySelector(`input[name="${question.name}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });

    // Use reduce to calculate the score
    const score = userAnswersArray.reduce((totalScore, userAnswer, index) => {
        const correctAnswer = tailwindCssQuestions[index].correctanswer;
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
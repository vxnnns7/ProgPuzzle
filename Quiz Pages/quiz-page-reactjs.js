const reactjsObj = [
    {
        questionId: 1,
        name: 'question1',
        question: 'What does JSX stand for?',
        answers: {
            a: 'JavaScript XML',
            b: 'JavaScript Extensible',
            c: 'Java Standard Extension',
            d: 'JavaScript Extension',
        },
        correctanswer: 'a'
    },
    {
        questionId: 2,
        name: 'question2',
        question: 'Which method is used to change the state in React?',
        answers: {
            a: 'setState()',
            b: 'modifyState()',
            c: 'changeState()',
            d: 'stateChange()',
        },
        correctanswer: 'a'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'In React, props are ____________',
        answers: {
            a: 'mutable',
            b: 'immutable',
            c: 'constant',
            d: 'dynamic',
        },
        correctanswer: 'b'
    },
    {
        questionId: 4,
        name: 'question4',
        question: 'What is React?',
        answers: {
            a: 'A JavaScript library for building user interfaces',
            b: 'A programming language',
            c: 'A database management system',
            d: 'An operating system',
        },
        correctanswer: 'a'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'Which lifecycle method is called after the component is rendered for the first time?',
        answers: {
            a: 'componentWillMount()',
            b: 'componentDidMount()',
            c: 'componentDidUpdate()',
            d: 'componentWillUnmount()',
        },
        correctanswer: 'b'
    },
    {
        questionId: 6,
        name: 'question6',
        question: 'Which method is used to fetch data in React?',
        answers: {
            a: 'fetchData()',
            b: 'retrieveData()',
            c: 'get()',
            d: 'componentDidMount()',
        },
        correctanswer: 'd'
    },
    {
        questionId: 7,
        name: 'question7',
        question: 'What is the purpose of componentDidMount() method in React?',
        answers: {
            a: 'To update the component',
            b: 'To remove the component',
            c: 'To initialize state',
            d: 'To perform actions after the component is mounted',
        },
        correctanswer: 'd'
    },
    {
        questionId: 8,
        name: 'question8',
        question: 'What is a state in React?',
        answers: {
            a: 'An external data source',
            b: 'A reserved keyword',
            c: 'An object that stores component-specific data',
            d: 'A method to access props',
        },
        correctanswer: 'c'
    },
    {
        questionId: 9,
        name: 'question9',
        question: 'What is the purpose of setState() method in React?',
        answers: {
            a: 'To update the DOM directly',
            b: 'To change the component state and re-render the component',
            c: 'To fetch data from an API',
            d: 'To define initial state',
        },
        correctanswer: 'b'
    },
    {
        questionId: 10,
        name: 'question10',
        question: 'What is the virtual DOM in React?',
        answers: {
            a: 'A lightweight version of the DOM',
            b: 'A DOM tree that is not rendered',
            c: 'A representation of the DOM in memory',
            d: 'A backup of the DOM',
        },
        correctanswer: 'c'
    },
    {
        questionId: 11,
        name: 'question11',
        question: 'What is a prop in React?',
        answers: {
            a: 'A reserved keyword',
            b: 'A component method',
            c: 'An object passed from parent component to child component',
            d: 'A method to update state',
        },
        correctanswer: 'c'
    },
    {
        questionId: 12,
        name: 'question12',
        question: 'What is the purpose of keys in React lists?',
        answers: {
            a: 'To uniquely identify list items',
            b: 'To style list items',
            c: 'To reorder list items',
            d: 'To apply animations to list items',
        },
        correctanswer: 'a'
    },
    {
        questionId: 13,
        name: 'question13',
        question: 'What is the purpose of constructor() in React?',
        answers: {
            a: 'To initialize state',
            b: 'To render the component',
            c: 'To define props',
            d: 'To fetch data',
        },
        correctanswer: 'a'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'What is the purpose of render() method in React?',
        answers: {
            a: 'To initialize state',
            b: 'To update the component',
            c: 'To return JSX and render the component',
            d: 'To define props',
        },
        correctanswer: 'c'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'Which method is called after the component props or state changes?',
        answers: {
            a: 'componentDidUpdate()',
            b: 'componentWillReceiveProps()',
            c: 'shouldComponentUpdate()',
            d: 'componentWillUpdate()',
        },
        correctanswer: 'a'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'What is the purpose of shouldComponentUpdate() method in React?',
        answers: {
            a: 'To initialize state',
            b: 'To render the component',
            c: 'To check if a component should re-render',
            d: 'To fetch data',
        },
        correctanswer: 'c'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'What is the purpose of componentWillUnmount() method in React?',
        answers: {
            a: 'To update the component',
            b: 'To remove the component from the DOM',
            c: 'To initialize state',
            d: 'To define props',
        },
        correctanswer: 'b'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'What is the purpose of dangerouslySetInnerHTML in React?',
        answers: {
            a: 'To set the HTML content of a component',
            b: 'To remove HTML tags from a component',
            c: 'To create a new component',
            d: 'To prevent XSS attacks',
        },
        correctanswer: 'a'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'Which method is used to update the component state based on the previous state?',
        answers: {
            a: 'updateState()',
            b: 'setState()',
            c: 'modifyState()',
            d: 'changeState()',
        },
        correctanswer: 'b'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'What is the purpose of refs in React?',
        answers: {
            a: 'To reference external libraries',
            b: 'To access DOM nodes or React elements',
            c: 'To define props',
            d: 'To update the component',
        },
        correctanswer: 'b'
    },
    {
        questionId: 21,
        name: 'question21',
        question: 'What is the purpose of defaultProps in React?',
        answers: {
            a: 'To set default properties for a component',
            b: 'To define props',
            c: 'To initialize state',
            d: 'To render the component',
        },
        correctanswer: 'a'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'Which method is used to handle events in React?',
        answers: {
            a: 'handleEvent()',
            b: 'eventHandler()',
            c: 'onClick()',
            d: 'addEventListener()',
        },
        correctanswer: 'c'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'What is the purpose of event.preventDefault() in React?',
        answers: {
            a: 'To stop event propagation',
            b: 'To cancel the default action of an event',
            c: 'To trigger an event',
            d: 'To prevent memory leaks',
        },
        correctanswer: 'b'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'What is the purpose of PropTypes in React?',
        answers: {
            a: 'To define types for component props',
            b: 'To handle errors in React components',
            c: 'To define default props for components',
            d: 'To define types for component state',
        },
        correctanswer: 'a'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'What is the purpose of keys in React lists?',
        answers: {
            a: 'To uniquely identify list items',
            b: 'To style list items',
            c: 'To reorder list items',
            d: 'To apply animations to list items',
        },
        correctanswer: 'a'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'What is the purpose of fragment in React?',
        answers: {
            a: 'To create a new component',
            b: 'To group multiple children without adding extra nodes to the DOM',
            c: 'To style components',
            d: 'To define props',
        },
        correctanswer: 'b'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'What is the purpose of setState() callback function in React?',
        answers: {
            a: 'To initialize state',
            b: 'To update the DOM directly',
            c: 'To perform actions after state has been updated',
            d: 'To define props',
        },
        correctanswer: 'c'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'What is the purpose of React.memo() in React?',
        answers: {
            a: 'To memoize component rendering',
            b: 'To define props',
            c: 'To initialize state',
            d: 'To create a higher-order component',
        },
        correctanswer: 'a'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'What is the purpose of useContext() hook in React?',
        answers: {
            a: 'To define props',
            b: 'To manage component state',
            c: 'To access context values without nesting',
            d: 'To handle events',
        },
        correctanswer: 'c'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'What is the purpose of useCallback() hook in React?',
        answers: {
            a: 'To memoize functions',
            b: 'To define props',
            c: 'To manage component state',
            d: 'To handle events',
        },
        correctanswer: 'a'
    },
];



localStorage.setItem('reactjsquestions', JSON.stringify(reactjsObj))
displayData()
function displayData() {
    let getreactjsquestions = JSON.parse(localStorage.getItem('reactjsquestions'))
    console.log(getreactjsquestions);
    str = ''
    getreactjsquestions.map((v) => {
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
    const userAnswersArray = reactjsobj.map(question => {
        const selectedAnswer = document.querySelector(`input[name="${question.name}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });

    // Use reduce to calculate the score
    const score = userAnswersArray.reduce((totalScore, userAnswer, index) => {
        const correctAnswer = reactjsobj[index].correctanswer;
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
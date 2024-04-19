const mysqlQuestions = [
    {
        questionId: 1,
        name: 'question1',
        question: 'Which keyword is used to retrieve data from a MySQL database?',
        answers: {
            a: 'GET',
            b: 'FETCH',
            c: 'SELECT',
            d: 'RETRIEVE',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 2,
        name: 'question2',
        question: 'Which statement is used to insert a new row in a MySQL table?',
        answers: {
            a: 'ADD',
            b: 'INSERT INTO',
            c: 'CREATE',
            d: 'UPDATE',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 3,
        name: 'question3',
        question: 'Which of the following data types would you use for storing a date and time value in MySQL?',
        answers: {
            a: 'VARCHAR',
            b: 'INT',
            c: 'DATE',
            d: 'BOOLEAN',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 4,
        name: 'question4',
        question: 'What is the purpose of the WHERE clause in a MySQL query?',
        answers: {
            a: 'To specify the columns to be retrieved',
            b: 'To filter rows based on a specified condition',
            c: 'To order the result set',
            d: 'To join multiple tables',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 5,
        name: 'question5',
        question: 'Which keyword is used to update data in a MySQL table?',
        answers: {
            a: 'MODIFY',
            b: 'CHANGE',
            c: 'UPDATE',
            d: 'ALTER',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 6,
        name: 'question6',
        question: 'Which of the following functions is used to return the number of rows in a MySQL table?',
        answers: {
            a: 'COUNT()',
            b: 'SUM()',
            c: 'AVG()',
            d: 'MAX()',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 7,
        name: 'question7',
        question: 'Which SQL keyword is used to retrieve unique rows from a SELECT query?',
        answers: {
            a: 'UNIQUE',
            b: 'DIFFERENT',
            c: 'DISTINCT',
            d: 'UNION',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 8,
        name: 'question8',
        question: 'Which of the following constraints is used to ensure that a column has a unique value in a MySQL table?',
        answers: {
            a: 'PRIMARY KEY',
            b: 'UNIQUE',
            c: 'FOREIGN KEY',
            d: 'CHECK',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 9,
        name: 'question9',
        question: 'Which SQL command is used to remove a table from a MySQL database?',
        answers: {
            a: 'DELETE',
            b: 'DROP TABLE',
            c: 'REMOVE TABLE',
            d: 'TRUNCATE TABLE',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 10,
        name: 'question10',
        question: 'What is the purpose of the ORDER BY clause in a MySQL query?',
        answers: {
            a: 'To specify the columns to be retrieved',
            b: 'To filter rows based on a specified condition',
            c: 'To order the result set',
            d: 'To join multiple tables',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 11,
        name: 'question11',
        question: 'Which SQL keyword is used to sort the result set in descending order?',
        answers: {
            a: 'ASC',
            b: 'SORT DESC',
            c: 'DESC',
            d: 'ORDER DESC',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 12,
        name: 'question12',
        question: 'What is the purpose of the GROUP BY clause in a MySQL query?',
        answers: {
            a: 'To specify the columns to be retrieved',
            b: 'To filter rows based on a specified condition',
            c: 'To group rows that have the same values into summary rows',
            d: 'To join multiple tables',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 13,
        name: 'question13',
        question: 'Which SQL command is used to change the data in a MySQL table?',
        answers: {
            a: 'MODIFY',
            b: 'ALTER TABLE',
            c: 'CHANGE TABLE',
            d: 'UPDATE',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 14,
        name: 'question14',
        question: 'Which SQL JOIN clause is used to return all rows from both tables where there is a match in the join condition?',
        answers: {
            a: 'LEFT JOIN',
            b: 'RIGHT JOIN',
            c: 'FULL JOIN',
            d: 'INNER JOIN',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 15,
        name: 'question15',
        question: 'What is the purpose of the HAVING clause in a MySQL query?',
        answers: {
            a: 'To specify the columns to be retrieved',
            b: 'To filter rows based on a specified condition',
            c: 'To order the result set',
            d: 'To filter groups based on a specified condition',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 16,
        name: 'question16',
        question: 'Which SQL function is used to return the current date and time in MySQL?',
        answers: {
            a: 'NOW()',
            b: 'CURRENT_TIMESTAMP()',
            c: 'GETDATE()',
            d: 'DATE()',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 17,
        name: 'question17',
        question: 'What does the MySQL function COUNT(*) do?',
        answers: {
            a: 'Counts the number of distinct values in a column',
            b: 'Counts the number of NULL values in a column',
            c: 'Counts the number of rows in a table',
            d: 'Counts the number of non-NULL values in a column',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 18,
        name: 'question18',
        question: 'Which SQL command is used to add a new column to a MySQL table?',
        answers: {
            a: 'ADD COLUMN',
            b: 'ALTER COLUMN',
            c: 'INSERT COLUMN',
            d: 'CREATE COLUMN',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 19,
        name: 'question19',
        question: 'What is the purpose of the LIMIT clause in a MySQL query?',
        answers: {
            a: 'To limit the number of columns to be retrieved',
            b: 'To filter rows based on a specified condition',
            c: 'To order the result set',
            d: 'To limit the number of rows to be retrieved',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 20,
        name: 'question20',
        question: 'Which SQL command is used to make sure that changes made to the schema are permanently saved?',
        answers: {
            a: 'COMMIT',
            b: 'SAVE',
            c: 'PERSIST',
            d: 'PERSISTENT',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 21,
        name: 'question21',
        question: 'What does the MySQL function AVG() do?',
        answers: {
            a: 'Returns the average value of a numeric column',
            b: 'Returns the minimum value of a column',
            c: 'Returns the maximum value of a column',
            d: 'Counts the number of rows in a table',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 22,
        name: 'question22',
        question: 'Which SQL command is used to remove a row from a MySQL table based on a condition?',
        answers: {
            a: 'DELETE',
            b: 'REMOVE',
            c: 'ERASE',
            d: 'CLEAR',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 23,
        name: 'question23',
        question: 'Which SQL command is used to create a new MySQL database?',
        answers: {
            a: 'CREATE',
            b: 'CREATE DATABASE',
            c: 'NEW DATABASE',
            d: 'MAKE DATABASE',
        },
        correctAnswer: 'b'
    },
    {
        questionId: 24,
        name: 'question24',
        question: 'What is the purpose of the TRUNCATE TABLE command in MySQL?',
        answers: {
            a: 'To remove all rows from a table',
            b: 'To remove a specific row from a table',
            c: 'To remove a column from a table',
            d: 'To modify the structure of a table',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 25,
        name: 'question25',
        question: 'Which SQL function is used to concatenate two or more strings in MySQL?',
        answers: {
            a: 'CONCAT()',
            b: 'MERGE()',
            c: 'JOIN()',
            d: 'STRING()',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 26,
        name: 'question26',
        question: 'Which of the following statements is used to create a new table in MySQL?',
        answers: {
            a: 'CREATE TABLE',
            b: 'NEW TABLE',
            c: 'ADD TABLE',
            d: 'MAKE TABLE',
        },
        correctAnswer: 'a'
    },
    {
        questionId: 27,
        name: 'question27',
        question: 'Which SQL command is used to grant privileges to a MySQL user?',
        answers: {
            a: 'GRANT PRIVILEGES',
            b: 'GIVE PRIVILEGES',
            c: 'GRANT',
            d: 'PERMIT',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 28,
        name: 'question28',
        question: 'What does the MySQL function MAX() do?',
        answers: {
            a: 'Returns the average value of a numeric column',
            b: 'Returns the minimum value of a column',
            c: 'Returns the maximum value of a column',
            d: 'Counts the number of rows in a table',
        },
        correctAnswer: 'c'
    },
    {
        questionId: 29,
        name: 'question29',
        question: 'Which SQL command is used to revoke privileges from a MySQL user?',
        answers: {
            a: 'REVOKE PRIVILEGES',
            b: 'REMOVE PRIVILEGES',
            c: 'DENY',
            d: 'REVOKE',
        },
        correctAnswer: 'd'
    },
    {
        questionId: 30,
        name: 'question30',
        question: 'What is the purpose of the MySQL function LOWER()?',
        answers: {
            a: 'Converts a string to lowercase',
            b: 'Converts a string to uppercase',
            c: 'Returns the length of a string',
            d: 'Returns the first character of a string',
        },
        correctAnswer: 'a'
    }
];




localStorage.setItem('mysqlquestions', JSON.stringify(mysqlQuestions))
displayData()
function displayData() {
    let getmysqlquestions = JSON.parse(localStorage.getItem('mysqlquestions'))
    // console.log(getcssquestions);
    str = ''
    getmysqlquestions.map((v) => {
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
    const userAnswersArray = mysqlQuestions.map(question => {
        const selectedAnswer = document.querySelector(`input[name="${question.name}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });

    // Use reduce to calculate the score
    const score = userAnswersArray.reduce((totalScore, userAnswer, index) => {
        const correctAnswer = mysqlQuestions[index].correctanswer;
        return userAnswer === correctAnswer ? totalScore + 1 : totalScore;
    }, 0);

    document.getElementById('popup').style.display = 'block'
    // Display score
    document.getElementById('finalanswer').textContent = `Your score is: ${score} / 30`;
}

// comment it while you developing it. 

document.addEventListener("visibilitychange", function () {
    if (!document.visibilityState === "hidden") {
        
        // Close the current tab
        window.close();
    }
});
const objofLanguages = [{
    img: './images/html 1.png',
    title: 'HTML',
    description: 'HTML (Hypertext Markup Language) is the standard markup language for creating web pages and applications, defining the structure and content of web documents.',
    link: 'redirectToHTMLPage()'

},
{
    img: './images/css 1.png',
    title: 'CSS',
    description: 'CSS (Cascading Style Sheets) is a styling language used to control the presentation and layout of HTML documents, enabling precise customization of elements such as colors, fonts, and spacing.',
    link: 'redirectToCSSPage()'
},
{
    img: './images/mysql 1.png',
    title: 'MY SQL',
    description: ' MySQL is a popular open-source relational database management system (RDBMS) known for its reliability, scalability, and performance, widely used for managing structured data in various applications.',
    link: 'redirectToMYSQLPage()'
},
{
    img: './images/C 1.png',
    title: 'C LANGUAGE',
    description: 'C is a powerful and efficient procedural programming language, renowned for its versatility and portability, commonly used for system programming, embedded systems, and application development.',
    link: 'redirectToCPage()'
},
{
    img: './images/jslogo (2).png',
    title: 'JAVASCRIPT',
    description: 'JavaScript is a versatile scripting language primarily used for web development, enabling dynamic and interactive content on websites, including animations, form validation, and client-side functionality.',
    link: 'redirectToJSPage()'
},
{
    img: './images/C++ 1.png',
    title: 'C++ LANGUAGE',
    description: 'C++ is an object-oriented programming language derived from C, known for its efficiency, flexibility, and extensive standard libraries, widely used in game development, system programming, and software engineering.',
    link: 'redirectToCPPPage()'
},
{
    img: './images/java 3.png',
    title: 'JAVA',
    description: 'Java is a high-level, class-based programming language known for its platform independence, robustness, and extensive ecosystem, widely used for developing enterprise-scale applications, mobile apps, and web servers.',
    link: 'redirectToJAVAPage()'
},
{
    img: './images/KOTLIN 1.png',
    title: 'KOTLIN',
    description: 'Kotlin is a modern, statically-typed programming language interoperable with Java, known for its conciseness, safety features, and full-stack development capabilities, commonly used for Android app development and backend services.',
    link: 'redirectToKOTLINPage()'
},
{
    img: './images/nodejs 1.png',
    title: 'NODE JS',
    description: 'Node.js is a runtime environment built on Chrome`s V8 JavaScript engine, allowing developers to run JavaScript on the server- side, facilitating scalable and event - driven applications, including web servers, APIs, and real - time applications.',
    link: 'redirectToNODEJSPage()'
},
{
    img: './images/python 1.png',
    title: 'PYTHON',
    description: 'Python is a versatile, high-level programming language known for its simplicity, readability, and vast ecosystem of libraries, commonly used for web development, data analysis, artificial intelligence, and automation.',
    link: 'redirectToPYTHONPage()'
},
{
    img: './images/reactjs 3.png',
    title: 'REACT JS',
    description: 'React.js is a JavaScript library for building user interfaces, known for its component-based architecture, virtual DOM, and declarative approach, enabling efficient and interactive web applications with reusable UI components.',
    link: 'redirectToREACTJSPage()'
},
{
    img: './images/RUBY 1.png',
    title: 'RUBY',
    description: 'Ruby is a dynamic, object-oriented programming language known for its simplicity, productivity, and elegant syntax, commonly used for web development, prototyping, and automation.',
    link: 'redirectToRUBYPage()'
},
{
    img: './images/SWIFT 3.png',
    title: 'SWIFT',
    description: 'Swift is a powerful and intuitive programming language developed by Apple, known for its safety features, speed, and modern syntax, used for building iOS, macOS, watchOS, and tvOS applications.',
    link: 'redirectToSWIFTPage()'
},
{
    img: './images/tailwind 1.png',
    title: 'TAILWIND CSS',
    description: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for styling web interfaces, enabling rapid development and customization of responsive and scalable UI components.',
    link: 'redirectToTAILWINDSCSPage()'
}]


function displayData() {
    let str = ''
    objofLanguages.map((v) => {
        str += `<div class="col mb-4">
    <div class="card" style="background-color: #1B263B; color: #E0E1DD; height: 100%;padding: 10px" onclick="${v.link}">
        <img src="${v.img}" class="card-img-top" alt="...">
        <div class="card-body mt-3">
            <h5 class="card-title text-center">${v.title}</h5>
            <p class="card-text text-center lh-base">${v.description}</p>
        </div>
        <button onclick="displayPopUp()" class="mt-3 card-button"><a href="#">Play>>></a></button>
    </div>
</div>`
    })
    document.getElementById('container').innerHTML = str
}
displayData()

function displayPopUp() {
    document.getElementById('quizpopup').style.opacity = '1'
    document.getElementById('blur').style.filter = 'blur(7px)'
    document.getElementById('blur').style.pointerEvents = 'none'
}

function exitdisplayPopUp() {
    document.getElementById('quizpopup').style.opacity = '0'
    document.getElementById('blur').style.filter = 'blur(0px)'
    document.getElementById('blur').style.pointerEvents = 'all'
}

function redirectToHTMLPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-html.html'");
}

function redirectToCSSPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-css.html'");
}

function redirectToCPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-c.html'");
}

function redirectToCPPPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-cpp.html'");
}

function redirectToJSPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-js.html'");
}

function redirectToJAVAPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-java.html'");
}

function redirectToKOTLINPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-kotlin.html'");
}

function redirectToNODEJSPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-nodejs.html'");
}

function redirectToPYTHONPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-python.html'");
}

function redirectToREACTJSPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-reactjs.html'");
}

function redirectToRUBYPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-ruby.html'");
}

function redirectToSWIFTPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-swift.html'");
}

function redirectToTAILWINDSCSPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-tailwind-css.html'");
}

function redirectToMYSQLPage() {
    document.getElementById("redirectButton").setAttribute("onclick", "window.location.href = './Quiz Pages/quiz-page-sql.html'");
}


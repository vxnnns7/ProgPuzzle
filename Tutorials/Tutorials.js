const objofTutorials = [
	{
		src: 'https://www.youtube-nocookie.com/embed/HD13eq_Pmp8?si=E_nFtWzAAsG2V7sU',
		title: 'HTML 5',
		description: 'HTML (Hypertext Markup Language) is the standard markup language for creating web pages and applications, defining the structure and content of web documents.',
		pdfLink: './pdf/HTML(WT) Lecture Notes.pdf',

	},
	{
		src: 'https://www.youtube.com/embed/wRNinF7YQqQ?si=tf2gmMAxiwUNeFNo',
		title: 'CSS',
		description: 'CSS (Cascading Style Sheets) is a styling language used to control the presentation and layout of HTML documents, enabling precise customization of elements such as colors, fonts, and spacing.',
		pdfLink: './pdf/CSSNotesForProfessionals.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/oPV2sjMG53U?si=xxWrQCN9CuL4thy7',
		title: 'MY SQL',
		description: ' MySQL is a popular open-source relational database management system (RDBMS) known for its reliability, scalability, and performance, widely used for managing structured data in various applications.',
		pdfLink: './pdf/MySQLNotesForProfessionals.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/nrbBmoINqtk?si=eY8lowZOz5Yol-ZE',
		title: 'C LANGUAGE',
		description: 'C is a powerful and efficient procedural programming language, renowned for its versatility and portability, commonly used for system programming, embedded systems, and application development.',
		pdfLink: './pdf/c-programming-notes.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/lfmg-EJ8gm4?si=sQWQ7GTkB7CKxQKk',
		title: 'JAVASCRIPT',
		description: 'JavaScript is a versatile scripting language primarily used for web development, enabling dynamic and interactive content on websites, including animations, form validation, and client-side functionality.',
		pdfLink: './pdf/JavaScript-Handwritten-Notes.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/S3nx34WFXjI?si=icCVS1eZFBp_hMrR',
		title: 'C++ LANGUAGE',
		description: 'C++ is an object-oriented programming language derived from C, known for its efficiency, flexibility, and extensive standard libraries, widely used in game development, system programming, and software engineering.',
		pdfLink: './pdf/c++.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/NBIUbTddde4?si=Fsze8NfVea18xRqf',
		title: 'JAVA',
		description: 'Java is a high-level, class-based programming language known for its platform independence, robustness, and extensive ecosystem, widely used for developing enterprise-scale applications, mobile apps, and web servers.',
		pdfLink: '/.pdf/Java-handwritten-Notes.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/NosAkIKgA4Y?si=UA0OOa83_-9nK-i-',
		title: 'KOTLIN',
		description: 'Kotlin is a modern, statically-typed programming language interoperable with Java, known for its conciseness, safety features, and full-stack development capabilities, commonly used for Android app development and backend services.',
		pdfLink: './pdf/KotlinNotesForProfessionals.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/IIpiLZGTWuo?si=Rd-kT6myCZ1mErjF',
		title: 'NODE JS',
		description: 'Node.js is a runtime environment built on Chrome`s V8 JavaScript engine, allowing developers to run JavaScript on the server- side, facilitating scalable and event - driven applications, including web servers, APIs, and real - time applications.',
		pdfLink: './pdf/NodeJS-Handwritten-Notes.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/XKHEtdqhLK8?si=HFiouEnACBUICFEe',
		title: 'PYTHON',
		description: 'Python is a versatile, high-level programming language known for its simplicity, readability, and vast ecosystem of libraries, commonly used for web development, data analysis, artificial intelligence, and automation.',
		pdfLink: './pdf/Python-Handwritten-Notes.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/hn80mWvP-9g?si=MOJ8bz7XJF4nbKH1',
		title: 'REACT JS',
		description: 'React.js is a JavaScript library for building user interfaces, known for its component-based architecture, virtual DOM, and declarative approach, enabling efficient and interactive web applications with reusable UI components.',
		pdfLink: '.pdf/React-Handwritten-notes.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/t_ispmWmdjY?si=wm9Z7TO5u2rZNUZ7',
		title: 'RUBY',
		description: 'Ruby is a dynamic, object-oriented programming language known for its simplicity, productivity, and elegant syntax, commonly used for web development, prototyping, and automation.',
		pdfLink: '.pdf\RubyNotesForProfessionals.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/bjPENR6sHRU?si=9UY9ZCOX3ghATk_I',
		title: 'SWIFT',
		description: 'Swift is a powerful and intuitive programming language developed by Apple, known for its safety features, speed, and modern syntax, used for building iOS, macOS, watchOS, and tvOS applications.',
		pdfLink: '.pdf\SwiftLanguage.pdf',
	},
	{
		src: 'https://www.youtube.com/embed/bxmDnn7lrnk?si=QSJnyTKQcpfcCOkj',
		title: 'TAILWIND CSS',
		description: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for styling web interfaces, enabling rapid development and customization of responsive and scalable UI components.',
		pdfLink: '',
	}
]
function displayTutorials() {
	str = ''
	objofTutorials.map((v) => {
		str += `<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
		<div class="card p-3" style="max-width: 540px;background-color: #415A77;">
			<div class="row g-0">
				<div class="col-md-4">
					<iframe src="${v.src}"
						title="YouTube video" allowfullscreen class="h-100 w-100 rounded"></iframe>
				</div>
				<div class="col-md-8">
					<div class="card-body" style="color: #E0E1DD;">
						<h5 class="card-title">${v.title} Tutorial</h5>
						<p class="card-text">${v.description}</p>
					</div>
					<a href="${v.pdfLink}" download="" class="m-3">See More...</a>
				</div>
			</div>
		</div>
	</div>`
	})
	document.getElementById('tutorial').innerHTML = str
}
displayTutorials()
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
	container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
	container.classList.remove("sign-up-mode");
});
function handleSubmit(event) {
	event.preventDefault();
	let obj = {
		username: document.getElementById("username").value,
		password: document.getElementById("password").value,
	}
	let usernameRegex = /^[a-z0-9]+$/
	let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{4,}$/
	if (!obj.username) {
		isSuccess = false
		document.getElementById("errorusername").innerText = "* Please enter username";
	} else if (!usernameRegex.test(obj.username)) {
		isSuccess = false
		document.getElementById("errorusername").innerText = "* Please enter valid username";
	}
	else {
		isSuccess = true
		document.getElementById("errorusername").innerText = "";
	}
	if (!obj.password) {
		isSuccess = false
		document.getElementById("errorpasssword").innerText = "* Please enter password";
	} else if (!passwordRegex.test(obj.password)) {
		isSuccess = false
		document.getElementById("errorpasssword").innerText = "* Please enter valid password";
	}
	else {
		isSuccess = true
		document.getElementById("errorpasssword").innerText = "";
	}
	// if (isSuccess) {
	// }
	document.getElementById('sign-in-form').reset()
	let getNewUserData = JSON.parse(localStorage.getItem('newUserData'))
	if (!localStorage.getItem('newUserData')) {
		alert('You should Sign Up First')
	} else {
		if (!getNewUserData.username && !getNewUserData.password) {
			alert('No Login Details Found')
		}
		if (isSuccess) {
			if (obj.username !== getNewUserData.username) {
				document.getElementById('success').innerText = 'You are not connected with us :('
			} else if (obj.password !== getNewUserData.password) {
				document.getElementById('success').innerText = 'You are not connected with us :('
			}
			else {
				document.getElementById('success').innerText = 'Sign in Successfull :)'
				window.location.href = "../index.html";
			}
		}
	}

}
function handleSubmit1(event) {
	event.preventDefault()
	let obj1 = {
		username: document.getElementById("username1").value,
		email: document.getElementById("email").value,
		password: document.getElementById("password1").value,
	}
	let usernameRegex = /^[a-z0-9]+$/
	let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{4,}$/
	if (!obj1.username) {
		isSuccess = false
		document.getElementById("errorusername1").innerText = "* Please enter username";
	} else if (!usernameRegex.test(obj1.username)) {
		isSuccess = false
		document.getElementById("errorusername1").innerText = "* Please enter valid username";
	}
	else {
		isSuccess = true
		document.getElementById("errorusername1").innerText = "";
	}
	if (!obj1.email) {
		isSuccess = false
		document.getElementById("erroremail").innerText = "* Please enter email";
	}
	else {
		isSuccess = true
		document.getElementById("erroremail").innerText = "";
	}
	if (!obj1.password) {
		isSuccess = false
		document.getElementById("errorpassword1").innerText = "* Please enter password";
	} else if (!passwordRegex.test(obj1.password)) {
		isSuccess = false
		document.getElementById("errorpassword1").innerText = "* Atleast one uppercase & lowercase with atleast one digit and special character";
	}
	else {
		isSuccess = true
		document.getElementById("errorpassword1").innerText = "";
	}
	if (isSuccess) {
		localStorage.setItem('newUserData', JSON.stringify(obj1))
		// document.getElementsByClassName('.sign-up-form').reset()
		document.getElementById('sign-up-form').reset()
	}
}

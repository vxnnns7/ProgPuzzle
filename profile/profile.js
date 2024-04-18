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
<<<<<<< HEAD

	let userNameRegex = /^[a-z0-9]+$/
	let passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,8}$/


	if (!obj.username) {
		isSuccess = false
		document.getElementById("errorusername").innerText = "* Please enter username";
	} else if (!userNameRegex.test(obj.username)) {
		isSuccess = false
		document.getElementById('errorusername').innerText = "* Please enter only lowercase character";
	} else {
=======
	let usernameRegex = /^[a-z0-9]+$/
	let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{4,12}$/
	if (!obj.username) {
		isSuccess = false
		document.getElementById("errorusername").innerText = "* Please enter username";
	} else if (!usernameRegex.test(obj.username)) {
		isSuccess = false
		document.getElementById("errorusername").innerText = "* Please enter valid username";
	}
	else {
>>>>>>> b25adc3502487966562a9fe535a2075ac7be490d
		isSuccess = true
		document.getElementById("errorusername").innerText = "";
	}

	if (!obj.password) {
		isSuccess = false
		document.getElementById("errorpasssword").innerText = "* Please enter password";
	} else if (!passwordRegex.test(obj.password)) {
		isSuccess = false
<<<<<<< HEAD
		document.getElementById("errorpassword").innerText = "* Please enter valid password";
	} else if (!obj.password.length > 8) {
		isSuccess = false
		document.getElementById("errorpassword").innerText = "* Please enter less than 8 character";
	} else {
=======
		document.getElementById("errorpasssword").innerText = "* Please enter valid password";
	}
	else {
>>>>>>> b25adc3502487966562a9fe535a2075ac7be490d
		isSuccess = true
		document.getElementById("errorpasssword").innerText = "";
	}

	if (isSuccess) {
<<<<<<< HEAD
		console.log(obj);
		document.getElementById('sign-in-form').reset();

=======
		localStorage.setItem('details', JSON.stringify(obj))
>>>>>>> b25adc3502487966562a9fe535a2075ac7be490d
	}
	let getDetails = JSON.parse(localStorage.getItem('details'))
	let getNewUserData = JSON.parse(localStorage.getItem('newUserData'))
	if (isSuccess) {
		if (getDetails.username !== getNewUserData.username) {
			document.getElementById('success').innerText = 'You are not connected with us :('
		} else if (getDetails.password !== getNewUserData.password) {
			document.getElementById('success').innerText = 'You are not connected with us :('
		}
		else {
			document.getElementById('success').innerText = 'Sign in Successfull :)'
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
<<<<<<< HEAD
	let userNameRegex1 = /^[a-z0-9]+$/
	let passwordRegex1 = /^[a-zA-Z0-9!@#$%^&*]{6,8}$/
	let emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z]+[.][a-zA-Z]{2,3}$/

	if (!obj1.username) {
		isSuccess = false
		document.getElementById("errorusername1").innerText = "* Please enter username";
	}
	else if (!userNameRegex1.test(obj1.username)) {
		isSuccess = false
		document.getElementById('errorusername1').innerText = "* Please enter only character(Lowercase) and digit";
=======
	let usernameRegex = /^[a-z0-9]+$/
	let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{4,12}$/
	if (!obj1.username) {
		isSuccess = false
		document.getElementById("errorusername1").innerText = "* Please enter username";
	} else if (!usernameRegex.test(obj1.username)) {
		isSuccess = false
		document.getElementById("errorusername1").innerText = "* Please enter valid username";
>>>>>>> b25adc3502487966562a9fe535a2075ac7be490d
	}
	else {
		isSuccess = true
		document.getElementById("errorusername1").innerText = "";
	}

	if (!obj1.email) {
		isSuccess = false
		document.getElementById("erroremail").innerText = "* Please enter email";
	} else if (!emailRegex.test(obj1.email)) {
		isSuccess = false
		document.getElementById("erroremail").innerText = "* Please enter valid email";
	} else {
		isSuccess = true
		document.getElementById("erroremail").innerText = "";
	}

	if (!obj1.password) {
		isSuccess = false
		document.getElementById("errorpassword1").innerText = "* Please enter password";
<<<<<<< HEAD
	} else if (!passwordRegex1.test(obj1.password)) {
		isSuccess = false
		document.getElementById("errorpassword1").innerText = "* Please enter valid password";
	} else if (!obj1.password.length > 8) {
		isSuccess = false
		document.getElementById("errorpassword1").innerText = "* Please enter less than 8 character";
	} else {
=======
	} else if (!passwordRegex.test(obj1.password)) {
		isSuccess = false
		document.getElementById("errorpassword1").innerText = "* Atleast one uppercase & lowercase with atleast one digit and special character";
	}
	else {
>>>>>>> b25adc3502487966562a9fe535a2075ac7be490d
		isSuccess = true
		document.getElementById("errorpassword1").innerText = "";
	}

	if (isSuccess) {
<<<<<<< HEAD
		console.log(obj1);
		document.getElementById('sign-up-form').reset();
=======
		// console.log(obj1);
		localStorage.setItem('newUserData', JSON.stringify(obj1))
>>>>>>> b25adc3502487966562a9fe535a2075ac7be490d
	}
}

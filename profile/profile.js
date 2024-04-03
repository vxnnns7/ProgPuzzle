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
	if (!obj.username) {
		isSuccess = false
		document.getElementById("errorusername").innerText = "* Please enter username";
	} else {
		isSuccess = true
		document.getElementById("errorusername").innerText = "";
	}
	if (!obj.password) {
		isSuccess = false
		document.getElementById("errorpasssword").innerText = "* Please enter password";
	}
	else {
		isSuccess = true
		document.getElementById("errorpasssword").innerText = "";
	}
	if (isSuccess) {
		// console.log(obj);
	}
}
function handleSubmit1(event) {
	event.preventDefault()
	let obj1 = {
		username: document.getElementById("username1").value,
		email: document.getElementById("email").value,
		password: document.getElementById("password1").value,
	}
	if (!obj1.username) {
		isSuccess = false
		document.getElementById("errorusername1").innerText = "* Please enter username";
	} else {
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
	}
	else {
		isSuccess = true
		document.getElementById("errorpassword1").innerText = "";
	}
	if (isSuccess) {
		// console.log(obj1);
	}
}
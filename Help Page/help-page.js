function handleSubmit(event) {
    event.preventDefault()
    let obj = {
        "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "message": document.getElementById('message').value
    }
    console.log(obj);


    let isSuccess = true
    if (!obj.name) {
        isSuccess = false
        document.getElementById('errorName').innerText = "Please enter name"
    } else {
        isSuccess = true
        document.getElementById('errorName').innerText = ""
    }
    if (!obj.email) {
        isSuccess = false
        document.getElementById('errorEmail').innerText = "Please enter email"
    } else {
        isSuccess = true
        document.getElementById('errorEmail').innerText = ""
    }
    if (!obj.message) {
        isSuccess = false
        document.getElementById('errorMessage').innerText = "Please enter message"
    } else {
        isSuccess = true
        document.getElementById('errorMessage').innerText = ""
    }
    if (isSuccess) {

        document.getElementById('contactForm').reset()

    }

}


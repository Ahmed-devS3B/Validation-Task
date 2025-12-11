// Global Vars 

var userNameInput = document.getElementById("userName")
var userPassInput = document.getElementById("password")
var userEmailInput = document.getElementById("email")
var SignUpBtn = document.getElementById("signUpBtn")
var alertMsg = document.getElementById("alertMessage")

var usersList = [];


if (localStorage.getItem("users") != null) {
    usersList = JSON.parse(localStorage.getItem("users"));
}

// Signup function
function signUp() {
    var users = {
        userName: userNameInput.value,
        userPass: userPassInput.value,
        userEmail: userEmailInput.value
    }

    if (checkEmpty() == true) {

        alertMessage("All inputs required", "red")
    }
    else {
        if (emailExist() == true) {

            alertMessage("Email Already Exists", 'red')
        }
        else {
            usersList.push(users)
            localStorage.setItem("users", JSON.stringify(usersList));
            clearForm();
            alertMessage("Success", "green");

        }
    }
}
SignUpBtn.addEventListener("click", signUp)


// alertMessage Function
function alertMessage(text, color) {
    alertMsg.classList.replace("d-none", "d-block");
    alertMsg.style.color = color;
    alertMsg.innerHTML = text;
}



// clearForm function
function clearForm() {
    userNameInput.value = "";
    userPassInput.value = "";
    userEmailInput.value = "";
}



// check inputs function
function checkEmpty() {
    if (userNameInput.value == '' || userEmailInput.value == '' || userPassInput.value == '')
        return true;

    else
        return false;

}


// check Email Exist
function emailExist() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userEmail == userEmailInput.value)
            return true;
    }
}









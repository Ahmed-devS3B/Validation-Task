// global vars

var emailLoginInput = document.getElementById("emailLoginInput")
var passLoginInput = document.getElementById("passLoginInput")
var loginBtn = document.getElementById("loginBtn")
var alertMsg = document.getElementById("alertMessage")
var usersList = []
// console.log(emailLoginInput, passLoginInput, loginBtn);

if (localStorage.getItem("users") != null) {
    usersList = JSON.parse(localStorage.getItem("users"));

}

// Login Function
function logIn() {

    if (checkEmpty() == true) {
        alertMessage("All inputs required", "red")
    }
    else {
        if (checkEmailPass() == true) {
            window.location.href = 'home.html'     // -->  to navigate to html page
        }
        else {
            alertMessage("Email or Password doesn't Exist!", "red")
        }
    }


}
loginBtn.addEventListener("click", logIn)

// check email and pass function 
function checkEmailPass() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userEmail == emailLoginInput.value && usersList[i].userPass == passLoginInput.value) {

            localStorage.setItem("userName", usersList[i].userName)  // to take take the name with me to the home page to display there
            return true;
        }

    }
}

// alert function 
function alertMessage(text, color) {
    alertMsg.classList.replace("d-none", "d-block");
    alertMsg.style.color = color;
    alertMsg.innerHTML = text;
}



// check inputs function
function checkEmpty() {
    if (emailLoginInput.value == '' || passLoginInput.value == '')
        return true;

    else
        return false;

}


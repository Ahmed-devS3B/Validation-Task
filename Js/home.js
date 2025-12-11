var welcomeMsg = document.getElementById("welcomeMessage")
var logoutBtn = document.getElementById("logOutBtn")


if (localStorage.getItem("userName") != null) {
    welcomeMsg.innerHTML = `Welcome ${localStorage.getItem("userName")}`
}


// logout Function
function logOut() {
    window.location.href = 'index.html'
    localStorage.removeItem("userName")
}
logoutBtn.addEventListener("click", logOut)
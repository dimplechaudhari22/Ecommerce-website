const loginForm = document.getElementById("login");
const loginBtn = document.getElementById("log");
const loginErrMsg = document.getElementById("err-msg");

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const usrId = loginForm.mailId.value;
    const pass = loginForm.Pass.value;

    if (usrId === "admin123@gmail.com" && pass === "1234567") {
        alert("You have Successfully Logged In.");
        location.reload();
    } else {
        loginErrMsg.style.opacity = 1;
    }
})

function validateform() {
    var usrId = document.reg.mailId.value;
    var fstPass = document.reg.Pass1.value;
    var secPass = document.reg.Pass2.value;

    if (mailId == null || mailId == "") {
        alert("Mail-Id can't be blank...");
        return false;
    } else if (fstPass.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    } else if (fstPass === secPass) {
        return true;
    } else {
        alert("Password must be same!");
        return false;
    }

    // matchpass();
}

// function matchpass() {
//     var fstPass = document.reg.Pass1.value;
//     var secPass = document.reg.Pass2.value;

//     if (fstPass === secPass) {
//         return true;
//     } else {
//         alert("Password must be same!");
//         return false;
//     }
// }
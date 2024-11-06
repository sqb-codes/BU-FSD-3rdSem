window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#box-1").addEventListener("blur", validateName);
    document.querySelector("#box-2").addEventListener("change", validateEmail);
    document.querySelector("#box-3").addEventListener("keyup", validatePassword);
}

function validateName() {
    // alert("Please enter your name");
    var username = this.value;
    var errMsg = document.querySelector("#err-1");
    // if(username == "" || username.length == 0) {
    //     this.style.border = "1px solid red";
    //     errMsg.innerText = "Please enter your name";
    // }
    // else {
    //     this.style.border = "1px solid green";
    //     errMsg.innerText = "";
    // }

    // Truthy and Falsy
    if(!username) {
        this.className = "errBorder";
        errMsg.innerText = "Please enter your name";
    }
    else {
        this.className = "successBorder";
        errMsg.innerText = "";
    }

}

function validateEmail() {
    // var pattern = /[a-z|0-9|\.]+@[a-z]+\.[a-z]{2,3}/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailId = this.value;
    var errMsg = document.querySelector("#err-2");
    if(!emailPattern.test(emailId)) {
        this.className = "errBorder";
        errMsg.innerText = "Invalid Email ID";
    }
    else {
        this.className = "successBorder";
        errMsg.innerText = "";
    }

}

function validatePassword() {
    var password = this.value;
    console.log(password);
    var errMsg = document.querySelector("#err-3");
    if(!password) {
        this.className = "errBorder";
        errMsg.innerText = "Please enter your password";
    } else if (password.length > 0 && password.length <= 4) {
        this.className = "errBorder";
        errMsg.innerText = "Password Strength - Weak";
    } else if (password.length > 4 && password.length <= 8) {
        this.className = "errBorder";
        errMsg.innerText = "Password Strength - Average";
    } else if (password.length > 8) {
        this.className = "successBorder";
        errMsg.innerText = "Password Strength - Strong";
    }
}
window.addEventListener("load", loadEvents);

function loadEvents() {
    document.querySelector("#box-1").addEventListener("blur", validateName);
    document.querySelector("#box-2").addEventListener("change", validateEmail);
    document.querySelector("#box-3").addEventListener("keyup", validatePassword);
}

function validateName() {
    // console.log("Name validation executed...");
    var username = this.value;
    var msgBox = document.querySelector("#errMsg-1");
    // if(username.length == 0 || username == "") {
    //     msgBox.innerHTML = "Please enter your name";
    //     this.style.border = "1px solid red";
    // }
    // else {
    //     msgBox.innerHTML = "";
    //     this.style.border = "1px solid green";
    // }

    // will check - undefined / null / 0 / empty / NaN
    // Truthy and Falsy
    if(!username) {
        msgBox.innerHTML = "Please enter your name";
        // this.style.border = "1px solid red";
        this.className = "errBorder";
    }
    else {
        msgBox.innerHTML = "";
        // this.style.border = "1px solid green";
        this.className = "successBorder";
    }
}

function validateEmail() {
    var pattern = /[a-z]\w+[a-z|.]\w+[@]\w+[.]\w+/;
    // var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailId = this.value;
    var msgBox = document.querySelector("#errMsg-2");
    if(!pattern.test(emailId)) {
        msgBox.innerHTML = "Invalid Email Address";
        this.className = "errBorder";
    } else {
        msgBox.innerHTML = "";
        this.className = "successBorder";
    }
}

function validatePassword() {
    // console.log(this.value);
    var password = this.value;
    var msgBox = document.querySelector("#errMsg-3");
    if(!password) {
        msgBox.innerHTML = "Please enter password";
        this.className = "errBorder";
    } else if(password.length >= 1 && password.length <= 4) {
        msgBox.innerHTML = "Password Strength : Weak";
        this.className = "errBorder";
    } else if(password.length > 4 && password.length <= 8) {
        msgBox.innerHTML = "Password Strength : Average";
        this.className = "errBorder";
    } else if(password.length > 8) {
        msgBox.innerHTML = "Password Strength : Strong";
        this.className = "successBorder";
    }
}

function confirmPassword() {
    // compare both password box values
}

function validateAge() {
    // validate if age is above 18
}

function validateFile() {
    // check file size should be below 5kb
}
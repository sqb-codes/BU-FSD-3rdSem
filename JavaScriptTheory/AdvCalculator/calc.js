window.addEventListener("load", bindEvents);

var textBox;

function bindEvents() {
    textBox = document.querySelector("#box");
    document.querySelector("#calc").addEventListener("click", calculate);
    var numBtns = document.querySelectorAll(".num");
    for (var btn of numBtns) {
        btn.addEventListener("click", appendNum);
    }

    var oprBtns = document.querySelectorAll(".opr");
    for (var btn of oprBtns) {
        btn.addEventListener("click", appendOpr);
    }
}

function appendNum() {
    var num = this.innerText;
    textBox.value += num;
}

function appendOpr() {
    var num = this.innerText;
    // ToDo
    // Make sure to append only one operator at a time
    // if user clicks on same operator multiple times, then it should show only one
    // is user clicks on two operators, then last clicked operator will be displayed
    textBox.value += num;
}

function calculate() {
    var expression = textBox.value;
    var result = eval(expression);
    textBox.value = result;
}

function backspace() {
    // TODO
    // Delete one character from right
}
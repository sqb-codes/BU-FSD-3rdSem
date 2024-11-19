window.addEventListener("load", initEvents);

var fnum;
var snum;

function initEvents() {
    fnum = document.querySelector("#box-1");
    snum = document.querySelector("#box-2");
    var btns = document.querySelectorAll("button");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }
}

function calc() {
    // var result = parseInt(fnum.value) + parseInt(snum.value);
    // document.querySelector('#box-3').value = result;
    // console.log("Clicked on button");
    // console.log(this);
    var opr = this.innerText;
    // if(opr === "+") {
    //     var result = parseInt(fnum.value) + parseInt(snum.value);
    // }
    // else if(opr === "-") {
    //     var result = parseInt(fnum.value) - parseInt(snum.value);
    // }
    // else if(opr === "/") {
    //     var result = parseInt(fnum.value) / parseInt(snum.value);
    // }
    // else if(opr === "*") {
    //     var result = parseInt(fnum.value) * parseInt(snum.value);
    // }

    var expression = fnum.value + opr + snum.value;
    var result = eval(expression);

    document.querySelector('#box-3').value = result;
}

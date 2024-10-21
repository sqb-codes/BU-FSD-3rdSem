window.addEventListener("load", initEvents);

var fnum;
var snum;

function initEvents() {
    fnum = document.querySelector("#box-1");
    snum = document.querySelector("#box-2");
    document.querySelector("#btn_1").addEventListener("click", add);
    document.querySelector("#btn_2").addEventListener("click", sub);
    document.querySelector("#btn_3").addEventListener("click", div);
    document.querySelector("#btn_4").addEventListener("click", mul);
}

function add() {
    var result = parseInt(fnum.value) + parseInt(snum.value);
    document.querySelector('#box-3').value = result;
}

function sub() {
    var result = parseInt(fnum.value) - parseInt(snum.value);
    document.querySelector('#box-3').value = result;
}

function div() {
    var result = parseInt(fnum.value) / parseInt(snum.value);
    document.querySelector('#box-3').value = result;
}

function mul() {
    var result = parseInt(fnum.value) * parseInt(snum.value);
    document.querySelector('#box-3').value = result;
}
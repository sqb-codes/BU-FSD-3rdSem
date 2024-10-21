window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#btn_1").addEventListener("click", add);
    document.querySelector("#btn_2").addEventListener("click", sub);
    document.querySelector("#btn_3").addEventListener("click", div);
    document.querySelector("#btn_4").addEventListener("click", mul);
}

function add() {
    fnum = document.querySelector("#box-1").value;
    snum = document.querySelector("#box-2").value;
    result = parseInt(fnum) + parseInt(snum);
    document.querySelector('#box-3').value = result;
}

function sub() {
    fnum = document.querySelector("#box-1").value;
    snum = document.querySelector("#box-2").value;
    result = parseInt(fnum) - parseInt(snum);
    document.querySelector('#box-3').value = result;
}

function div() {
    fnum = document.querySelector("#box-1").value;
    snum = document.querySelector("#box-2").value;
    result = parseInt(fnum) / parseInt(snum);
    document.querySelector('#box-3').value = result;
}

function mul() {
    fnum = document.querySelector("#box-1").value;
    snum = document.querySelector("#box-2").value;
    result = parseInt(fnum) * parseInt(snum);
    document.querySelector('#box-3').value = result;
}
window.addEventListener("load", bindEvents);

function bindEvents() {
    document.querySelector("#addTask").addEventListener("click", addNewTask);
}

function addNewTask() {
    var taskTitle = document.querySelector("#taskTitle").value;
    var taskDesc = document.querySelector("#taskDesc").value;
    var ul = document.querySelector("#taskList");
    var li = document.createElement("li");
    var titleHeading = document.createElement("h3");
    var taskDescPara = document.createElement("p");
    var date = new Date();
    var datePara = document.createElement("p");
    datePara.innerText = "Created On : " + date.toDateString();
    datePara.className = "dateText";

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Task";
    deleteBtn.className = "btn btn-danger";

    var editBtn = document.createElement("button");
    editBtn.innerText = "Edit Task";
    editBtn.className = "btn btn-warning";

    titleHeading.innerText = taskTitle;
    taskDescPara.innerText = taskDesc;
    li.appendChild(titleHeading);
    li.appendChild(taskDescPara);
    li.appendChild(datePara);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);
}
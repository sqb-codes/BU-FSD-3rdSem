// MVC - Model View Controller

window.addEventListener("load", bindEvents);

function bindEvents() {
    document.querySelector("#addNewTaskBtn").addEventListener("click", addNewTask);    
}

function addNewTask() {
    var ul = document.querySelector("#taskList");
    var li = document.createElement("li");
    var taskTitle = document.querySelector("#box-1").value;
    var taskDesc = document.querySelector("#box-2").value;
    var startDate = document.querySelector("#box-3").value;
    var endDate = document.querySelector("#box-4").value;

    var taskTitleHeading = document.createElement("h4");
    taskTitleHeading.innerText = taskTitle;

    var taskDescPara = document.createElement("p");
    taskDescPara.innerText = taskDesc;

    var startDateSpan = document.createElement("span");
    startDateSpan.innerText = "Start Date : " + startDate;

    var endDateSpan = document.createElement("span");
    endDateSpan.innerText = "End Date : " + endDate;

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Task";
    deleteBtn.className = "btn btn-danger";

    var editBtn = document.createElement("button");
    editBtn.innerText = "Edit Task";
    editBtn.className = "btn btn-warning";

    var createdOn = new Date();
    var createDateSpan = document.createElement("span");
    createDateSpan.innerText = "Created On : " + createdOn.toDateString();

    taskObject.addTask(taskTitle, taskDesc, startDate, endDate, createdOn);

    li.appendChild(taskTitleHeading);
    li.appendChild(taskDescPara);
    li.appendChild(startDateSpan);
    li.appendChild(endDateSpan);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    li.appendChild(createDateSpan);

    ul.appendChild(li);
}
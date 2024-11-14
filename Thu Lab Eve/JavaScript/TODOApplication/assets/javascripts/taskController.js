// MVC - Model View Controller

// window.addEventListener("load", bindEvents);

function bindEvents() {
    document.querySelector("#addNewTaskBtn").addEventListener("click", addNewTask);    
    document.querySelector("#sortTask").addEventListener("click", sortTask);
}

function addNewTask() {
    var taskTitle = document.querySelector("#box-1").value;
    var taskDesc = document.querySelector("#box-2").value;
    var startDate = document.querySelector("#box-3").value;
    var endDate = document.querySelector("#box-4").value;

    var createdOn = new Date();
    createdOn = createdOn.toDateString();

    taskObject.addTask(taskTitle, taskDesc, startDate, endDate, createdOn);

    showTask();
    saveTask();
    
}

function showTask() {
    var ul = document.querySelector("#taskList");
    ul.innerHTML = "";

    taskObject.taskArray.forEach(function(task) {
        var li = document.createElement("li");

        var taskTitleHeading = document.createElement("h4");
        taskTitleHeading.innerText = task.title;
    
        var taskDescPara = document.createElement("p");
        taskDescPara.innerText = task.desc;
    
        var startDateSpan = document.createElement("span");
        startDateSpan.innerText = "Start Date : " + task.startDate;
    
        var endDateSpan = document.createElement("span");
        endDateSpan.innerText = "End Date : " + task.endDate;
    
        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete Task";
        deleteBtn.className = "btn btn-danger";
        deleteBtn.setAttribute("title", task.taskId);
    
        var editBtn = document.createElement("button");
        editBtn.innerText = "Edit Task";
        editBtn.className = "btn btn-warning";

        var createDateSpan = document.createElement("span");
        createDateSpan.innerText = "Created On : " + task.createdOn;
    
        li.appendChild(taskTitleHeading);
        li.appendChild(taskDescPara);
        li.appendChild(startDateSpan);
        li.appendChild(endDateSpan);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        li.appendChild(createDateSpan);
    
        ul.appendChild(li);

        deleteBtn.addEventListener("click", deleteTask);
    });

}

function deleteTask() {
    var id = this.title;
    taskObject.deleteTask(id);
    showTask();
}

function sortTask() {
    var criteria = document.querySelector("#taskSort").value;
    var order = document.querySelector("#taskSortOrder").value;
    taskObject.sortTask(criteria, order);
    showTask();
}

function saveTask() {
    // convert Array of object into string data type
    var data = JSON.stringify(taskObject.taskArray);
    localStorage.setItem("taskArr", data);
}

function loadTask() {
    var data = localStorage.getItem("taskArr");
    taskObject.taskArray = JSON.parse(data);
    showTask();
}

bindEvents();
loadTask();
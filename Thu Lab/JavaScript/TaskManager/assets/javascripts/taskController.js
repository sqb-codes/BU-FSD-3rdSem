// MVC - Model View Controller
// Controller - Connect View with Model
// View -> Controller -> Model -> Logic/DB -> Controller -> View

// window.addEventListener("load", bindEvents);

function bindEvents() {
    document.querySelector("#addNewTaskBtn").addEventListener("click", addNewTask);
    document.querySelector("#sortTask").addEventListener("click", sortTask);
    document.querySelector("#searchBox").addEventListener("keyup", searchTask);
}

function addTaskItem(tagName, taskText) {
    var taskItemTag = document.createElement(tagName);
    taskItemTag.innerText = taskText;
    return taskItemTag;
}

function addNewTask() {
    var taskTitle = document.querySelector("#box-1");
    var taskDesc = document.querySelector("#box-2");
    var startDate = document.querySelector("#box-3");
    var endDate = document.querySelector("#box-4");

    var createdOn = new Date();
    createdOn = createdOn.toDateString();

    taskObject.addTask(taskTitle.value, taskDesc.value, startDate.value, endDate.value, createdOn);

    showTask();
    saveTask();

    taskTitle.value = "";
    taskDesc.value = "";
    startDate.value = "";
    endDate.value = "";
    
}

function showTask() {
    var ul = document.querySelector("#taskList");
    ul.innerHTML = "";

    taskObject.taskArray.forEach(function(task) {
        var li = document.createElement("li");

        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete Task";
        deleteBtn.className = "btn btn-danger";
        deleteBtn.setAttribute("title", task.taskId);

        var editBtn = document.createElement("button");
        editBtn.innerText = "Edit Task";
        editBtn.className = "btn btn-warning";
        editBtn.setAttribute("title", task.taskId);

        li.appendChild(addTaskItem("h4", task.taskTitle));
        li.appendChild(addTaskItem("h5", task.taskDesc));
        li.appendChild(addTaskItem("p", "Start Date : " + task.startDate));
        li.appendChild(addTaskItem("p", "End Date : " + task.endDate));
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        li.appendChild(addTaskItem("p", "Created On : " + task.createdOn));

        ul.appendChild(li);

        deleteBtn.addEventListener("click", deleteTask);
    });

}

function searchTask(){
    var searchValue = this.value;
    console.log(searchValue);
    taskObject.searchTask(searchValue);
}


function deleteTask() {
    var taskId = parseInt(this.title);
    taskObject.deleteTask(taskId);
    showTask();
    saveTask();
}

function updateTask() {
    taskObject.updateTask();
}

function sortTask() {
    var sortCriteria = document.querySelector("#sortCriteria").value;
    var sortOrder = document.querySelector("#sortOrder").value;
    taskObject.sortTask(sortCriteria, sortOrder);
    showTask();
}

function saveTask() {
    // stringify - will convert Array of object into a string
    // because localstorage don't understand array and any other data type
    // localstorage only understand string type of data
    var data = JSON.stringify(taskObject.taskArray);
    localStorage.setItem("taskList", data);
}

function loadTask() {
    if(localStorage.taskList) {
        var data = localStorage.getItem("taskList");
        taskObject.taskArray = JSON.parse(data);
        showTask();
    }
}

bindEvents();
loadTask();
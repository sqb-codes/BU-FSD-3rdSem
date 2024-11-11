// MVC - Model View Controller
// Controller - Connect View with Model
// View -> Controller -> Model -> Logic/DB -> Controller -> View

window.addEventListener("load", bindEvents);

function bindEvents() {
    document.querySelector("#addNewTaskBtn").addEventListener("click", addNewTask);
}

function addTaskItem(tagName, taskText) {
    var taskItemTag = document.createElement(tagName);
    taskItemTag.innerText = taskText;
    return taskItemTag;
}

function addNewTask() {
    var taskTitle = document.querySelector("#box-1").value;
    var taskDesc = document.querySelector("#box-2").value;
    var startDate = document.querySelector("#box-3").value;
    var endDate = document.querySelector("#box-4").value;
    var ul = document.querySelector("#taskList");
    var li = document.createElement("li");

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Task";
    deleteBtn.className = "btn btn-danger";

    var editBtn = document.createElement("button");
    editBtn.innerText = "Edit Task";
    editBtn.className = "btn btn-warning";

    var createdOn = new Date();

    li.appendChild(addTaskItem("h4", taskTitle));
    li.appendChild(addTaskItem("h5", taskDesc));
    li.appendChild(addTaskItem("p", "Start Date : " + startDate));
    li.appendChild(addTaskItem("p", "End Date : " + endDate));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    li.appendChild(addTaskItem("p", "Created On : " + createdOn.toDateString()));

    ul.appendChild(li);
}
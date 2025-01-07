// window.addEventListener("load", bindEvents);

function bindEvents() {
    document.querySelector("#addNewTaskBtn").addEventListener("click", addNewTask);
}

function newTag(tagName, tagText, className="") {
    var tag = document.createElement(tagName);
    tag.innerText = tagText;
    tag.className = className;
    return tag;
}

function addNewTask() {

    var taskTitle = document.querySelector("#taskTitle").value;
    var taskDesc = document.querySelector("#taskDesc").value;
    var startDate = document.querySelector("#startDate").value;
    var endDate = document.querySelector("#endDate").value;
    var currentDate = new Date().toDateString();

    taskModel.addTask(taskTitle, taskDesc, startDate, endDate, currentDate);
    showTask();
    saveTask();
}

function showTask() {
    var ul = document.querySelector("#taskList");
    ul.innerHTML = "";

    // use forEach when the data is available in Array of object
    taskModel.taskArray.forEach(function(obj) {
        // this is how we create element using JS on runtime
        var li = document.createElement("li");

        li.appendChild(newTag("h4", obj.title));
        li.appendChild(newTag("p", obj.desc));
        li.appendChild(newTag("span", "Start Date : " + obj.startDate));
        li.appendChild(newTag("span", "End Date : " + obj.endDate));
        var deleteBtn = newTag("button", "Delete Task", "btn btn-danger")
        li.appendChild(deleteBtn);

        var editBtn = newTag("button", "Edit Task", "btn btn-warning")
        li.appendChild(editBtn);
        li.appendChild(newTag("p", "Created On : " + obj.createdOn));

        ul.appendChild(li);

        deleteBtn.setAttribute("title", obj.id);
        deleteBtn.addEventListener("click", deleteTask);
    });
}

function deleteTask(){
    var id = this.title;
    taskModel.deleteTask(id);
    showTask();
    saveTask();
}
 
function saveTask() {
    if(window.localStorage) {
        // JSON.stringify() - convert array of object into string
        var data = JSON.stringify(taskModel.taskArray);
        localStorage.setItem("taskList", data);
    }
}

function loadTask() {
    if(localStorage.taskList) {
        var data = localStorage.getItem("taskList");
        taskModel.taskArray = JSON.parse(data);
        showTask();
    }
}

bindEvents()
loadTask()
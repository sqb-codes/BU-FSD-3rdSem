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

    var created = new Date();
    created = created.toDateString();

//    Controller will provide all details to Model
    taskObject.addTask(taskTitle, taskDesc, startDate, endDate, created);
    showTask();
    saveTask();
}

function showTask() {
    var ul = document.querySelector("#taskList");
    ul.innerHTML = "";

    taskObject.taskArray.forEach(function(obj) {
        var li = document.createElement("li");
        li.appendChild(newTag("h4", obj.title));
        li.appendChild(newTag("p", obj.desc));
        li.appendChild(newTag("span", "Start Date : " + obj.startDate));
        li.appendChild(newTag("span", "End Date : " + obj.endDate));
        var deleteBtn = newTag("button", "Delete Task", "btn btn-danger me-3"); 
        li.appendChild(deleteBtn);
        li.appendChild(newTag("button", "Edit Task", "btn btn-warning"));
        li.appendChild(newTag("p", "Created On : " + obj.createdOn));
        li.appendChild(newTag("p", "Status : " + obj.status));
        ul.appendChild(li);

        deleteBtn.setAttribute("title", obj.taskId);
        deleteBtn.addEventListener("click", deleteTask);
    });
}

function deleteTask() {
    // get the title of the button that user will click
    var id = this.title;
    taskObject.deleteTask(id);
    showTask();
    saveTask();
}

function saveTask() {
    // convert array of object to string
    var data = JSON.stringify(taskObject.taskArray);
    localStorage.setItem("taskList", data);
}

function loadTask() {
    if(localStorage.taskList) {
        var data = localStorage.getItem("taskList");
        // convert string into Array of Object
        taskObject.taskArray = JSON.parse(data);
        showTask();
    }
}

bindEvents();
loadTask();
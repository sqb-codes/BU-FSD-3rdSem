// window.addEventListener("load", bindEvents);

function bindEvents() {
    document.querySelector("#addTaskBtn").addEventListener("click", addNewTask);
    document.querySelector("#sortTask").addEventListener("click", sortTask);
}

function addTag(tagName, tagText, className="") {
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

    var createdOn = new Date();
    createdOn = createdOn.toDateString();

    taskObject.addTask(taskTitle, taskDesc, startDate, endDate, createdOn);
    showTask();
    saveTask();

}

function showTask() {
    var ul = document.querySelector("#taskList");
    ul.innerHTML = "";

    // Use forEach when you have array of object
    taskObject.taskArray.forEach(function(obj) {
        var li = document.createElement("li");
        li.appendChild(addTag("h4", obj.title));
        li.appendChild(addTag("p", obj.desc));
        li.appendChild(addTag("span", "Start Date : " + obj.startDate, "d-block"));
        li.appendChild(addTag("span", "End Date : " + obj.endDate, "d-block"));

        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete Task";
        deleteBtn.className = "btn btn-danger";
        deleteBtn.setAttribute("title", obj.id);

        var editBtn = document.createElement("button");
        editBtn.innerText = "Edit Task";
        editBtn.className = "btn btn-warning";

        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        li.appendChild(addTag("p", "Created On : " + obj.createdOn));

        ul.appendChild(li);

        deleteBtn.addEventListener("click", deleteTask);
    })
}

function deleteTask() {
    var id = this.title;
    taskObject.deleteTask(id);
    showTask();
    saveTask();
}

function sortTask() {
    var sortCriteria = document.querySelector("#sortCriteria").value;
    var sortOrder = document.querySelector("#sortOrder").value;
    taskObject.sortTask(sortCriteria, sortOrder);
    showTask();
}

function saveTask() {
    var data = JSON.stringify(taskObject.taskArray);
    localStorage.setItem("taskListData",data);
}

// IIFE
(function() {
    var data = localStorage.getItem("taskListData");
    taskObject.taskArray = JSON.parse(data);
    showTask();
})();

bindEvents();
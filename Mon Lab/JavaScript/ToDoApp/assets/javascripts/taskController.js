// window.addEventListener("load", bindEvents);

function bindEvents() {
    document.querySelector("#addTask").addEventListener("click", addNewTask);

}

function addNewTag(tagName, tagText, tagClass="") {
    var tag = document.createElement(tagName);
    tag.innerText = tagText;
    tag.className = tagClass;
    return tag;
}

function addNewTask() {
    var taskTitle = document.querySelector("#taskTitle").value;
    var taskDesc = document.querySelector("#taskDesc").value;
    var startDate = document.querySelector("#startDate").value;
    var endDate = document.querySelector("#endDate").value;
    var currentDate = new Date();
    currentDate = currentDate.toDateString();

    taskObject.addTask(taskTitle, taskDesc, startDate, endDate, currentDate);
    showTask();
    saveTask();

}

function showTask() {
    var ul = document.querySelector("#taskList");
    console.log(ul);
    ul.innerHTML = "";

    // use forEach when we have Array of object
    taskObject.taskArray.forEach(function(obj) {
        var li = document.createElement("li");
        li.appendChild(addNewTag("h4", obj.title));
        li.appendChild(addNewTag("p", obj.desc));
        li.appendChild(addNewTag("span", "Start Date : " + obj.startDate));
        li.appendChild(addNewTag("span", "End Date : " + obj.endDate));
        li.appendChild(addNewTag("p", `Created On : ${obj.currentDate}`));

        var deleteBtn = addNewTag("button", "Delete Task", "btn btn-danger");
        var editBtn = addNewTag("button", "Edit Task", "btn btn-secondary");

        deleteBtn.setAttribute("title", obj.id);
        deleteBtn.addEventListener("click", deleteTask);

        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        ul.appendChild(li);
    });

}

function deleteTask() {
    var id = this.title;
    taskObject.deleteTask(id);
    showTask();
    saveTask();     // update localstorage
}

function saveTask() {
    // convert array of object into string
    // '[{}, {}]'
    var data = JSON.stringify(taskObject.taskArray);
    localStorage.setItem("taskList", data);
}

// IIFE
(function() {
    var data = localStorage.getItem("taskList");
    // convert string into Array of Object
    taskObject.taskArray = JSON.parse(data);
    showTask();
})();

// loadTask()
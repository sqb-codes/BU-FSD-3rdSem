function initEvents() {
    document.querySelector("#addTask").addEventListener("click", addTask);
    document.querySelector("#sortTask").addEventListener("click", sortTask);
}

function createTag(tagName, tagText, tagClass) {
    var tag = document.createElement(tagName);
    tag.innerText = tagText;
    tag.className = tagClass
    return tag;
}

function addTask() {

    var taskTitle = document.querySelector("#taskTitle").value;
    var taskDesc = document.querySelector("#taskDesc").value;
    var startDate = document.querySelector("#startDate").value;
    var endDate = document.querySelector("#endDate").value;

    var createdOn = new Date().toDateString();
    taskObject.addNewTask(taskTitle, taskDesc, startDate, endDate, createdOn);

    showTask();
    saveData();
}

function showTask() {
    var ul = document.querySelector("#taskList");
    ul.innerHTML = "";

    // Use forEach specifically when we are using Array of Object
    taskObject.taskArray.forEach(function(obj) {
        var li = document.createElement("li");

        li.appendChild(createTag("h4", obj.title));
        li.appendChild(createTag("p", obj.desc));
        li.appendChild(createTag("span", "Start Date : " + obj.startDate));
        li.appendChild(createTag("span", `End Date : ${obj.endDate}`));
        li.appendChild(createTag("p", "Created On : " + obj.createdOn, "mt-3"));

        var deleteBtn = createTag("button", "Delete Task", "btn btn-danger");
        deleteBtn.setAttribute("title", obj.id);
        var editBtn = createTag("button", "Edit Task", "btn btn-warning");

        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        ul.appendChild(li);

        deleteBtn.addEventListener("click", deleteTask);
    })

}

function deleteTask() {
    var objectiD = this.title;
    taskObject.deleteTask(objectiD);
    showTask();
    saveData();
}

function sortTask() {
    var sortCriteria = document.querySelector("#sortCriteria").value;
    var sortOrder = document.querySelector("#sortOrder").value;
    taskObject.sortTask(sortCriteria, sortOrder);
    showTask();
}

function saveData() {
    // convert Array of Object into string first
    var data = JSON.stringify(taskObject.taskArray);
    localStorage.setItem("taskList", data);
}

// IIFE
(function() {
    if(localStorage.taskList) {
        var data = localStorage.getItem("taskList");
        // convert string into array of object
        taskObject.taskArray = JSON.parse(data);
        showTask();
    }
})();

initEvents();
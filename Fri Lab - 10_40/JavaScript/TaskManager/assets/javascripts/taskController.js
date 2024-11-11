window.addEventListener("load", bindEvents);

function bindEvents() {
    document.querySelector("#addNewTaskBtn").addEventListener("click", addNewTak);
}

function newTag(tagName, tagText, className="") {
    var tag = document.createElement(tagName);
    tag.innerText = tagText;
    tag.className = className;
    return tag;
}

function addNewTak() {
    var taskTitle = document.querySelector("#taskTitle").value;
    var taskDesc = document.querySelector("#taskDesc").value;
    var startDate = document.querySelector("#startDate").value;
    var endDate = document.querySelector("#endDate").value;
    var status = "Open";

    var created = new Date();
    created = created.toDateString();

    var ul = document.querySelector("#taskList");
    var li = document.createElement("li");

    li.appendChild(newTag("h4", taskTitle));
    li.appendChild(newTag("p", taskDesc));
    li.appendChild(newTag("span", "Start Date : " + startDate));
    li.appendChild(newTag("span", "End Date : " + endDate));
    li.appendChild(newTag("button", "Delete Task", "btn btn-danger me-3"));
    li.appendChild(newTag("button", "Edit Task", "btn btn-warning"));
    li.appendChild(newTag("p", "Created On : " + created));
    li.appendChild(newTag("p", "Status : " + status));

    taskObject.addTask(taskTitle, taskDesc, startDate, endDate, created, status);

    ul.appendChild(li);
}
window.addEventListener("load", bindEvents);

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

    var ul = document.querySelector("#taskList");
    // this is how we create element using JS on runtime
    var li = document.createElement("li");

    li.appendChild(newTag("h4", taskTitle));
    li.appendChild(newTag("p", taskDesc));
    li.appendChild(newTag("span", "Start Date : " + startDate));
    li.appendChild(newTag("span", "End Date : " + endDate));
    li.appendChild(newTag("button", "Delete Task", "btn btn-danger"));
    li.appendChild(newTag("button", "Edit Task", "btn btn-warning"));

    ul.appendChild(li);
}
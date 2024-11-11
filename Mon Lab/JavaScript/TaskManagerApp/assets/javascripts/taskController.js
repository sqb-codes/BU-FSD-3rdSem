window.addEventListener("load", bindEvents);

function bindEvents() {
    document.querySelector("#addTaskBtn").addEventListener("click", addNewTask);
}

function addTag(tagName, tagText, className="") {
    var tag = document.createElement(tagName);
    tag.innerText = tagText;
    tag.className = className;
    return tag;
} 

function addNewTask() {
    var ul = document.querySelector("#taskList");
    var li = document.createElement("li");
    // li.className = "list-group-item";

    var taskTitle = document.querySelector("#taskTitle").value;
    var taskDesc = document.querySelector("#taskDesc").value;
    var startDate = document.querySelector("#startDate").value;
    var endDate = document.querySelector("#endDate").value;

    var createdOn = new Date();
    createdOn = createdOn.toDateString();

    li.appendChild(addTag("h4", taskTitle));
    li.appendChild(addTag("p", taskDesc));
    li.appendChild(addTag("span", "Start Date : " + startDate, "d-block"));
    li.appendChild(addTag("span", "End Date : " + endDate, "d-block"));
    // li.appendChild(addTag("button", "Delete Task", "btn btn-danger"));
    // li.appendChild(addTag("button", "Edit Task", "btn btn-warning"));

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Task";
    deleteBtn.className = "btn btn-danger";

    var editBtn = document.createElement("button");
    editBtn.innerText = "Edit Task";
    editBtn.className = "btn btn-warning";

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    li.appendChild(addTag("p", "Created On : " + createdOn));

    ul.appendChild(li);

    deleteBtn.addEventListener("click", deleteTask);

}

function deleteTask() {
    
}
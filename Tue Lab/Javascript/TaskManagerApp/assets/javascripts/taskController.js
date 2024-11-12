function initEvents() {
    document.querySelector("#addTask").addEventListener("click", addTask);
}

function createTag(tagName, tagText, tagClass) {
    var tag = document.createElement(tagName);
    tag.innerText = tagText;
    tag.className = tagClass
    return tag;
}

function addTask() {
    var ul = document.querySelector("#taskList");
    var li = document.createElement("li");

    var taskTitle = document.querySelector("#taskTitle").value;
    var taskDesc = document.querySelector("#taskDesc").value;
    var startDate = document.querySelector("#startDate").value;
    var endDate = document.querySelector("#endDate").value;
    
    // var h4 = document.createElement("h4");
    // h4.innerText = taskTitle;
    // li.appendChild(h4);

    var createdOn = new Date().toDateString();

    taskObject.addNewTask(taskTitle, taskDesc, startDate, endDate, createdOn);

    li.appendChild(createTag("h4", taskTitle));
    li.appendChild(createTag("p", taskDesc));
    li.appendChild(createTag("span", "Start Date : " + startDate));
    li.appendChild(createTag("span", `End Date : ${endDate}`));
    li.appendChild(createTag("p", "Created On : " + createdOn, "mt-3"));

    var deleteBtn = createTag("button", "Delete Task", "btn btn-danger");
    var editBtn = createTag("button", "Edit Task", "btn btn-warning");

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    ul.appendChild(li);
}

initEvents();
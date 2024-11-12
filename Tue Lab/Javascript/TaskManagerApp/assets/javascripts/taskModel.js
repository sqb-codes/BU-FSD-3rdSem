// Function as a constructor
// function Task(id, title, desc, startDate, endDate, createdOn, status) {
//     this.id = id;
//     this.title = title;
//     this.desc = desc;
//     this.startDate = startDate;
//     this.endDate = endDate;
//     this.createdOn = createdOn;
//     this.status = status;
// }

class Task {
    constructor(id, title, desc, startDate, endDate, createdOn, status) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.startDate = startDate;
        this.endDate = endDate;
        this.createdOn = createdOn;
        this.status = status;
    }
}

var taskObject = {
    taskArray : [],
    taskId : 0,
    taskStatus : "Open",
    addNewTask : function(title, desc, startDate, endDate, createdOn) {
        this.taskId++;
        var task = new Task(this.taskId, title, desc, startDate, endDate, createdOn, this.taskStatus);
        this.taskArray.push(task);
        console.log(this.taskArray);
    },

    deleteTask : function() {

    },

    updateTask : function() {

    },

    searchTask : function() {

    },

    sortTask : function() {

    }
}
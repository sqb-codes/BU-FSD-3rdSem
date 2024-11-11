// Function as a constructor
// function Task(taskId, title, desc, startDate, endDate, createdOn, status) {
//     this.taskId = taskId;
//     this.title = title;
//     this.desc = desc;
//     this.startDate = startDate;
//     this.endDate = endDate;
//     this.createdOn = createdOn;
//     this.status = status;
// }

class Task {
    constructor(taskId, title, desc, startDate, endDate, createdOn, status) {
        this.taskId = taskId;
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
    addTask : function(title, desc, startDate, endDate, createdOn, status) {
        this.taskId++;
        var task = new Task(this.taskId, title, desc, startDate, endDate, createdOn, status)
        this.taskArray.push(task);
        console.log(this.taskArray);
    },

    deleteTask : function() {

    },

    updateTask : function() {

    },

    searchTask : function() {

    }
}
// Function as a constructor
// function Task(taskId, title, desc, startDate, endDate) {
//     this.taskId = taskId;
//     this.title = title;
//     this.desc = desc;
//     this.startDate = startDate;
//     this.endDate = endDate;
// }

class Task {
    constructor(taskId, title, desc, startDate, endDate, createdOn) {
        this.taskId = taskId;
        this.title = title;
        this.desc = desc;
        this.startDate = startDate;
        this.endDate = endDate;
        this.createdOn = createdOn;
    }
}


var taskObject = {
    taskArray : [],
    taskId: 0,
    addTask : function(title, desc, startDate, endDate, createdOn) {
        this.taskId++;
        var task = new Task(this.taskId, title, desc, startDate, endDate, createdOn);
        this.taskArray.push(task);
        console.log(this.taskArray);
    },

    deleteTask : function() {

    },

    udpateTask : function() {

    }
}
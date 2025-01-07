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
    status: "Open",
    // create new object of class Task and push that object to array
    addTask : function(title, desc, startDate, endDate, createdOn) {
        this.taskId++;
        var task = new Task(this.taskId, title, desc, startDate, endDate, createdOn, this.status)
        this.taskArray.push(task);
        console.log(this.taskArray);
    },

    deleteTask : function(id) {
        // this.taskArray = this.taskArray.filter(function(obj) {
        //     return obj.taskId != id;
        // });
        
        this.taskArray = this.taskArray.filter((obj) => obj.taskId != id);
    },

    sortTask : function() {
        // this.taskArray = taskObject.taskArray.sort((a,b) => new Date(a.startDate) - new Date(b.startDate));
    },

    updateTask : function() {

    },

    searchTask : function() {

    }
}
// Model - Business Logic

// Function as a constructor
// function Task(taskId, taskTitle, taskDesc, startDate, endDate) {
//     this.taskId = taskId;
//     this.taskTitle = taskTitle;
// }

// Introduced in ES2015
class Task {
    constructor(taskId, taskTitle, taskDesc, startDate, endDate, createdOn, status) {
        this.taskId = taskId;
        this.taskTitle = taskTitle;
        this.taskDesc = taskDesc;
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

    addTask : function(taskTitle, taskDesc, startDate, endDate, createdOn) {
        this.taskId++;
        var task = new Task(this.taskId, taskTitle, taskDesc, startDate, endDate, createdOn, this.taskStatus);
        this.taskArray.push(task);
        console.log(this.taskArray);
    },

    deleteTask : function(id) {
        // console.log(id);
        // this.taskArray = this.taskArray.filter(function(obj) {
        //     return obj.taskId != id;
        // });

        this.taskArray = this.taskArray.filter((obj) => {
            return obj.taskId != id;
        });
    },

    updateTask : function() {

    },

    searchTask : function(searchValue) {
        
    },

    sortTask : function(sortCriteria, sortOrder) {
        // taskObject.taskArray.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        if(sortOrder == "asc") {
            this.taskArray = taskObject.taskArray.sort((a, b) => new Date(a[sortCriteria]) - new Date(b[sortCriteria]));
        } else {
            this.taskArray = taskObject.taskArray.sort((a, b) => new Date(b[sortCriteria]) - new Date(a[sortCriteria]));
        }
    }
}
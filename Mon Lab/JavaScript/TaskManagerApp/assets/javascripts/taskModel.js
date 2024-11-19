// function as a constructor
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

// Object() - parent of all classes and function
var taskObject = {
    taskArray : [],
    taskId : 0,
    status : "Open",
    addTask : function(title, desc, startDate, endDate, createdOn) {
        this.taskId++;
        var task = new Task(this.taskId, title, desc, startDate, endDate, createdOn, this.status);
        this.taskArray.push(task);
        console.log(this.taskArray);
    },

    deleteTask : function(id) {
        this.taskArray = this.taskArray.filter(function(obj) {
            return obj.id != id;
        });
    },

    updateTask : function() {

    },

    sortTask : function(sortCriteria, sortOrder) {
        if(sortOrder == "asc") {
            taskObject.taskArray = taskObject.taskArray.sort(function(a, b) {
                return new Date(a[sortCriteria]) - new Date(b[sortCriteria]);
            });
        }
        else  {
            taskObject.taskArray = taskObject.taskArray.sort(function(a, b) {
                return new Date(b[sortCriteria]) - new Date(a[sortCriteria]);
            })
        }
    },

    searchTask : function() {

    }
}
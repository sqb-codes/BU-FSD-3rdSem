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

    deleteTask : function(id) {
        // this.taskArray = this.taskArray.filter(function(item) {
        //     return item.taskId != id;
        // });

        this.taskArray = this.taskArray.filter((item) => {
            return item.taskId != id;
        });
    },

    udpateTask : function() {

    },

    sortTask : function(criteria, order) {
        if(order == "asc") {
            this.taskArray = this.taskArray.sort((a,b) => {
                return new Date(a[criteria]) - new Date(b[criteria]);
            });
        } else {
            this.taskArray = this.taskArray.sort((a,b) => {
                return new Date(b[criteria]) - new Date(a[criteria]);
            });
        }
        console.log(this.taskArray);
    }
}
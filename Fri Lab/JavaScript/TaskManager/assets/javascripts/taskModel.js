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

var taskModel = {
    taskArray : [],
    taskId : 0,
    taskStatus : "Open",
    addTask : function(taskTitle, taskDesc, startDate, endDate, createdOn) {
        this.taskId++;
        let task = new Task(this.taskId, taskTitle, taskDesc, startDate, endDate, createdOn);
        this.taskArray.push(task);
        console.log(this.taskArray);
    },

    deleteTask : function(id) {
        // this.taskArray = this.taskArray.filter(function(obj) {
        //     return obj.id != id;
        // })
        this.taskArray = this.taskArray.filter((obj) => obj.id != id);
    },

    searchTask : function() {

    },

    sortTask : function() {
        // taskModel.taskArray.sort((a,b) => new Date(b.startDate) - new Date(a.startDate));
    },

    updateTask : function() {

    }
}
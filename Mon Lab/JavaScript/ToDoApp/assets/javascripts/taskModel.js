class Task {
    constructor(id, title, desc, startDate, endDate, currentDate) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.startDate = startDate;
        this.endDate = endDate;
        this.currentDate = currentDate;
    }
}

var taskObject = {
    taskArray : [],
    taskId : 0,
    addTask : function(title, desc, startDate, endDate, currentDate) {
        this.taskId++;
        var task = new Task(this.taskId, title, desc, startDate, endDate, currentDate);
        this.taskArray.push(task);
        console.log(this.taskArray);
    },

    deleteTask : function(id) {
        this.taskArray = this.taskArray.filter((obj) => obj.id != id);
    },

    sortTask : function() {
        // taskObject.taskArray.sort((a,b) =>  new Date(a["startDate"]) - new Date(b["startDate"]));
        // taskObject.taskArray.sort((a,b) =>  new Date(b["startDate"]) - new Date(a["startDate"]));
    }
}
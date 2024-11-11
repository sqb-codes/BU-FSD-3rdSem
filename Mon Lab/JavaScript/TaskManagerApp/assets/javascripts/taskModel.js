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
    taskId : 0
}
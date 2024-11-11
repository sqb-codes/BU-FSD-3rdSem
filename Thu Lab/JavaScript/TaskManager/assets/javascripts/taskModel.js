// Model - Business Logic

// Function as a constructor
// function Task(taskId, taskTitle, taskDesc, startDate, endDate) {
//     this.taskId = taskId;
//     this.taskTitle = taskTitle;
// }

// Introduced in ES2015
class Task {
    constructor(taskId, taskTitle, taskDesc, startDate, endDate) {
        this.taskId = taskId;
        this.taskTitle = taskTitle;
        this.taskDesc = taskDesc;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}


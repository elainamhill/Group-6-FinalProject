//Task Manager class contructor
class TaskManager {

    tasks;
    currentId;

    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate) {
        this.currentId++;
        const id = this.currentId;
        this.tasks.push({name, description, assignedTo, dueDate, id, status: 'TODO'});
    }
}
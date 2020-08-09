export class Tarea {
    id: number;
    title: string;
    priority: string;
    completed: boolean;

    constructor(pId = 0, pTitle = '', pPriority = '', pCompleted = false) {
        this.id = pId;
        this.title = pTitle;
        this.priority = pPriority;
        this.completed = pCompleted;
    }
}
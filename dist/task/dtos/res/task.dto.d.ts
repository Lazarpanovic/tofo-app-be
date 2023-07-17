import { Task } from "src/database/entities/task.entity";
export declare class TaskRes {
    id: string;
    description: string;
    taskType: string;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    constructor(task: Task);
}

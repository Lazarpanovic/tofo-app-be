import { Task } from "src/database/entities/task.entity";

export class TaskRes {
  id: string;
  description: string;
  taskType: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor (task: Task) {
    this.id = task.id;
    this.description = task.description;
    this.taskType = task.taskType;
    this.isCompleted = task.isCompleted;
    this.createdAt = task.createdAt;
    this.updatedAt = task.updatedAt;
  }
}
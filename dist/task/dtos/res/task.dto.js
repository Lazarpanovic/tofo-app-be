"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRes = void 0;
class TaskRes {
    constructor(task) {
        this.id = task.id;
        this.description = task.description;
        this.taskType = task.taskType;
        this.isCompleted = task.isCompleted;
        this.createdAt = task.createdAt;
        this.updatedAt = task.updatedAt;
    }
}
exports.TaskRes = TaskRes;
//# sourceMappingURL=task.dto.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_entity_1 = require("../database/entities/task.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_2 = require("@nestjs/common");
const crypto = require('crypto');
let TasksService = class TasksService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async createTask(payload) {
        let task = new task_entity_1.Task();
        if (payload.taskType !== 'Business' && payload.taskType !== 'Personal') {
            throw new common_2.BadRequestException();
        }
        task.description = payload.description;
        task.taskType = payload.taskType;
        return this.taskModel.save(task);
    }
    async getTasks() {
        return this.taskModel.find();
    }
    async getTask(taskId) {
        return this.findTask(taskId);
    }
    async updateTask(taskId, payload) {
        const updatedTask = await this.findTask(taskId);
        if (payload) {
            updatedTask.description = payload.description;
            updatedTask.isCompleted = payload.isCompleted;
        }
        await this.taskModel.save(updatedTask);
    }
    async removeTask(taskId) {
        const result = await this.taskModel.delete(taskId);
        if (result.affected === 0) {
            throw new common_2.NotFoundException('Task does not exist.');
        }
    }
    async findTask(taskId) {
        let task = await this.taskModel.findOneById(taskId);
        if (!task) {
            throw new common_2.NotFoundException('Could not find task.');
        }
        return task;
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map
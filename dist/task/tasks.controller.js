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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const swagger_1 = require("@nestjs/swagger");
const update_task_dto_1 = require("./dtos/req/update-task.dto");
const create_task_dto_1 = require("./dtos/req/create-task.dto");
const task_dto_1 = require("./dtos/res/task.dto");
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    async addTask(payload) {
        const task = await this.tasksService.createTask(payload);
        return new task_dto_1.TaskRes(task);
    }
    async getTasks() {
        const tasks = await this.tasksService.getTasks();
        return tasks.map(task => new task_dto_1.TaskRes(task));
    }
    async getTask(taskId) {
        const task = await this.tasksService.getTask(taskId);
        return new task_dto_1.TaskRes(task);
    }
    async updateTask(taskId, payload) {
        const result = await this.tasksService.updateTask(taskId, payload);
        const task = await this.tasksService.getTask(taskId);
        return new task_dto_1.TaskRes(task);
    }
    async deleteTask(taskId) {
        this.tasksService.removeTask(taskId);
        return 'Succesfully deleted task';
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Created Succesfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskReq]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "addTask", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ description: 'The resources were returned successfully' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Unauthorized Request' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'The resource was returned successfully' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Unauthorized Request' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Resource not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTask", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'The resource was updated successfully' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Resource not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Unauthorized Request' }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_dto_1.UpdateTaskReq]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'The resource was returned successfully' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Unauthorized Request' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Resource not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteTask", null);
TasksController = __decorate([
    (0, swagger_1.ApiTags)('Tasks'),
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map
import { Task } from '../database/entities/task.entity';
import { Repository } from 'typeorm';
import { UpdateTaskReq } from './dtos/req/update-task.dto';
import { CreateTaskReq } from './dtos/req/create-task.dto';
export declare class TasksService {
    private readonly taskModel;
    constructor(taskModel: Repository<Task>);
    createTask(payload: CreateTaskReq): Promise<Task>;
    getTasks(): Promise<Task[]>;
    getTask(taskId: string): Promise<Task>;
    updateTask(taskId: string, payload: UpdateTaskReq): Promise<void>;
    removeTask(taskId: string): Promise<void>;
    findTask(taskId: string): Promise<Task>;
}

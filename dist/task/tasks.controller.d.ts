import { TasksService } from './tasks.service';
import { UpdateTaskReq } from './dtos/req/update-task.dto';
import { CreateTaskReq } from './dtos/req/create-task.dto';
import { TaskRes } from './dtos/res/task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    addTask(payload: CreateTaskReq): Promise<TaskRes>;
    getTasks(): Promise<TaskRes[]>;
    getTask(taskId: string): Promise<TaskRes>;
    updateTask(taskId: string, payload: UpdateTaskReq): Promise<TaskRes>;
    deleteTask(taskId: string): Promise<string>;
}

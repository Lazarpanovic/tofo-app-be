import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiUnprocessableEntityResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { UpdateTaskReq } from './dtos/req/update-task.dto';
import { CreateTaskReq } from './dtos/req/create-task.dto';
import { TaskRes } from './dtos/res/task.dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  async addTask(
    @Body() payload: CreateTaskReq,
  ) {
    const task = await this.tasksService.createTask(
      payload,
    );
    return new TaskRes(task);
  }

  @Get()
  @ApiOkResponse({ description: 'The resources were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  async getTasks() {
    const tasks = await this.tasksService.getTasks();
    return tasks.map(task => new TaskRes(task));
  }

  @Get(':id')
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  async getTask(@Param('id') taskId: string) {
    const task = await this.tasksService.getTask(taskId);
    return new TaskRes(task);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'The resource was updated successfully' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  async updateTask(
    @Param('id') taskId: string,
    @Body() payload: UpdateTaskReq,
  ) {
    const result = await this.tasksService.updateTask(
      taskId,
      payload,
    );

    const task = await this.tasksService.getTask(taskId);
    return new TaskRes(task);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  async deleteTask(@Param('id') taskId: string) {
    this.tasksService.removeTask(taskId);
    return 'Succesfully deleted task';
  }
}

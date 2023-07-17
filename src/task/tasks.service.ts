import { Injectable } from '@nestjs/common';
import { Task } from '../database/entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { UpdateTaskReq } from './dtos/req/update-task.dto';
import { CreateTaskReq } from './dtos/req/create-task.dto';

const crypto = require('crypto');

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskModel: Repository<Task>,
  ) {}

  async createTask(payload: CreateTaskReq): Promise<Task> {
    let task: Task = new Task();
    if (payload.taskType !== 'Business' && payload.taskType !== 'Personal') {
      throw new BadRequestException();
    }
    task.description = payload.description;
    task.taskType = payload.taskType;
    //task.authorId = payload.authorId
    return this.taskModel.save(task);
  }

  async getTasks(): Promise<Task[]> {
    return this.taskModel.find();
  }

  async getTask(taskId: string) {
    return this.findTask(taskId);
  }

  async updateTask(taskId: string, payload: UpdateTaskReq) {
    const updatedTask = await this.findTask(taskId);
    if (payload) {
      updatedTask.description = payload.description;
      updatedTask.isCompleted = payload.isCompleted;
    }
    await this.taskModel.save(updatedTask);
  }

  async removeTask(taskId: string) {
    const result = await this.taskModel.delete(taskId);
    if (result.affected === 0) {
      throw new NotFoundException('Task does not exist.');
    }
  }

  async findTask(taskId: string): Promise<Task> {
    let task = await this.taskModel.findOneById(taskId);
    if (!task) {
      throw new NotFoundException('Could not find task.');
    }
    return task;
  }
}

import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateTaskReq {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  taskType: string;

  @IsNotEmpty()
  @IsUUID()
  authorId: string;
}

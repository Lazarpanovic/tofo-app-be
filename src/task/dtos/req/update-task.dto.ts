import { IsOptional } from 'class-validator';

export class UpdateTaskReq {
  @IsOptional()
  description: string;

  @IsOptional()
  isCompleted: boolean;
}

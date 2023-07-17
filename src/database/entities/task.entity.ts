import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn()
  id: string;
  @Column({ type: 'varchar', length: 30, nullable: true })
  description: string;
  @Column({ type: 'varchar', length: 10, nullable: false })
  taskType: string;
  @Column({ type: 'boolean', nullable: true, default: false })
  isCompleted: boolean;

  // timestamps
  @CreateDateColumn({
    type: 'timestamp with time zone',
    name: 'createdAt',
  })
  createdAt: Date;
  @UpdateDateColumn({
    type: 'timestamp with time zone',
    name: 'updatedAt',
  })
  updatedAt: Date;
}

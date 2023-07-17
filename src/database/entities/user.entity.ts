// import {
//   Entity,
//   Column,
//   PrimaryColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
//   PrimaryGeneratedColumn,
//   OneToMany,
// } from 'typeorm';
// import { Task } from './task.entity';

// @Entity('user')
// export class User {
//   @PrimaryGeneratedColumn('uuid')
//   @PrimaryColumn()
//   id: string;
//   @Column({ type: 'varchar', length: 30, nullable: true })
//   name: string;

//   // relations
//   @OneToMany(() => Task, (task) => task.author)
//   tasks?: Task[];

//   // timestamps
//   @CreateDateColumn({
//     type: 'timestamp with time zone',
//     name: 'createdAt',
//   })
//   createdAt: Date;
//   @UpdateDateColumn({
//     type: 'timestamp with time zone',
//     name: 'updatedAt',
//   })
//   updatedAt: Date;
// }

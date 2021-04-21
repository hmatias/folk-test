import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

export class DefaultDate {
  @CreateDateColumn({
    update: false,
  })
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

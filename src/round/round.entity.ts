import { Comment } from 'src/comment/comment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';

@Entity()
export class Round extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contractAddress: string;

  @OneToMany(() => Comment, (comment) => comment.round, {
    eager: true,
    // cascade: true,
  })
  comments: Comment[];
}

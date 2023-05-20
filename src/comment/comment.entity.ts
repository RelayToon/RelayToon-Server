import { Round } from 'src/round/round.entity';
import {
  BaseEntity,
  Check,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  proposalId: number;

  @Column()
  userAddress: string;

  @Column('text')
  content: string;

  // 부모댓글 아이디
  @Column({ default: 0 })
  like: number;

  @CreateDateColumn()
  createdAt: Date;

  // 삭제 여부
  @Column({ default: false })
  deleteYn: boolean;

  // 추후 없앨 가능성 있음
  @ManyToOne(() => Round, (round) => round.comments, {
    onDelete: 'CASCADE',
  })
  round: Round;
}

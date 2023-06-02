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

  @Column({ default: 0 })
  like: number;

  @CreateDateColumn()
  createdAt: Date;

  // 삭제 여부
  @Column({ default: false })
  deleteYn: boolean;

  @ManyToOne(() => Round, (round) => round.comments, {
    onDelete: 'CASCADE',
  })
  round: Round;
}

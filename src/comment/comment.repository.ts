import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentRepository extends Repository<Comment> {
  constructor(private dataSource: DataSource) {
    super(Comment, dataSource.createEntityManager());
  }

  async createComment(commentDto: CommentDto): Promise<Comment> {
    const comment = this.create({
      ...commentDto,
      round: { id: commentDto.roundId },
    });
    await this.save(comment);
    return comment;
  }

  async deleteComment(commentId: number): Promise<void> {
    const comment = await this.findOneBy({ id: commentId });
    if (!comment) {
      throw new BadRequestException('존재하지 않는 댓글입니다.');
    }
  }

  async likeComment(commentId: number): Promise<void> {
    const comment = await this.findOneBy({ id: commentId });
    if (!comment) {
      throw new BadRequestException('존재하지 않는 댓글입니다.');
    }
    comment.like += 1;
    await this.save(comment);
  }
}

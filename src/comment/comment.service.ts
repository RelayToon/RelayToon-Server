import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CommentDto } from './dto/comment.dto';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  async createComment(commentDto: CommentDto): Promise<Comment> {
    return this.commentRepository.createComment(commentDto);
  }

  async getComments(roundId: number, proposalId: number): Promise<Comment[]> {
    return this.commentRepository.find({
      where: { round: { id: roundId }, proposalId },
      order: { id: 'ASC' },
    });
  }

  async deleteComment(commentId: number): Promise<void> {
    return this.commentRepository.deleteComment(commentId);
  }

  async likeComment(commentId: number): Promise<void> {
    return this.commentRepository.likeComment(commentId);
  }
}

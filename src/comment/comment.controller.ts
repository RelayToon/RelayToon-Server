import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { Comment } from './comment.entity';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  createComment(@Body() commentDto: CommentDto): Promise<Comment> {
    return this.commentService.createComment(commentDto);
  }

  @Get()
  getComments(
    @Query('roundId') roundId: number,
    @Query('proposalId') proposalId: number,
  ): Promise<Comment[]> {
    return this.commentService.getComments(roundId, proposalId);
  }

  @Delete(':id')
  deleteComment(@Param('id') commentId: number): Promise<void> {
    return this.commentService.deleteComment(commentId);
  }
}

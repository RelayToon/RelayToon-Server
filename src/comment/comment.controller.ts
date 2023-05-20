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

  // Comment 등록
  @Post()
  createComment(@Body() commentDto: CommentDto): Promise<Comment> {
    return this.commentService.createComment(commentDto);
  }

  // 제안별 Comment 조회
  @Get()
  getComments(
    @Query('roundId') roundId: number,
    @Query('proposalId') proposalId: number,
  ): Promise<Comment[]> {
    return this.commentService.getComments(roundId, proposalId);
  }

  // Comment 삭제
  @Delete(':id')
  deleteComment(@Param('id') commentId: number): Promise<void> {
    return this.commentService.deleteComment(commentId);
  }

  // 좋아요 누르기
  @Post('/like/:id')
  likeComment(@Param('id') commentId: number): Promise<void> {
    return this.commentService.likeComment(commentId);
  }
}

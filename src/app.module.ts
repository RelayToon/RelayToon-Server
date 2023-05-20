import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentModule } from './comment/comment.module';
import { RoundModule } from './round/round.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), CommentModule, RoundModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

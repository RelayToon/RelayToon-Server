import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as mime from 'mime-types';
import { ImageService } from './image.service';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, './uploads');
        },
        filename: (req, file, cb) => {
          cb(null, `${new Date().getTime()}.${mime.extension(file.mimetype)}`);
        },
      }),
      limits: {
        files: 1,
      },
      fileFilter(req, file, cb) {
        cb(null, true);
      },
    }),
  ],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}

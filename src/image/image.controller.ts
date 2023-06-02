import {
  Controller,
  Get,
  Post,
  Response,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File): Promise<void> {
    return this.imageService.uploadImage(file);
  }

  @Get()
  downloadAllImage(@Response() res) {
    return this.imageService.downloadAllImage(res);
  }
}

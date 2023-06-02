import { Injectable } from '@nestjs/common';
import { Response } from 'express';
// eslint-disable-next-line
const path = require('path'); // import path from 'path';
// eslint-disable-next-line
const fs = require('fs/promises'); // import path from 'path';
import { NFTStorage, File, Blob } from 'nft.storage';

@Injectable()
export class ImageService {
  async uploadImage(file: Express.Multer.File): Promise<void> {
    const NFT_STORAGE_TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU1RUQ2ZjQyZDYwQUExOGM1NDgxNzI0YkZGZUM0NmM5ZTM1OThGZjMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NDQ2NzIxNzE0NCwibmFtZSI6InBhbmd5b2Vsb24ifQ.pV5R1O4NaG4UyPPTbyVIRP3HsDvUEaOuZW7cdsvDzPs';
    const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

    const data = await fs.readFile(
      path.join(process.cwd(), `./uploads/${file.filename}`),
    );

    const imageFile = new File([data], 'nft.png', { type: 'image/png' });
    const metadata = await client.store({
      name: 'My sweet NFT',
      description: "Just try to funge it. You can't do it.",
      image: imageFile,
    });
    console.log(metadata);
    // res.sendFile(path.join(process.cwd(), `./uploads/${file.filename}`));
    // const metadata = await client.store
  }

  async downloadAllImage(res: Response) {
    // const directoryPath = path.join(process.cwd(), './uploads');

    // const files = await fs.promises.readdir(directoryPath);

    // const sortedFiles = files.sort();

    res.sendFile(path.join(process.cwd(), './uploads/1685680631901.png'));
  }
}

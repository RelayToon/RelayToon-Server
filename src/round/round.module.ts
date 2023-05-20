import { Module } from '@nestjs/common';
import { RoundController } from './round.controller';
import { RoundService } from './round.service';
import { RoundRepository } from './round.repository';

@Module({
  imports: [],
  controllers: [RoundController],
  providers: [RoundService, RoundRepository],
  // exports: [RoundService, RoundRepository],
})
export class RoundModule {}

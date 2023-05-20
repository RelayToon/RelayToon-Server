import { Module } from '@nestjs/common';
import { RoundController } from './round.controller';
import { RoundService } from './round.service';
import { RoundRepository } from './round.repository';

@Module({
  controllers: [RoundController],
  providers: [RoundService, RoundRepository],
})
export class RoundModule {}

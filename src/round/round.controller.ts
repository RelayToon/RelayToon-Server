import { Body, Controller, Post } from '@nestjs/common';
import { RoundService } from './round.service';
import { Round } from './round.entity';
import { RoundDto } from './dto/round.dto';

@Controller('Round')
export class RoundController {
  constructor(private readonly roundService: RoundService) {}

  // Round 등록
  @Post()
  createRound(@Body() roundDto: RoundDto): Promise<Round> {
    return this.roundService.createRound(roundDto);
  }
}

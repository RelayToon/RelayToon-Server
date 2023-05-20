import { Injectable } from '@nestjs/common';
import { RoundRepository } from './round.repository';
import { Round } from './round.entity';
import { RoundDto } from './dto/round.dto';

@Injectable()
export class RoundService {
  constructor(private readonly roundRepository: RoundRepository) {}

  async createRound(roundDto: RoundDto): Promise<Round> {
    return this.roundRepository.createRound(roundDto);
  }
}

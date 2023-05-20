import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Round } from './round.entity';
import { RoundDto } from './dto/round.dto';

@Injectable()
export class RoundRepository extends Repository<Round> {
  constructor(private dataSource: DataSource) {
    super(Round, dataSource.createEntityManager());
  }

  async createRound(roundDto: RoundDto): Promise<Round> {
    const round = this.create(roundDto);
    await this.save(round);
    return round;
  }
}

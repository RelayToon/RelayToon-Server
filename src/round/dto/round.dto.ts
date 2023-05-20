import { IsNotEmpty, IsString } from 'class-validator';

export class RoundDto {
  @IsNotEmpty()
  @IsString()
  readonly contractAddress: string;
}

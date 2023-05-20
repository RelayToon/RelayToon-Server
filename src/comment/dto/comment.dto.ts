import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CommentDto {
  // @IsEthereumAddress()?? near주소에서도 되는지 확인
  // 인증수단 설정 후 삭제해야할 컬럼
  @IsNotEmpty()
  @IsString()
  readonly userAddress: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsNumber()
  readonly proposalId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly roundId: number;
}

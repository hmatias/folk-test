import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmailDTO {
  @IsString()
  @IsNotEmpty()
  value: string;

  @IsBoolean()
  @Type(() => Boolean)
  isPrimary: boolean;
}

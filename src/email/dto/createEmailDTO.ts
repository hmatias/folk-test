import { Type } from 'class-transformer';
import { IsBoolean, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateEmailDTO {
  @IsEmail()
  @IsNotEmpty()
  value: string;

  @IsBoolean()
  @Type(() => Boolean)
  isPrimary: boolean;
}

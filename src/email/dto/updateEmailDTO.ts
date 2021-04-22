import { Type } from 'class-transformer';
import { IsBoolean, IsEmail, IsOptional } from 'class-validator';

export class UpdateEmailDTO {
  @IsEmail()
  @IsOptional()
  value: string;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  isPrimary: boolean;
}

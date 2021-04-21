import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateEmailDTO {
  @IsString()
  @IsOptional()
  value: string;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  isPrimary: boolean;
}

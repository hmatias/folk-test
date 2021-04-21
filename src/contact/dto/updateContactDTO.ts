import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { CreateEmailDTO } from '../../email/dto/createEmailDTO';
import { CustomFieldDTO } from '../../custom-field/dto/customFieldDTO';

export class UpdateContactDTO {
  @IsString()
  @IsOptional()
  pFirstname: string;

  @IsString()
  @IsOptional()
  pLastname: string;

  @IsString()
  @IsOptional()
  cName: string;

  @IsArray()
  @IsOptional()
  @Type(() => CreateEmailDTO)
  email: CreateEmailDTO[];

  @IsArray()
  @Type(() => CustomFieldDTO)
  customField: CustomFieldDTO[];
}

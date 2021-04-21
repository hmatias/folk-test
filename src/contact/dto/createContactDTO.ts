import { Type } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { CreateEmailDTO } from '../../email/dto/createEmailDTO';
import { CustomFieldDTO } from '../../custom-field/dto/customFieldDTO';

export class CreateContactDTO {
  constructor() {
    this.pFirstname = '';
    this.pLastname = '';
    this.cName = '';
    this.email = [];
    this.customField = [];
  }

  @IsString()
  pFirstname: string;

  @IsString()
  pLastname: string;

  @IsString()
  cName: string;

  @IsArray()
  @Type(() => CreateEmailDTO)
  email: CreateEmailDTO[];

  @IsArray()
  @Type(() => CustomFieldDTO)
  customField: CustomFieldDTO[];
}

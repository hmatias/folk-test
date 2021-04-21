import { Type } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { CreateEmailDTO } from '../../email/dto/createEmailDTO';

export class CreateContactDTO {
  @IsString()
  pFirstname: string;

  @IsString()
  pLastname: string;

  @IsString()
  cName: string;

  @IsArray()
  @Type(() => CreateEmailDTO)
  email: CreateEmailDTO[];
}

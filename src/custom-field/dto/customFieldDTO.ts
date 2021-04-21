import { IsString } from 'class-validator';

export class CustomFieldDTO {
  @IsString()
  name: string;

  @IsString()
  value: string;
}

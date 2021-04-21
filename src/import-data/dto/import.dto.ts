import { IsJSON, IsNotEmpty, IsString } from 'class-validator';

export class ImportDTO {
  @IsString()
  @IsNotEmpty()
  filePath: string;

  @IsJSON()
  @IsNotEmpty()
  mapping: string;
}

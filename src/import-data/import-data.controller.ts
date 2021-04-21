import { Body, Controller, Post } from '@nestjs/common';
import { Contact } from 'src/contact/entities/contact.entity';
import { ImportDTO } from './dto/import.dto';
import { ImportDataService } from './import-data.service';

@Controller('import')
export class ImportDataController {
  constructor(private readonly importService: ImportDataService) {}

  @Post()
  async import(@Body() importParam: ImportDTO): Promise<Contact[]> {
    return await this.importService.import(importParam);
  }
}

import { Injectable } from '@nestjs/common';
import { ContactService } from 'src/contact/contact.service';
import { CreateContactDTO } from 'src/contact/dto/createContactDTO';
import { ImportDTO } from './dto/import.dto';
import { Mapper } from './mapper/mapper';
import { CSVReader } from './readers/CSVReader';
import { Reader } from './readers/readers';

@Injectable()
export class ImportDataService {
  constructor(private contactService: ContactService) {}

  async import(importParam: ImportDTO): Promise<any> {
    const reader: Reader = new Reader(new CSVReader());
    const mapper: Mapper = new Mapper();
    const contactDTOS: CreateContactDTO[] = [];

    const mapping: JSON = JSON.parse(importParam.mapping);

    const data = await reader.read(importParam.filePath);
    await data.map(async (row) => {
      if (!row.every((val) => val === '')) {
        const contact = await mapper.createDTO(row, mapping);
        contactDTOS.push(contact);
      }
    });
    return await this.contactService.addMany(contactDTOS);
  }
}

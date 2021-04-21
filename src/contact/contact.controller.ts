import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDTO } from './dto/createContactDTO';
import { UpdateContactDTO } from './dto/updateContactDTO';
import { Contact } from './entities/contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() newContact: CreateContactDTO): Promise<Contact> {
    return await this.contactService.add(newContact);
  }

  @Get()
  async getContacts(): Promise<Contact[]> {
    return await this.contactService.findAll();
  }

  @Get(':id')
  getOneContact(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() contact: UpdateContactDTO) {
    return this.update(id, contact);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.contactService.delete(id);
  }
}

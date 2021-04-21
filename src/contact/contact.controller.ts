import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
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
  async getOneContact(@Param('id') id: string): Promise<Contact> {
    return await this.contactService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() contact: UpdateContactDTO,
  ): Promise<Contact> {
    return await this.update(id, contact);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.contactService.delete(id);
  }
}

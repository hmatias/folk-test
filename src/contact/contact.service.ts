import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateContactDTO } from './dto/createContactDTO';
import { UpdateContactDTO } from './dto/updateContactDTO';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async add(contact: CreateContactDTO): Promise<Contact> {
    const newContact = await this.contactRepository.save(contact);

    return await newContact;
  }

  async findOne(id: string): Promise<Contact> {
    return await this.contactRepository.findOne(id);
  }

  async findAll(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }

  async update(id: string, contact: UpdateContactDTO) {
    const newContact = await this.contactRepository.preload({
      id,
      ...contact,
    });
    if (!newContact)
      throw new NotFoundException(`contact id ${id} does not exists`);
    return await this.contactRepository.save(newContact);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }
}

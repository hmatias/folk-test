import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateEmailDTO } from './dto/createEmailDTO';
import { UpdateEmailDTO } from './dto/updateEmailDTO';
import { Email } from './entities/email.entity';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private emailRepository: Repository<Email>,
  ) {}

  async add(email: CreateEmailDTO): Promise<Email> {
    return await this.emailRepository.save(email);
  }

  async findOne(id: string): Promise<Email> {
    return await this.emailRepository.findOne(id);
  }

  async findAll(): Promise<Email[]> {
    return await this.emailRepository.find();
  }

  async update(id: string, email: UpdateEmailDTO) {
    const newEmail = await this.emailRepository.preload({
      id,
      ...email,
    });
    if (!newEmail)
      throw new NotFoundException(`email id ${id} does not exists`);
    return await this.emailRepository.save(newEmail);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.emailRepository.delete(id);
  }
}

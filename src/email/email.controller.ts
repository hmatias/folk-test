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
import { CreateEmailDTO } from './dto/createEmailDTO';
import { UpdateEmailDTO } from './dto/updateEmailDTO';
import { EmailService } from './email.service';
import { Email } from './entities/email.entity';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  async getMails(): Promise<Email[]> {
    return await this.emailService.findAll();
  }

  @Get(':id')
  async getOneMail(@Param('id') id: string): Promise<Email> {
    return await this.emailService.findOne(id);
  }

  @Post()
  async create(@Body() newEmail: CreateEmailDTO): Promise<Email> {
    return await this.emailService.add(newEmail);
  }

  @Patch('id')
  async update(@Param('id') id, @Body() email: UpdateEmailDTO): Promise<Email> {
    return await this.emailService.update(id, email);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.emailService.delete(id);
  }
}

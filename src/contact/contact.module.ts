import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailModule } from 'src/email/email.module';
import { EmailService } from 'src/email/email.service';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact]), EmailModule],
  controllers: [ContactController],
  providers: [ContactService, EmailService],
  exports: [ContactService, TypeOrmModule],
})
export class ContactModule {}

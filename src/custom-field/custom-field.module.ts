import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomFieldController } from './custom-field.controller';
import { CustomFieldService } from './custom-field.service';
import { CustomField } from './entities/customField.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomField])],
  controllers: [CustomFieldController],
  providers: [CustomFieldService],
  exports: [CustomFieldService, TypeOrmModule],
})
export class CustomFieldModule {}

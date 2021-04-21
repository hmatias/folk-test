import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CustomFieldDTO } from './dto/customFieldDTO';
import { CustomField } from './entities/customField.entity';

@Injectable()
export class CustomFieldService {
  constructor(
    @InjectRepository(CustomField)
    private customFieldRepository: Repository<CustomField>,
  ) {}

  async update(id: string, customField: CustomFieldDTO) {
    const newCustomField = await this.customFieldRepository.preload({
      id,
      ...customField,
    });
    if (!newCustomField)
      throw new NotFoundException(`email id ${id} does not exists`);
    return await this.customFieldRepository.save(newCustomField);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.customFieldRepository.delete(id);
  }
}

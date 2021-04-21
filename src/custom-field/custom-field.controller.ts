import { Body, Controller, Delete, Param, Patch } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CustomFieldService } from './custom-field.service';
import { CustomField } from './entities/customField.entity';

@Controller('custom-field')
export class CustomFieldController {
  constructor(private customFieldService: CustomFieldService) {}

  @Patch('id')
  async update(
    @Param('id') id,
    @Body() customField: CustomField,
  ): Promise<CustomField> {
    return await this.customFieldService.update(id, customField);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.customFieldService.delete(id);
  }
}

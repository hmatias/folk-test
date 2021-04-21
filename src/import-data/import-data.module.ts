import { Module } from '@nestjs/common';
import { ContactModule } from 'src/contact/contact.module';
import { ImportDataController } from './import-data.controller';
import { ImportDataService } from './import-data.service';

@Module({
  imports: [ContactModule],
  controllers: [ImportDataController],
  providers: [ImportDataService],
})
export class ImportDataModule {}

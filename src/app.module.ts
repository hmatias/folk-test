import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { ContactModule } from './contact/contact.module';
import { ImportDataModule } from './import-data/import-data.module';
import { CustomFieldModule } from './custom-field/custom-field.module';

@Module({
  imports: [
    EmailModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.18.0.44',
      port: 5432,
      username: 'folk',
      password: 'folk',
      database: 'folkdb',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ContactModule,
    ImportDataModule,
    CustomFieldModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { Email } from './entities/email.entity';

describe('EmailController', () => {
  let controller: EmailController;
  let emailRepositeory: Repository<Email>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        {
          provide: getRepositoryToken(Email),
          useValue: Repository,
        },
      ],
      controllers: [EmailController],
      imports: [TypeOrmModule.forFeature([Email])],
    }).compile();

    controller = module.get<EmailController>(EmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

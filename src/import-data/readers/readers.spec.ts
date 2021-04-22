import { Test, TestingModule } from '@nestjs/testing';
import { Reader } from './readers';

describe('ReadersService', () => {
  let service: Reader;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Reader],
    }).compile();

    service = module.get<Reader>(Reader);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CustomFieldController } from './custom-field.controller';

describe('CustomFieldController', () => {
  let controller: CustomFieldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomFieldController],
    }).compile();

    controller = module.get<CustomFieldController>(CustomFieldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

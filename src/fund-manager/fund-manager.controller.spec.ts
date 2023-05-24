import { Test, TestingModule } from '@nestjs/testing';
import { FundManagerController } from './fund-manager.controller';

describe('FundManagerController', () => {
  let controller: FundManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundManagerController],
    }).compile();

    controller = module.get<FundManagerController>(FundManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

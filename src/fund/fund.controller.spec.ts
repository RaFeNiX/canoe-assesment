import { Test, TestingModule } from '@nestjs/testing';
import { FundController } from './fund.controller';
import { FundService } from './fund.service';
import { Fund } from '@prisma/client';

describe('FundController', () => {
  let controller: FundController;
  let service: FundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundController],
      providers: [FundService],
    }).compile();

    controller = module.get<FundController>(FundController);
    service = module.get<FundService>(FundService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new fund', async () => {
      const createFundInput: Fund = {
        id: 1,
        name: 'Fund A',
        startYear: 2023,
        managerId: 1,
      };
      const createdFund: Fund = { ...createFundInput };
      jest.spyOn(service, 'create').mockResolvedValue(createdFund);

      const result = await controller.create(createFundInput);

      expect(service.create).toHaveBeenCalledWith(createFundInput);
      expect(result).toEqual(createdFund);
    });
  });

  describe('findAll', () => {
    it('should return an array of funds', async () => {
      const funds: Fund[] = [
        { id: 1, name: 'Fund A', startYear: 2023, managerId: 1 },
        { id: 2, name: 'Fund B', startYear: 2024, managerId: 2 },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(funds);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual(funds);
    });
  });

  describe('findOne', () => {
    it('should return a specific fund', async () => {
      const fundId = 1;
      const fund: Fund = {
        id: fundId,
        name: 'Fund A',
        startYear: 2023,
        managerId: 1,
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(fund);

      const result = await controller.findOne(fundId.toString());

      expect(service.findOne).toHaveBeenCalledWith(fundId);
      expect(result).toEqual(fund);
    });
  });

  describe('update', () => {
    it('should update a specific fund', async () => {
      const fundId = 1;
      const updateFundInput: Fund = {
        id: 1,
        name: 'Fund B',
        startYear: 2024,
        managerId: 1,
      };
      const updatedFund: Fund = { id: fundId, ...updateFundInput };
      jest.spyOn(service, 'update').mockResolvedValue(updatedFund);

      const result = await controller.update(
        fundId.toString(),
        updateFundInput,
      );

      expect(service.update).toHaveBeenCalledWith(fundId, updateFundInput);
      expect(result).toEqual(updatedFund);
    });
  });

  describe('remove', () => {
    it('should remove a specific fund', async () => {
      const fundId = 1;
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);

      const result = await controller.remove(fundId.toString());

      expect(service.remove).toHaveBeenCalledWith(fundId);
      expect(result).toBeUndefined();
    });
  });
});

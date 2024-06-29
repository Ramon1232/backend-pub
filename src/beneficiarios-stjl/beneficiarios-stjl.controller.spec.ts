import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiariosStjlController } from './beneficiarios-stjl.controller';
import { BeneficiariosStjlService } from './beneficiarios-stjl.service';

describe('BeneficiariosStjlController', () => {
  let controller: BeneficiariosStjlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiariosStjlController],
      providers: [BeneficiariosStjlService],
    }).compile();

    controller = module.get<BeneficiariosStjlController>(BeneficiariosStjlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

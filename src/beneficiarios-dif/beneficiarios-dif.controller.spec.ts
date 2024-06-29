import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiariosDifController } from './beneficiarios-dif.controller';
import { BeneficiariosDifService } from './beneficiarios-dif.service';

describe('BeneficiariosDifController', () => {
  let controller: BeneficiariosDifController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiariosDifController],
      providers: [BeneficiariosDifService],
    }).compile();

    controller = module.get<BeneficiariosDifController>(BeneficiariosDifController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

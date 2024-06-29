import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiariosInjuveController } from './beneficiarios-injuve.controller';
import { BeneficiariosInjuveService } from './beneficiarios-injuve.service';

describe('BeneficiariosInjuveController', () => {
  let controller: BeneficiariosInjuveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiariosInjuveController],
      providers: [BeneficiariosInjuveService],
    }).compile();

    controller = module.get<BeneficiariosInjuveController>(BeneficiariosInjuveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

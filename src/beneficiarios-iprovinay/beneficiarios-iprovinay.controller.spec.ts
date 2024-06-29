import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiariosIprovinayController } from './beneficiarios-iprovinay.controller';
import { BeneficiariosIprovinayService } from './beneficiarios-iprovinay.service';

describe('BeneficiariosIprovinayController', () => {
  let controller: BeneficiariosIprovinayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiariosIprovinayController],
      providers: [BeneficiariosIprovinayService],
    }).compile();

    controller = module.get<BeneficiariosIprovinayController>(BeneficiariosIprovinayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

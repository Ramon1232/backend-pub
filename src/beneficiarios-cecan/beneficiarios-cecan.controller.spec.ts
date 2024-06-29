import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiariosCecanController } from './beneficiarios-cecan.controller';
import { BeneficiariosCecanService } from './beneficiarios-cecan.service';

describe('BeneficiariosCecanController', () => {
  let controller: BeneficiariosCecanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiariosCecanController],
      providers: [BeneficiariosCecanService],
    }).compile();

    controller = module.get<BeneficiariosCecanController>(BeneficiariosCecanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

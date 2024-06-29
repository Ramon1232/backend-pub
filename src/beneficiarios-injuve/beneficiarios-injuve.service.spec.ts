import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiariosInjuveService } from './beneficiarios-injuve.service';

describe('BeneficiariosInjuveService', () => {
  let service: BeneficiariosInjuveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeneficiariosInjuveService],
    }).compile();

    service = module.get<BeneficiariosInjuveService>(BeneficiariosInjuveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

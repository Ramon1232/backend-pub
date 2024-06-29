import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiariosStjlService } from './beneficiarios-stjl.service';

describe('BeneficiariosStjlService', () => {
  let service: BeneficiariosStjlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeneficiariosStjlService],
    }).compile();

    service = module.get<BeneficiariosStjlService>(BeneficiariosStjlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

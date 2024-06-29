import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiariosDifService } from './beneficiarios-dif.service';

describe('BeneficiariosDifService', () => {
  let service: BeneficiariosDifService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeneficiariosDifService],
    }).compile();

    service = module.get<BeneficiariosDifService>(BeneficiariosDifService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

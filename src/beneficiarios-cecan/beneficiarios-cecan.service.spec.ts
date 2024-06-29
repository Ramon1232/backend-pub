import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiariosCecanService } from './beneficiarios-cecan.service';

describe('BeneficiariosCecanService', () => {
  let service: BeneficiariosCecanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeneficiariosCecanService],
    }).compile();

    service = module.get<BeneficiariosCecanService>(BeneficiariosCecanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

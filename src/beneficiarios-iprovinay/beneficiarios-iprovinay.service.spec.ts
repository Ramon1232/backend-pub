import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiariosIprovinayService } from './beneficiarios-iprovinay.service';

describe('BeneficiariosIprovinayService', () => {
  let service: BeneficiariosIprovinayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeneficiariosIprovinayService],
    }).compile();

    service = module.get<BeneficiariosIprovinayService>(BeneficiariosIprovinayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { BeneficiariosStjlService } from './beneficiarios-stjl.service';
import { BeneficiariosStjlController } from './beneficiarios-stjl.controller';

@Module({
  controllers: [BeneficiariosStjlController],
  providers: [BeneficiariosStjlService],
})
export class BeneficiariosStjlModule {}

import { Module } from '@nestjs/common';
import { BeneficiariosInjuveService } from './beneficiarios-injuve.service';
import { BeneficiariosInjuveController } from './beneficiarios-injuve.controller';

@Module({
  controllers: [BeneficiariosInjuveController],
  providers: [BeneficiariosInjuveService],
})
export class BeneficiariosInjuveModule {}

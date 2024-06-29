import { Module } from '@nestjs/common';
import { BeneficiariosIprovinayService } from './beneficiarios-iprovinay.service';
import { BeneficiariosIprovinayController } from './beneficiarios-iprovinay.controller';

@Module({
  controllers: [BeneficiariosIprovinayController],
  providers: [BeneficiariosIprovinayService],
})
export class BeneficiariosIprovinayModule {}

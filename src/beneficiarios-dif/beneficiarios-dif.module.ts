import { Module } from '@nestjs/common';
import { BeneficiariosDifService } from './beneficiarios-dif.service';
import { BeneficiariosDifController } from './beneficiarios-dif.controller';

@Module({
  controllers: [BeneficiariosDifController],
  providers: [BeneficiariosDifService],
})
export class BeneficiariosDifModule {}

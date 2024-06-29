import { Module } from '@nestjs/common';
import { BeneficiariosCecanService } from './beneficiarios-cecan.service';
import { BeneficiariosCecanController } from './beneficiarios-cecan.controller';

@Module({
  controllers: [BeneficiariosCecanController],
  providers: [BeneficiariosCecanService],
})
export class BeneficiariosCecanModule {}

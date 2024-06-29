import { Module } from '@nestjs/common';
import { BeneficiariosSebienService } from './beneficiarios-sebien.service';
import { BeneficiariosSebienController } from './beneficiarios-sebien.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beneficiario } from './entities/beneficiario-entity';
import { Beneficio } from './entities/beneficio-entity';
import { IdentificacionGeograficaBeneficiario } from './entities/identificacionGeograficaBeneficiario-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Beneficiario, Beneficio, IdentificacionGeograficaBeneficiario])],
  controllers: [BeneficiariosSebienController],
  providers: [BeneficiariosSebienService],
})
export class BeneficiariosSebienModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeneficiariosSebienModule } from './beneficiarios-sebien/beneficiarios-sebien.module';
import { BeneficiariosDifModule } from './beneficiarios-dif/beneficiarios-dif.module';
import { BeneficiariosIprovinayModule } from './beneficiarios-iprovinay/beneficiarios-iprovinay.module';
import { BeneficiariosCecanModule } from './beneficiarios-cecan/beneficiarios-cecan.module';
import { BeneficiariosStjlModule } from './beneficiarios-stjl/beneficiarios-stjl.module';
import { BeneficiariosInjuveModule } from './beneficiarios-injuve/beneficiarios-injuve.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beneficiario } from './beneficiarios-sebien/entities/beneficiario-entity';
import { Beneficio } from './beneficiarios-sebien/entities/beneficio-entity';
import { IdentificacionGeograficaBeneficiario } from './beneficiarios-sebien/entities/identificacionGeograficaBeneficiario-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: 'admin',
      database: 'postgres',
      entities: [Beneficiario, Beneficio, IdentificacionGeograficaBeneficiario],
      synchronize: true,
    }),
    BeneficiariosSebienModule, 
    BeneficiariosDifModule, 
    BeneficiariosIprovinayModule, 
    BeneficiariosCecanModule, 
    BeneficiariosStjlModule, 
    BeneficiariosInjuveModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

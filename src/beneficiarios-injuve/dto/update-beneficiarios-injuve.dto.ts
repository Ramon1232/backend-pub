import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiariosInjuveDto } from './create-beneficiarios-injuve.dto';

export class UpdateBeneficiariosInjuveDto extends PartialType(CreateBeneficiariosInjuveDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiariosStjlDto } from './create-beneficiarios-stjl.dto';

export class UpdateBeneficiariosStjlDto extends PartialType(CreateBeneficiariosStjlDto) {}

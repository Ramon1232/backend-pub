import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiariosIprovinayDto } from './create-beneficiarios-iprovinay.dto';

export class UpdateBeneficiariosIprovinayDto extends PartialType(CreateBeneficiariosIprovinayDto) {}

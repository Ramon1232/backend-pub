import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiariosDifDto } from './create-beneficiarios-dif.dto';

export class UpdateBeneficiariosDifDto extends PartialType(CreateBeneficiariosDifDto) {}

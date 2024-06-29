import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiariosCecanDto } from './create-beneficiarios-cecan.dto';

export class UpdateBeneficiariosCecanDto extends PartialType(CreateBeneficiariosCecanDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiarioDto } from './create-beneficiario.dto';

export class UpdateBeneficiariosSebienDto extends PartialType(CreateBeneficiarioDto) {}

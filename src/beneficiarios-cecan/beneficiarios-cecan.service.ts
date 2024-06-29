import { Injectable } from '@nestjs/common';
import { CreateBeneficiariosCecanDto } from './dto/create-beneficiarios-cecan.dto';
import { UpdateBeneficiariosCecanDto } from './dto/update-beneficiarios-cecan.dto';

@Injectable()
export class BeneficiariosCecanService {
  create(createBeneficiariosCecanDto: CreateBeneficiariosCecanDto) {
    return 'This action adds a new beneficiariosCecan';
  }

  findAll() {
    return `This action returns all beneficiariosCecan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beneficiariosCecan`;
  }

  update(id: number, updateBeneficiariosCecanDto: UpdateBeneficiariosCecanDto) {
    return `This action updates a #${id} beneficiariosCecan`;
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiariosCecan`;
  }
}

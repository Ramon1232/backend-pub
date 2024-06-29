import { Injectable } from '@nestjs/common';
import { CreateBeneficiariosInjuveDto } from './dto/create-beneficiarios-injuve.dto';
import { UpdateBeneficiariosInjuveDto } from './dto/update-beneficiarios-injuve.dto';

@Injectable()
export class BeneficiariosInjuveService {
  create(createBeneficiariosInjuveDto: CreateBeneficiariosInjuveDto) {
    return 'This action adds a new beneficiariosInjuve';
  }

  findAll() {
    return `This action returns all beneficiariosInjuve`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beneficiariosInjuve`;
  }

  update(id: number, updateBeneficiariosInjuveDto: UpdateBeneficiariosInjuveDto) {
    return `This action updates a #${id} beneficiariosInjuve`;
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiariosInjuve`;
  }
}

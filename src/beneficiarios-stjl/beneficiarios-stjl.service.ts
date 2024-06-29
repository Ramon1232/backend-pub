import { Injectable } from '@nestjs/common';
import { CreateBeneficiariosStjlDto } from './dto/create-beneficiarios-stjl.dto';
import { UpdateBeneficiariosStjlDto } from './dto/update-beneficiarios-stjl.dto';

@Injectable()
export class BeneficiariosStjlService {
  create(createBeneficiariosStjlDto: CreateBeneficiariosStjlDto) {
    return 'This action adds a new beneficiariosStjl';
  }

  findAll() {
    return `This action returns all beneficiariosStjl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beneficiariosStjl`;
  }

  update(id: number, updateBeneficiariosStjlDto: UpdateBeneficiariosStjlDto) {
    return `This action updates a #${id} beneficiariosStjl`;
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiariosStjl`;
  }
}

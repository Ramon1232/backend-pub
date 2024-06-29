import { Injectable } from '@nestjs/common';
import { CreateBeneficiariosDifDto } from './dto/create-beneficiarios-dif.dto';
import { UpdateBeneficiariosDifDto } from './dto/update-beneficiarios-dif.dto';

@Injectable()
export class BeneficiariosDifService {
  create(createBeneficiariosDifDto: CreateBeneficiariosDifDto) {
    return 'This action adds a new beneficiariosDif';
  }

  findAll() {
    return `This action returns all beneficiariosDif`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beneficiariosDif`;
  }

  update(id: number, updateBeneficiariosDifDto: UpdateBeneficiariosDifDto) {
    return `This action updates a #${id} beneficiariosDif`;
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiariosDif`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateBeneficiariosIprovinayDto } from './dto/create-beneficiarios-iprovinay.dto';
import { UpdateBeneficiariosIprovinayDto } from './dto/update-beneficiarios-iprovinay.dto';

@Injectable()
export class BeneficiariosIprovinayService {
  create(createBeneficiariosIprovinayDto: CreateBeneficiariosIprovinayDto) {
    return 'This action adds a new beneficiariosIprovinay';
  }

  findAll() {
    return `This action returns all beneficiariosIprovinay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beneficiariosIprovinay`;
  }

  update(id: number, updateBeneficiariosIprovinayDto: UpdateBeneficiariosIprovinayDto) {
    return `This action updates a #${id} beneficiariosIprovinay`;
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiariosIprovinay`;
  }
}

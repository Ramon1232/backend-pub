import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeneficiariosIprovinayService } from './beneficiarios-iprovinay.service';
import { CreateBeneficiariosIprovinayDto } from './dto/create-beneficiarios-iprovinay.dto';
import { UpdateBeneficiariosIprovinayDto } from './dto/update-beneficiarios-iprovinay.dto';

@Controller('beneficiarios-iprovinay')
export class BeneficiariosIprovinayController {
  constructor(private readonly beneficiariosIprovinayService: BeneficiariosIprovinayService) {}

  @Post()
  create(@Body() createBeneficiariosIprovinayDto: CreateBeneficiariosIprovinayDto) {
    return this.beneficiariosIprovinayService.create(createBeneficiariosIprovinayDto);
  }

  @Get()
  findAll() {
    return this.beneficiariosIprovinayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiariosIprovinayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeneficiariosIprovinayDto: UpdateBeneficiariosIprovinayDto) {
    return this.beneficiariosIprovinayService.update(+id, updateBeneficiariosIprovinayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiariosIprovinayService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeneficiariosInjuveService } from './beneficiarios-injuve.service';
import { CreateBeneficiariosInjuveDto } from './dto/create-beneficiarios-injuve.dto';
import { UpdateBeneficiariosInjuveDto } from './dto/update-beneficiarios-injuve.dto';

@Controller('beneficiarios-injuve')
export class BeneficiariosInjuveController {
  constructor(private readonly beneficiariosInjuveService: BeneficiariosInjuveService) {}

  @Post()
  create(@Body() createBeneficiariosInjuveDto: CreateBeneficiariosInjuveDto) {
    return this.beneficiariosInjuveService.create(createBeneficiariosInjuveDto);
  }

  @Get()
  findAll() {
    return this.beneficiariosInjuveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiariosInjuveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeneficiariosInjuveDto: UpdateBeneficiariosInjuveDto) {
    return this.beneficiariosInjuveService.update(+id, updateBeneficiariosInjuveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiariosInjuveService.remove(+id);
  }
}

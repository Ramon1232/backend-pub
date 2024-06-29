import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeneficiariosStjlService } from './beneficiarios-stjl.service';
import { CreateBeneficiariosStjlDto } from './dto/create-beneficiarios-stjl.dto';
import { UpdateBeneficiariosStjlDto } from './dto/update-beneficiarios-stjl.dto';

@Controller('beneficiarios-stjl')
export class BeneficiariosStjlController {
  constructor(private readonly beneficiariosStjlService: BeneficiariosStjlService) {}

  @Post()
  create(@Body() createBeneficiariosStjlDto: CreateBeneficiariosStjlDto) {
    return this.beneficiariosStjlService.create(createBeneficiariosStjlDto);
  }

  @Get()
  findAll() {
    return this.beneficiariosStjlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiariosStjlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeneficiariosStjlDto: UpdateBeneficiariosStjlDto) {
    return this.beneficiariosStjlService.update(+id, updateBeneficiariosStjlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiariosStjlService.remove(+id);
  }
}

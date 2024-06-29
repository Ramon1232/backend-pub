import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeneficiariosDifService } from './beneficiarios-dif.service';
import { CreateBeneficiariosDifDto } from './dto/create-beneficiarios-dif.dto';
import { UpdateBeneficiariosDifDto } from './dto/update-beneficiarios-dif.dto';

@Controller('beneficiarios-dif')
export class BeneficiariosDifController {
  constructor(private readonly beneficiariosDifService: BeneficiariosDifService) {}

  @Post()
  create(@Body() createBeneficiariosDifDto: CreateBeneficiariosDifDto) {
    return this.beneficiariosDifService.create(createBeneficiariosDifDto);
  }

  @Get()
  findAll() {
    return this.beneficiariosDifService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiariosDifService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeneficiariosDifDto: UpdateBeneficiariosDifDto) {
    return this.beneficiariosDifService.update(+id, updateBeneficiariosDifDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiariosDifService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeneficiariosCecanService } from './beneficiarios-cecan.service';
import { CreateBeneficiariosCecanDto } from './dto/create-beneficiarios-cecan.dto';
import { UpdateBeneficiariosCecanDto } from './dto/update-beneficiarios-cecan.dto';

@Controller('beneficiarios-cecan')
export class BeneficiariosCecanController {
  constructor(private readonly beneficiariosCecanService: BeneficiariosCecanService) {}

  @Post()
  create(@Body() createBeneficiariosCecanDto: CreateBeneficiariosCecanDto) {
    return this.beneficiariosCecanService.create(createBeneficiariosCecanDto);
  }

  @Get()
  findAll() {
    return this.beneficiariosCecanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiariosCecanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeneficiariosCecanDto: UpdateBeneficiariosCecanDto) {
    return this.beneficiariosCecanService.update(+id, updateBeneficiariosCecanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiariosCecanService.remove(+id);
  }
}

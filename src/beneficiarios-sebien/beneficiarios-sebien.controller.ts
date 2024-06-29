import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BeneficiariosSebienService } from './beneficiarios-sebien.service';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { UpdateBeneficiariosSebienDto } from './dto/update-beneficiarios-sebien.dto';

@ApiTags('beneficiarios sebien')
@Controller('beneficiariosSebien')
export class BeneficiariosSebienController {
  constructor(private readonly beneficiariosSebienService: BeneficiariosSebienService) {}

  @Post()
  create(@Body() createBeneficiariosDto: CreateBeneficiarioDto) {
    return this.beneficiariosSebienService.createBeneficiario(createBeneficiariosDto);
  }

  @Get()
  findAll() {
    return this.beneficiariosSebienService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiariosSebienService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeneficiariosSebienDto: UpdateBeneficiariosSebienDto) {
    return this.beneficiariosSebienService.update(+id, updateBeneficiariosSebienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiariosSebienService.remove(+id);
  }
}

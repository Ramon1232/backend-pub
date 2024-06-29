import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBeneficiarioDto } from './dto/create-beneficiario.dto';
import { UpdateBeneficiariosSebienDto } from './dto/update-beneficiarios-sebien.dto';
import { Beneficiario } from './entities/beneficiario-entity';
import { Beneficio } from './entities/beneficio-entity';
import { IdentificacionGeograficaBeneficiario } from './entities/identificacionGeograficaBeneficiario-entity';

@Injectable()
export class BeneficiariosSebienService {

  constructor(
    @InjectRepository(Beneficiario)
    private readonly beneficiarioRepository: Repository<Beneficiario>,
    @InjectRepository(Beneficio)
    private readonly beneficioRepository: Repository<Beneficio>,
    @InjectRepository(IdentificacionGeograficaBeneficiario)
    private readonly identificacionGeograficaRepository: Repository<IdentificacionGeograficaBeneficiario>,
  ){}

  async createBeneficiario(createBeneficiarioDto: CreateBeneficiarioDto): Promise<any> {
    // Desestructura el DTO recibido
    const { beneficio, identificacionGeografica, ...beneficiarioData } = createBeneficiarioDto;

    // Crea el beneficiario en la tabla de beneficiarios
    const newBeneficiario = this.beneficiarioRepository.create(beneficiarioData);
    const savedBeneficiario = await this.beneficiarioRepository.save(newBeneficiario);

    // Crea el beneficio asociado al beneficiario
    const newBeneficio = this.beneficioRepository.create({
      ...beneficio,
      beneficiario: savedBeneficiario, // Asocia el beneficio al beneficiario creado
    });
    await this.beneficioRepository.save(newBeneficio);

    // Crea la identificación geográfica asociada al beneficiario
    const newIdentificacionGeografica = this.identificacionGeograficaRepository.create({
      ...identificacionGeografica,
      beneficiario: savedBeneficiario, // Asocia la identificación geográfica al beneficiario creado
    });
    await this.identificacionGeograficaRepository.save(newIdentificacionGeografica);

    // Puedes retornar los datos guardados, o estructurar la respuesta como necesites
    return {
      beneficiario: savedBeneficiario,
      beneficio: newBeneficio,
      identificacionGeografica: newIdentificacionGeografica,
    };
  }

  create(createBeneficiariosSebienDto: CreateBeneficiarioDto) {
    return 'This action adds a new beneficiariosSebien';
  }

  findAll() {
    return `This action returns all beneficiariosSebien`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beneficiariosSebien`;
  }

  update(id: number, updateBeneficiariosSebienDto: UpdateBeneficiariosSebienDto) {
    return `This action updates a #${id} beneficiariosSebien`;
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiariosSebien`;
  }
}

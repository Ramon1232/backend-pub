import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Beneficiario } from './beneficiario-entity';

@Entity({ name: 'beneficio' })
export class Beneficio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'cve_dependencia', type: 'smallint' })
  cveDependencia: number;

  @Column({ name: 'cve_institucion', length: 5 })
  cveInstitucion: string;

  @Column({ name: 'cve_programa', length: 4 })
  cvePrograma: string;

  @Column({ name: 'cve_intra_programa', type: 'smallint' })
  cveIntraPrograma: number;

  @Column({ name: 'cve_ent_fed', type: 'smallint' })
  cveEntFed: number;

  @Column({ name: 'cve_municipio', type: 'smallint' })
  cveMunicipio: number;

  @Column({ name: 'cve_localidad', type: 'integer' })
  cveLocalidad: number;

  @Column({ name: 'fecha_beneficio', type: 'integer' })
  fechaBeneficio: number;

  @Column({ name: 'cve_tipo_beneficiario', type: 'smallint' })
  cveTipoBeneficiario: number;

  @Column({ name: 'cve_tipo_beneficio', type: 'smallint' })
  cveTipoBeneficio: number;

  @Column({ name: 'cantidad_apoyo', type: 'numeric', precision: 16, scale: 2 })
  cantidadApoyo: number;

  @ManyToOne(() => Beneficiario, beneficiario => beneficiario.beneficios)
  beneficiario: Beneficiario;
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Beneficio } from './beneficio-entity';
import { IdentificacionGeograficaBeneficiario } from './identificacionGeograficaBeneficiario-entity';

@Entity({ name: 'beneficiario' })
export class Beneficiario {
  @PrimaryGeneratedColumn({ name: 'id_beneficiario' })
  idBeneficiario: number;

  @Column({ length: 18 })
  curp: string;

  @Column({ name: 'primer_apellido', length: 50, nullable: true })
  primerApellido: string;

  @Column({ name: 'segundo_apellido', length: 50, nullable: true })
  segundoApellido: string;

  @Column({ length: 50, nullable: true })
  nombre: string;

  @Column({ name: 'fecha_nac', type: 'numeric', nullable: true })
  fechaNacimiento: number;

  @Column({ name: 'cve_ent_fed_nac', length: 2, nullable: true })
  cveEntFedNac: string;

  @Column({ length: 1, nullable: true })
  sexo: string;

  @Column({ length: 2, nullable: true })
  discapacidad: string;

  @Column({ length: 2, nullable: true })
  indigena: string;

  @Column({ name: 'cve_civil', type: 'numeric', nullable: true})
  cveCivil: number;

  @OneToMany(() => Beneficio, beneficio => beneficio.beneficiario)
  beneficios: Beneficio[];

  @OneToMany(() => IdentificacionGeograficaBeneficiario, ig => ig.beneficiario)
  identificacionesGeograficas: IdentificacionGeograficaBeneficiario[];
}
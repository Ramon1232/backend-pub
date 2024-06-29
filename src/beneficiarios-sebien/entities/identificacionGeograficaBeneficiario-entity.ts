import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Beneficiario } from './beneficiario-entity';

@Entity({ name: 'identificacion_geografica_beneficiario' })
export class IdentificacionGeograficaBeneficiario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tipo_vial', length: 255 })
  tipoVial: string;

  @Column({ name: 'nom_vial', length: 255 })
  nomVial: string;

  @Column({ name: 'num_int_num', length: 5 })
  numIntNum: string;

  @Column({ name: 'num_int_alf', length: 35 })
  numIntAlf: string;

  @Column({ name: 'nom_loc', length: 255 })
  nomLoc: string;

  @Column({ name: 'cve_loc', length: 4 })
  cveLoc: string;

  @Column({ name: 'nom_mun', length: 255 })
  nomMun: string;

  @Column({ name: 'cve_mun', length: 3 })
  cveMun: string;

  @Column({ name: 'nom_ent', length: 255 })
  nomEnt: string;

  @Column({ name: 'cve_ent', length: 2 })
  cveEnt: string;

  @Column({ length: 255 })
  observaciones: string;

  @ManyToOne(() => Beneficiario, beneficiario => beneficiario.identificacionesGeograficas)
  beneficiario: Beneficiario;
}
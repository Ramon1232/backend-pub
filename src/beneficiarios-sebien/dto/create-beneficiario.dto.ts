import { IsNumber, IsString } from "class-validator";
import { CreateBeneficioDto } from "./create-beneficio.dto";
import { CreateIdentificacionGeograficaBeneficiarios } from "./create-identificacionGeograficaBeneficiario.dto";

export class CreateBeneficiarioDto {

    @IsString()
    curp: string;

    @IsString()
    primerApellido: string;

    @IsString()
    segundoApellido: string;

    @IsString()
    nombre: string;

    @IsNumber()
    fechaNacimiento: number;

    @IsString()
    cveEntFedNac: string;

    @IsString()
    sexo: string;

    @IsString()
    discapacidad: string;

    @IsString()
    indigena: string;

    @IsNumber()
    cveCivil: number;

    beneficio: CreateBeneficioDto;

    identificacionGeografica: CreateIdentificacionGeograficaBeneficiarios;

}
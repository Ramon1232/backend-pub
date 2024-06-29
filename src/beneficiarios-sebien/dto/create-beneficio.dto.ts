import { IsNumber, IsString } from "class-validator";

export class CreateBeneficioDto {

    @IsNumber()
    cveDependencia: number;

    @IsString()
    cveInstitucion: string;

    @IsString()
    cvePrograma: string;

    @IsNumber()
    cveIntraPrograma: number;

    @IsNumber()
    cveEntFed: number;

    @IsNumber()
    cveMunicipio: number;

    @IsNumber()
    cveLocalidad: number;

    @IsNumber()
    fechaBeneficio: number;

    @IsNumber()
    cveTipoBeneficiario: number;

    @IsNumber()
    cveTipoBeneficio: number;

    @IsNumber()
    cantidadApoyo: number;
}
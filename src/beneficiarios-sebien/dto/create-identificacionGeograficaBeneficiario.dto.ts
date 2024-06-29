import { IsString } from "class-validator";

export class CreateIdentificacionGeograficaBeneficiarios {
    
    @IsString()
    tipoVial: string;

    @IsString()
    nomVial: string;

    @IsString()
    numIntNum: string;

    @IsString()
    numIntAlf: string;

    @IsString()
    nomLoc: string;

    @IsString()
    cveLoc: string;

    @IsString()
    nomMun: string;

    @IsString()
    cveMun: string;

    @IsString()
    nomEnt: string;

    @IsString()
    cveEnt: string;

    @IsString()
    observaciones: string;
}
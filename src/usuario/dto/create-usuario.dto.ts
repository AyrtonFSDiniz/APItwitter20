/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import {ApiProperty} from '@nestjs/swagger';

/* eslint-disable prettier/prettier */
export class CreateUsuarioDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nome: string;

    @ApiProperty()
    @IsString()
    imagem: string;

    @ApiProperty()
    @IsString()
    bio: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    nascimento: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    senha: string;
}

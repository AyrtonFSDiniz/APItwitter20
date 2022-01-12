/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";
import {ApiProperty} from '@nestjs/swagger';

export class CreateSeguindoDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    idSeguindo: number;
}

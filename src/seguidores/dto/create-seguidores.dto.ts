/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";
import {ApiProperty} from '@nestjs/swagger';

export class CreateSeguidoresDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    idSeguidores: number;
}

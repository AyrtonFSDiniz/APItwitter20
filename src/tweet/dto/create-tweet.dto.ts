/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString } from "class-validator";
import {ApiProperty} from '@nestjs/swagger';

export class CreateTweetDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    texto: string;

    @ApiProperty()
    @IsString()
    emoji: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    curtidas: number; 
}

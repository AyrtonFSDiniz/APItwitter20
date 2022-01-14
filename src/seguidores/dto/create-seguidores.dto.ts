/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSeguidoresDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
  
  @ApiProperty()
  @IsNotEmpty()
  nome: string;
}

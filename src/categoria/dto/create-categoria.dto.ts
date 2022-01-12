import {ApiProperty} from '@nestjs/swagger';

export class CreateCategoriaDto {
    @ApiProperty()
    nome: string;
}

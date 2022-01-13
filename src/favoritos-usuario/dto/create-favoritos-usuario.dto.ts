import { IsInt, IsNotEmpty, IsString } from "class-validator";
import {ApiProperty} from '@nestjs/swagger';

export class CreateFavoritosUsuarioDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    usuarioid: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    tweetid: number;
}

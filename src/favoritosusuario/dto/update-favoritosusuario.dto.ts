import { PartialType } from '@nestjs/swagger';
import { CreateFavoritosusuarioDto } from './create-favoritosusuario.dto';

export class UpdateFavoritosusuarioDto extends PartialType(CreateFavoritosusuarioDto) {}

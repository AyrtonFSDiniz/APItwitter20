import { PartialType } from '@nestjs/swagger';
import { CreateFavoritosUsuarioDto } from './create-favoritos-usuario.dto';

export class UpdateFavoritosUsuarioDto extends PartialType(CreateFavoritosUsuarioDto) {}

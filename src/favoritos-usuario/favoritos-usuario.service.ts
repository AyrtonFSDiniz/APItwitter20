import { Injectable } from '@nestjs/common';
import { CreateFavoritosUsuarioDto } from './dto/create-favoritos-usuario.dto';
import { UpdateFavoritosUsuarioDto } from './dto/update-favoritos-usuario.dto';

@Injectable()
export class FavoritosUsuarioService {
  create(createFavoritosUsuarioDto: CreateFavoritosUsuarioDto) {
    return 'This action adds a new favoritosUsuario';
  }

  findAll() {
    return `This action returns all favoritosUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favoritosUsuario`;
  }

  update(id: number, updateFavoritosUsuarioDto: UpdateFavoritosUsuarioDto) {
    return `This action updates a #${id} favoritosUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoritosUsuario`;
  }
}

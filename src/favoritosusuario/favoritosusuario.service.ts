import { Injectable } from '@nestjs/common';
import { CreateFavoritosusuarioDto } from './dto/create-favoritosusuario.dto';
import { UpdateFavoritosusuarioDto } from './dto/update-favoritosusuario.dto';

@Injectable()
export class FavoritosusuarioService {
  create(createFavoritosusuarioDto: CreateFavoritosusuarioDto) {
    return 'This action adds a new favoritosusuario';
  }

  findAll() {
    return `This action returns all favoritosusuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favoritosusuario`;
  }

  update(id: number, updateFavoritosusuarioDto: UpdateFavoritosusuarioDto) {
    return `This action updates a #${id} favoritosusuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoritosusuario`;
  }
}

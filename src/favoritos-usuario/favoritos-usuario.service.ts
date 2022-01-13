import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoritosUsuarioDto } from './dto/create-favoritos-usuario.dto';
import { UpdateFavoritosUsuarioDto } from './dto/update-favoritos-usuario.dto';
import { Prisma } from '.prisma/client';

@Injectable()
export class FavoritosUsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFavoritosUsuarioDto: Prisma.FavoritosUsuarioCreateInput) {
    return await this.prisma.favoritosUsuario.create({
      data: { ...createFavoritosUsuarioDto },
    });
  }

  async findAll(): Promise<FavoritosUsuario> {
    return await this.prisma.favoritosUsuario.findMany();
  }

  async findOne(id: number): Promise<FavoritosUsuario> {
    return await this.prisma.favoritosUsuario.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateFavoritosUsuarioDto: UpdateFavoritosUsuarioDto,
  ): Promise<FavoritosUsuario> {
    return await this.prisma.favoritosUsuario.update({
      data: { ...updateFavoritosUsuarioDto },
      where: { id },
    });
  }

  async remove(id: number): Promise<FavoritosUsuario> {
    return this.prisma.favoritosusuario.delete({
      where: { id },
    });
  }
}

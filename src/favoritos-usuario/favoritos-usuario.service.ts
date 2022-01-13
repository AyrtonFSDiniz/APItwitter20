import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoritosUsuarioDto } from './dto/create-favoritos-usuario.dto';
import { UpdateFavoritosUsuarioDto } from './dto/update-favoritos-usuario.dto';
import { Prisma } from '.prisma/client';

@Injectable()
export class FavoritosUsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFavoritosUsuarioDto: Prisma.FavoritosOnUsuarioCreateInput) {
    return await this.prisma.FavoritosOnUsuario.create({
      data: {...createFavoritosUsuarioDto},
    });
  }

  async findAll(): Promise<FavoritosOnUsuario> {
    return await this.prisma.favoritosOnUsuario.findMany();  
  }

  async findOne(id: number): Promise<FavoritosOnUsuario> {
    return await this.prisma.favoritosOnUsuario.findUnique({
      where: {id},
    });  }

  async update(id: number, updateFavoritosUsuarioDto: UpdateFavoritosUsuarioDto): Promise<FavoritosOnUsuario> {
    return await this.prisma.favoritosOnUsuario.update({
      data: {...updateFavoritosUsuarioDto},
      where: {id},
    });
  }

  async remove(id: number): Promise<FavoritosOnUsuario> {
    return this.prisma.favoritosOnUsuario.delete({
      where: {id},
    });
  }
}
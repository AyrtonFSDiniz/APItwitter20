/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Seguindo } from '.prisma/client';

@Injectable()
export class SeguindoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSeguindoDto: CreateSeguindoDto): Promise<Seguindo> {
    return await this.prisma.seguindo.create({
      data: {...createSeguindoDto},
    });
  }

  async findAll(): Promise<Seguindo[]> {
    return await this.prisma.seguindo.findMany();
  }

  async findOne(id: number): Promise<Seguindo> {
    return await this.prisma.seguindo.findUnique({
      where: {id},
    });
  }

  async update(id: number, updateSeguindoDto: UpdateSeguindoDto) {
    return await this.prisma.seguindo.update({
      data: {...updateSeguindoDto},
      where: {id},
    });
  }

  async remove(id: number) {
    return this.prisma.seguindo.delete({
      where: {id},
    });
  }
}

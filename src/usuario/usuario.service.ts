/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Usuario } from '@prisma/client';
import * as bcrypt from 'bcrypt'
import { JwtPayload } from 'src/auth/jwt.strategy';
import { LoginDto } from 'src/auth/dto/login.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  //usando bcrypt para embaralhar a senha que vai pro banco
  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    createUsuarioDto.senha = await bcrypt.hash(createUsuarioDto.senha, 10);
    return await this.prisma.usuario.create({
      data: {...createUsuarioDto}
  });
  }

  //usando a função findByLogin para encontrar o primeiro email que bater com o email digitado
  async findByLogin(login: LoginDto): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: { 
        email: login.email,
      },
    });

    //caso não ache o email digitado, retornar a mensagem de erro
  
    if(!user) {
      throw new HttpException(
        'Usuário não encontrado',
        HttpStatus.NOT_FOUND, 
      );
    }

    //verificando se a senha digitada é a mesma que está salva no banco

    const senhaIgual = await bcrypt.compare(login.senha, user.senha)

    //caso a senha não seja a mesma do banco, retornar mensagem de erro

    if(!senhaIgual){
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    //caso o email e a senha estejam de acordo com os do banco, retornar o usuário

    return user;
  }

  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  async validateUser(payload: JwtPayload): Promise<Usuario> { 
		const user = await this.prisma.usuario.findFirst({ //o primeiro usuário que ele achar com aquele email e com aquela senha ele vai me trazer
			where: {
				email: payload.email,
			}
		});

		if(!user){
			throw new HttpException('', HttpStatus.UNAUTHORIZED);
		}

		return user;
	}

  async findOne(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique({
      where: {id},
    });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.prisma.usuario.update({
      data: {...updateUsuarioDto},
      where: {id},
    });
  }

  async remove(id: number) {
    return await this.prisma.usuario.delete({
      where: {id},
    });
  }
}

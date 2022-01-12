/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt', 
        property: 'user', 
        session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY, 
      signOptions: {
        expiresIn: '300s',
      }
    })
  ],
  controllers: [AuthController],  
    providers: [UsuarioService, PrismaService, AuthService, JwtStrategy],  
    exports: [
        PassportModule, 
        JwtModule
    ],
})
export class AuthModule {}

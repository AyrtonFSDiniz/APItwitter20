import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FavoritosusuarioModule } from './favoritosusuario/favoritosusuario.module';

@Module({
  imports: [PrismaModule, AuthModule, CategoriaModule, FavoritosusuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

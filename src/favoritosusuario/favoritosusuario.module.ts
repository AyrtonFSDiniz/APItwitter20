import { Module } from '@nestjs/common';
import { FavoritosusuarioService } from './favoritosusuario.service';
import { FavoritosusuarioController } from './favoritosusuario.controller';

@Module({
  controllers: [FavoritosusuarioController],
  providers: [FavoritosusuarioService]
})
export class FavoritosusuarioModule {}

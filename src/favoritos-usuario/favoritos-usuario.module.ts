import { Module } from '@nestjs/common';
import { FavoritosUsuarioService } from './favoritos-usuario.service';
import { FavoritosUsuarioController } from './favoritos-usuario.controller';

@Module({
  controllers: [FavoritosUsuarioController],
  providers: [FavoritosUsuarioService]
})
export class FavoritosUsuarioModule {}

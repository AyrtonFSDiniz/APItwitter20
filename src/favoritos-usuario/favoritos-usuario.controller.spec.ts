import { Test, TestingModule } from '@nestjs/testing';
import { FavoritosUsuarioController } from './favoritos-usuario.controller';
import { FavoritosUsuarioService } from './favoritos-usuario.service';

describe('FavoritosUsuarioController', () => {
  let controller: FavoritosUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritosUsuarioController],
      providers: [FavoritosUsuarioService],
    }).compile();

    controller = module.get<FavoritosUsuarioController>(FavoritosUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

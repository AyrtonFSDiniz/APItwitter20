import { Test, TestingModule } from '@nestjs/testing';
import { FavoritosusuarioController } from './favoritosusuario.controller';
import { FavoritosusuarioService } from './favoritosusuario.service';

describe('FavoritosusuarioController', () => {
  let controller: FavoritosusuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritosusuarioController],
      providers: [FavoritosusuarioService],
    }).compile();

    controller = module.get<FavoritosusuarioController>(FavoritosusuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

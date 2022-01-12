import { Test, TestingModule } from '@nestjs/testing';
import { FavoritosUsuarioService } from './favoritos-usuario.service';

describe('FavoritosUsuarioService', () => {
  let service: FavoritosUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritosUsuarioService],
    }).compile();

    service = module.get<FavoritosUsuarioService>(FavoritosUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

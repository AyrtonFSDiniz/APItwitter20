import { Test, TestingModule } from '@nestjs/testing';
import { FavoritosusuarioService } from './favoritosusuario.service';

describe('FavoritosusuarioService', () => {
  let service: FavoritosusuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritosusuarioService],
    }).compile();

    service = module.get<FavoritosusuarioService>(FavoritosusuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

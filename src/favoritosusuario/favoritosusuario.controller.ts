import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoritosusuarioService } from './favoritosusuario.service';
import { CreateFavoritosusuarioDto } from './dto/create-favoritosusuario.dto';
import { UpdateFavoritosusuarioDto } from './dto/update-favoritosusuario.dto';

@Controller('favoritosusuario')
export class FavoritosusuarioController {
  constructor(private readonly favoritosusuarioService: FavoritosusuarioService) {}

  @Post()
  create(@Body() createFavoritosusuarioDto: CreateFavoritosusuarioDto) {
    return this.favoritosusuarioService.create(createFavoritosusuarioDto);
  }

  @Get()
  findAll() {
    return this.favoritosusuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritosusuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoritosusuarioDto: UpdateFavoritosusuarioDto) {
    return this.favoritosusuarioService.update(+id, updateFavoritosusuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoritosusuarioService.remove(+id);
  }
}

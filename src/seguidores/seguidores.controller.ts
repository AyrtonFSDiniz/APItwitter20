/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { UpdateSeguidoresDto } from './dto/update-seguidores.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('seguidores')
@Controller('seguidores')
export class SeguidoresController {
  constructor(private readonly seguidoresService: SeguidoresService) {}

  @Post()
  create(@Body() createSeguidoresDto: CreateSeguidoresDto) {
    return this.seguidoresService.create(createSeguidoresDto);
  }

  @Get()
  findAll() {
    return this.seguidoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguidoresDto: UpdateSeguidoresDto) {
    return this.seguidoresService.update(+id, updateSeguidoresDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguidoresService.remove(+id);
  }
}

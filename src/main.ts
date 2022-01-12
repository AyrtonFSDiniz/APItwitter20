/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  const config = new DocumentBuilder()
	.setTitle('Api')
	.setDescription('Api')
	.setVersion('1.0')
  .addTag('categoria')
  .addTag('seguidores')
  .addTag('seguindo')
  .addTag('tweet')
  .addTag('usuario')
	.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

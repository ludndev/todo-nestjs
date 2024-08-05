import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ResponseInterceptor } from './response/response.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Todos App API')
    .setDescription('Todos app API built with NestJS')
    .setVersion('0.1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalInterceptors(new ResponseInterceptor());

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
}

bootstrap();

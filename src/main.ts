import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  
  /** Control de validacion de los Pipes (DTO) */
  app.useGlobalPipes(
    new ValidationPipe(
    //   {
    //   whitelist: true,
    //   forbidNonWhitelisted: true,
    //   transformOptions: {
    //     enableImplicitConversion: true,
    //   },
    // }
    
    ),
  );


  await app.listen(3000);
}
bootstrap();

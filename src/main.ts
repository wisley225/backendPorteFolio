import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://porte-folio-p00vgdq2o-wisley225s-projects.vercel.app', // 🔥 autorise TOUT (développement uniquement !)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  const port = process.env.PORT || 3000;

  await app.listen(port);
}
bootstrap();

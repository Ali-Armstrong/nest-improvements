import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CustomExceptionFilter } from './exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest-Enhancements')
    .setDescription('Trying new stuff')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.useGlobalFilters(new CustomExceptionFilter());
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

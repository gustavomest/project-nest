import { ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  //versionamento
  app.enableVersioning({
    type: VersioningType.URI,
  })

  //swagger
  const config = new DocumentBuilder()
    .setTitle('Curso NestJS - Task API')
    .setDescription('API desenvolvida durante o curso de Nestjs')
    .setVersion('1')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documentFactory)

  //validacoes

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()

import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProjectsModule } from './modules/projects/projects.module'
import { PrismaService } from './prisma.service'
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [ProjectsModule, TasksModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

//esse arquvo aqui voce tem que e o modulo main nele tem que colocar todo novo modulo de api pra poder ser gerado rotas

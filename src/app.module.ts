import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasModule } from './tareas/tareas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { ProyectoTareasModule } from './proyecto-tareas/proyecto-tareas.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'), TareasModule, AuthModule, UsersModule, ProyectosModule, ProyectoTareasModule],
 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tareas, TareasDocument } from './schema/tareas.schema';
import { Model } from 'mongoose';


@Injectable()
export class TareasService {
  constructor(
    @InjectModel(Tareas.name) private tareasModule : Model<TareasDocument>){

  }

  async create(createTareaDto: CreateTareaDto) {

     const  tareaCreated= await this.tareasModule.create(createTareaDto)
    
    return tareaCreated;
  }

  findAll() {
    return `This action returns all tareas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tarea`;
  }

  update(id: number, updateTareaDto: UpdateTareaDto) {
    return `This action updates a #${id} tarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarea`;
  }
}

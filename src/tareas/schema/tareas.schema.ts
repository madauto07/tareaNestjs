import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TareasDocument = Document<Tareas>;

@Schema()
export class Tareas {
  @Prop()
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop()
  estado: number;
}

export const TareasSchema = SchemaFactory.createForClass(Tareas);
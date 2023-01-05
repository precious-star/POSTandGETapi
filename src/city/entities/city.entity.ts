import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryColumn()
  name: string;
}

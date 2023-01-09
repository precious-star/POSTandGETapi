import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryColumn()
  name: string;
  @Column()
  @Generated('increment')
  cityId: number;
}

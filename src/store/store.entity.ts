import { IsString, IsNumber, IsNotEmpty } from '@nestjs/class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  //@IsNumber()
  @IsNotEmpty()
  store_id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  store_address: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  store_manager_name: string;
}

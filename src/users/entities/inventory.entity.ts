import { IsString, IsNumber, IsNotEmpty } from '@nestjs/class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @IsNotEmpty()
  inventory_id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  inventory_name: string;

  @IsNotEmpty()
  @Column({ type: 'date' })
  manufacture_date: Date;

  @IsNotEmpty()
  @Column()
  @IsNumber()
  available_quantity: number;
}

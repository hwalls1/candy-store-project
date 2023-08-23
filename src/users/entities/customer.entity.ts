import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsNumber, IsNotEmpty } from '@nestjs/class-validator';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @IsNotEmpty()
  customer_id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  customer_name: string;
}

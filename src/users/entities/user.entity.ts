import { IsString, IsNumber, IsNotEmpty } from '@nestjs/class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @IsNumber()
  @IsNotEmpty()
  @PrimaryGeneratedColumn()
  user_id: number;

  @IsString()
  @IsNotEmpty()
  @Column()
  user_name: string;

  @IsNumber()
  @IsNotEmpty()
  @Column()
  user_email: string;
}

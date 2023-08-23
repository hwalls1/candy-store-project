import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Customer } from './customer.entity';
import { Store } from '../../store/store.entity';
import { IsNumber, IsNotEmpty } from '@nestjs/class-validator';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  @IsNumber()
  order_id: number;

  @ManyToOne(() => Customer, (customer) => customer.customer_id)
  @JoinColumn({ name: 'customer_id' })
  @IsNotEmpty()
  customer: Customer;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  inventory_id: number;

  @ManyToOne(() => Store, (store) => store.store_id)
  @JoinColumn({ name: 'store_id' })
  @IsNotEmpty()
  store: Store;

  @Column()
  @IsNumber()
  quantity: number;

  @Column({
    type: 'enum',
    enum: ['Pending', 'Completed', 'Cancelled'],
    default: 'Pending',
  })
  @IsNotEmpty()
  status: 'Pending' | 'Completed' | 'Cancelled';

  @IsNotEmpty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_date: Date;

  @IsNotEmpty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_date: Date;
}

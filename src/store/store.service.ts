import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { Store } from './store.entity';
import { CreateStoreDto } from './dto/create-store.dto';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}

  async create(createStoreDto: CreateStoreDto): Promise<Store> {
    const store = new Store();
    store.store_address = createStoreDto.store_address;
    store.store_manager_name = createStoreDto.store_manager_name;

    return await this.storeRepository.save(store);
  }

  async findAll(
    page = 1,
    limit = 10,
  ): Promise<{ stores: Store[]; total: number }> {
    const queryBuilder: SelectQueryBuilder<Store> =
      this.storeRepository.createQueryBuilder('store');
    const [stores, total] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { stores, total };
  }

  async findOne(id: number): Promise<Store> {
    return await this.storeRepository.findOne(id);
  }
}

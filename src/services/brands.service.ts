import { Injectable } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandtDto } from 'src/dtos/brands.dtos';
import { Brand } from 'src/entities/brand.entity';

@Injectable()
export class BrandsService {
  find() {}

  findOne(id: Brand['id']) {
    return id;
  }

  create(payload: CreateBrandDto) {
    return payload;
  }

  update(id: Brand['id'], payload: UpdateBrandtDto) {
    return {
      id,
      payload,
    };
  }

  delete(id: Brand['id']) {
    return id;
  }
}

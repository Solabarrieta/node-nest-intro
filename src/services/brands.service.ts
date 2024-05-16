import { Injectable } from '@nestjs/common';
import { Brand } from 'src/entities/brand.entity';

@Injectable()
export class BrandsService {
  find() {}

  findOne(id: Brand['id']) {
    return id;
  }

  create(payload: any) {
    return payload;
  }

  update(id: Brand['id']) {
    return id;
  }

  delete(id: Brand['id']) {
    return id;
  }
}

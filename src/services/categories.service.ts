import { Injectable } from '@nestjs/common';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {
  find() {}

  findOne(id: Category['id']) {
    return id;
  }

  create(payload: any) {
    return payload;
  }

  update(id: Category['id']) {
    return id;
  }

  delete(id: Category['id']) {
    return id;
  }
}

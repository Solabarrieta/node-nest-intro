import { Injectable } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dtos';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {
  find() {}

  findOne(id: Category['id']) {
    return id;
  }

  create(payload: CreateCategoryDto) {
    return payload;
  }

  update(id: Category['id'], payload: UpdateCategoryDto) {
    return {
      id,
      payload,
    };
  }

  delete(id: Category['id']) {
    return id;
  }
}

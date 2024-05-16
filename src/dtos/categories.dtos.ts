import { Category } from 'src/entities/category.entity';
export type CreateCategoryDto = Readonly<Omit<Category, 'id'>>;
export type UpdateCategoryDto = Readonly<Partial<CreateCategoryDto>>;

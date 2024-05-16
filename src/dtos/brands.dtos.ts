import { Brand } from 'src/entities/brand.entity';
export type CreateBrandDto = Readonly<Omit<Brand, 'id'>>;
export type UpdateBrandtDto = Readonly<Partial<CreateBrandDto>>;

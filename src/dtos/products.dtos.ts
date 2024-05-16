import { Product } from 'src/entities/product.entity';
export type CreateProductDto = Readonly<Omit<Product, 'id'>>;
export type UpdateProductDto = Readonly<Partial<CreateProductDto>>;

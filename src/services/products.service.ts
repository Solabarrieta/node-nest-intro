import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

export type CreateProductDto = Omit<Product, 'id'>;

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Descripción',
      price: 22,
      stock: 100,
      image: 'url',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: Product['id']) {
    return this.products.find((product) => product.id === id);
  }

  create(payload: CreateProductDto) {
    this.counterId++;
    const newProduct: Product = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}

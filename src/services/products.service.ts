import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

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
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} was not found`);
    }

    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId++;
    const newProduct: Product = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    console.log(this.products);
    return this.products;
  }

  update(id: number, payload: UpdateProductDto) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    if (!productIndex) return null;

    const newProduct = {
      ...this.products[productIndex],
      ...payload,
    };

    this.products[productIndex] = newProduct;

    return this.products[productIndex];
  }

  delete(id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    console.log(index);
    if (index < 0) {
      throw new NotFoundException(`Product with id ${id} was not found`);
    }
    const newProducts = this.products.splice(index, 1);
    this.products = newProducts;
    return id;
  }
}

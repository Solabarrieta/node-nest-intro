import { IsNumber, IsString, IsUrl } from 'class-validator';

export class Product {
  id: number;
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
  @IsNumber()
  stock: number;
  @IsUrl()
  image: string;
}

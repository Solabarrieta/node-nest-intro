import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Delete,
  HttpCode,
  HttpStatus,
  // ParseIntPipe,
} from '@nestjs/common';

import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';

// import { Response } from 'express';
import { ProductsService } from 'src/services/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('filter')
  getProductFilter(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return { message: `limit ${limit}, offset ${offset} y brand ${brand}` };
  }
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // Query Params
  @Get()
  getProducts() {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'create',
    //   payload,
    // };

    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    // return {
    //   message: 'updated',
    //   id,
    //   payload,
    // };
    const response = this.productsService.update(id, payload);
    return response;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return {
    //   message: 'deleted',
    //   id,
    // };
    return this.productsService.delete(id);
  }
}

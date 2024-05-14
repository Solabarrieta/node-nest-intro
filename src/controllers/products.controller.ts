import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return `filter products`;
  }
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }
  // Query Params
  @Get('products')
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return `limit ${limit}, offset ${offset} y brand ${brand}`;
  }
}

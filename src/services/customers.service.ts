import { Injectable } from '@nestjs/common';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
  find() {}

  findOne(id: Customer['id']) {
    return id;
  }

  create(payload: any) {
    return payload;
  }

  update(id: Customer['id']) {
    return id;
  }

  delete(id: Customer['id']) {
    return id;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomertDto } from 'src/dtos/customers.dtos';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
  find() {}

  findOne(id: Customer['id']) {
    return id;
  }

  create(payload: CreateCustomerDto) {
    return payload;
  }

  update(id: Customer['id'], payload: UpdateCustomertDto) {
    return { id, payload };
  }

  delete(id: Customer['id']) {
    return id;
  }
}

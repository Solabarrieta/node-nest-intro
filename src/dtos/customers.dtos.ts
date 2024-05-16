import { Customer } from 'src/entities/customer.entity';
export type CreateCustomerDto = Readonly<Omit<Customer, 'id'>>;
export type UpdateCustomertDto = Readonly<Partial<CreateCustomerDto>>;

import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dtos';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  find() {}

  findOne(id: User['id']) {
    return id;
  }

  create(payload: CreateUserDto) {
    return payload;
  }

  update(id: User['id'], payload: UpdateUserDto) {
    return { id, payload };
  }

  delete(id: User['id']) {
    return id;
  }
}

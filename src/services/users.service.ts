import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  find() {}

  findOne(id: User['id']) {
    return id;
  }

  create(payload: any) {
    return payload;
  }

  update(id: User['id']) {
    return id;
  }

  delete(id: User['id']) {
    return id;
  }
}

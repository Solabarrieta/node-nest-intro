import { User } from 'src/entities/user.entity';
export type CreateUserDto = Readonly<Omit<User, 'id'>>;
export type UpdateUserDto = Readonly<Partial<CreateUserDto>>;

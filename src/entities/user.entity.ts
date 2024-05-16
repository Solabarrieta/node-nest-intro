enum Role {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
}
export class User {
  id: number;
  userName: string;
  email: string;
  password: string;
  role: Role;
}

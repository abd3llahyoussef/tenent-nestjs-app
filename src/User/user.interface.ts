export interface User {
  userId: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
  fk_orgId: string;
  token?: string;
}

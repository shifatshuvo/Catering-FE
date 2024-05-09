import { user } from './data-types';
export interface AuthResponse {
  tokenStr: string;
  user: user;
}
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  fetchAllUsers(): number[] {
    return [2, 3, 5];
  }
}

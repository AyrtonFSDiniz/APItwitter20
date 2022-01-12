import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API Twitter 2.0 em funcionamento';
  }
}

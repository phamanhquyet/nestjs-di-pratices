import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  suppyPower(watts: number) {
    console.log(`supplying ${watts} worth of power`);
  }
}

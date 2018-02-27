import { Injectable } from '@angular/core';

@Injectable()
export class MoltinService {
  constructor() { }

  getProducts(): void {
    return console.log('hello');
  }
}

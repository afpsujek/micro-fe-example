import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  
  constructor() { }

  public add(one: number, two: number) {
    return one + two;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentDateService {

  constructor() { }

  getDate() {
    return Date();
  }
}

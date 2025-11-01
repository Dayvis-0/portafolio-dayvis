import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  data = { 
    Nombre: 'Dayvis',
    DNI: '71572076',
    like: 100
  }

  constructor() {}

  getData() {
    return this.data;
  }
}

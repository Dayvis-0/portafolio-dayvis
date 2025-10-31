import { Injectable } from '@angular/core';
import { DataLike } from '../models/data-like';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  data: DataLike = 
    { Nombre: 'Dayvis',
      DNI: '71572076',
      like: 100
    }

  constructor() {}

  getData() : DataLike {
    return this.data;
  }
}

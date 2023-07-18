import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServicesService {
  constructor() {}

  saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public set<T>(storeName: string, data: T): void {
    window.localStorage.setItem(storeName, JSON.stringify(data))
  }

  public setInArray<T>(storeName: string, data: T): void {
    const currentData = this.get<Array<T>>(storeName);
    window.localStorage.setItem(storeName, JSON.stringify(currentData ? [...currentData, data] : [data]));
  }

  public get<T>(storeName: string): T | null {
    const currentData = window.localStorage.getItem(storeName);
    return currentData ? JSON.parse(currentData) : currentData;
  }
}

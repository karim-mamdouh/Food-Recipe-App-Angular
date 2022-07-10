import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressLoaderService {
  public isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }
}
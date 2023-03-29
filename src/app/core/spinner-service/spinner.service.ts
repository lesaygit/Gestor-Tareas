import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loadingBehSub = new BehaviorSubject<boolean>(false);

  get spinner$(): Observable<boolean> {
    return this.loadingBehSub.asObservable();
  }

  constructor() { }

  activeSpinner(): void {
    this.loadingBehSub.next(true);
  }

  desactiveSpinner(): void {
    this.loadingBehSub.next(false);
  }

}

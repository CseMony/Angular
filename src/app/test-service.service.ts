import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITab } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  tabs: ITab[] = [];
  constructor() { }

  public testProp: string = 'testProp';
  public testPropObs$ = new BehaviorSubject<string>('testPropObs$');

}
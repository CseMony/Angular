import { Route } from "@angular/router";
import { BehaviorSubject } from "rxjs";

export interface ITab {
  
    name: string;
    component: any;
    active: boolean;
    route: Route;
    key: string;
    count: BehaviorSubject<number>;
  }
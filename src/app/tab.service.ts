import { Injectable } from '@angular/core';
import { ITab } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  [x: string]: any;
  tabs: ITab[] = [];
  tabOptions: ITab[] = [{ name: 'Movies', url: '/movies' }, { name: 'Songs',   url: '/songs' }];
  constructor() { }


  addTab(url: string) {
    const tab = this.getTabOptionByUrl(url);
    if (!this.tabs.includes(tab)) {
      this.tabs.push(tab);
    }
  }

  openTab(url: string) {
    this.tabService.addTab(url);
    this.router.navigateByUrl(url);
  }
   
  
  deleteTab(index: number) {
    this.tabs.splice(index, 1);
  }

  closeTab(index: number, event: Event) {
    this.tabService.deleteTab(index);
    event.preventDefault();
  }
}

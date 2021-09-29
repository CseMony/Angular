import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormLayoutComponent implements OnInit {

  constructor( public testService: TestServiceService) { }

  ngOnInit(): void {
  }
  public closedTabs:boolean[] = [];
  public selected = true;

  @ViewChild("tabstrip", { static: true })
  public tabstrip!: TabStripComponent;

  public onClose(ev: any): void {
    this.closedTabs[ev.tab.title] = true;
    this.selected = false;

    if (ev.tab.selected) {
      setTimeout(() => {
        this.tabstrip.selectTab(0);
      });
    }
  }

  public restoreTabs(): void {
    this.closedTabs = [];
  }
}

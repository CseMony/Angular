import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { MultilevelMenuService, ExpandCollapseStatusEnum, MultilevelNodes, Configuration } from 'ng-material-multilevel-menu';
import {SlideInOut, ExpandedRTL, ExpandedLTR } from 'ng-material-multilevel-menu';
import { NavItem } from './nav-item';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { TabStripComponent } from "@progress/kendo-angular-layout";
import {
  
  Injector,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Injectable
} from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RoutesRecognized,
  Route
} from "@angular/router";
import { ITab } from './tab';
import { BehaviorSubject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
>>>>>>> 2f61bbedcd99e7e6e3de26b13e818bec21a8703f

//import studentsData from './Data.json';

@Injectable()
export class CurrentTabInjector {
  public currentTab: ITab[];
  constructor(){
    this.currentTab = [];
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
  animations: [
    SlideInOut,
    ExpandedLTR,
    ExpandedRTL,
  ]
})
export class AppComponent implements OnInit {
  //[x: string]: any;
  public tabs: ITab[] = [];
  public routes: Route[] = [];
  public currentHoverTabKey!: string;
  public currentDraggedTab!: ITab;
  title: any;
  

 

  constructor( private activatedRoute: ActivatedRoute,
    private router: Router,
    private injector: Injector,
    private cd: ChangeDetectorRef) {



    router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.checkAndAddRouteTab(val);
      }
    });
   
  }
 
  ngOnInit() {
    this.routes = this.router.config;
  }
  disposeTab(tab: ITab) {
    if (this.tabs.length > 1) {
      this.tabs = this.tabs.filter(item => item.key !== tab.key);

      if (tab.active) {
        // deactivate all tabs
        this.deactivateTabs();
        this.router.navigateByUrl(this.tabs[this.tabs.length - 1].route.path!);
      }
    }
  }

  mouseOverTab(tab: ITab) {
    this.currentHoverTabKey = tab ? tab.key : '';
  }


  checkAndAddRouteTab(val: RoutesRecognized) {
    // get the component to activate by the route
    const comp = val.state.root.firstChild!.component;
    console.log(comp);

     const name =val.state.url.split('/');
    console.log(name[1]);
    console.log(val.state.root.firstChild!.routeConfig!);
    // deactivate all tabs
    this.deactivateTabs();
    if( typeof(name[1]) === 'string' ) { console.log("true"); }
    // check if the tab to be activated is already existing
    if (this.tabs.find(tab => tab.name ==name[1] ) == null) {

      // if not, push it into the tab array
      this.tabs.push({
        name: name[1],
        component: comp,
        key: name[1],
        active: true,
        route:  val.state.root.firstChild!.routeConfig!,
        count: new BehaviorSubject<number>(0)
      });
     console.log(this.tabs);
    } else {
      // if the tab exists, activate it
      const tabToActivate = this.tabs.find(tab => tab.name == name[1]);
      if (tabToActivate) {
        tabToActivate.active = true;
      }
    }

    this.cd.markForCheck();
  }

  deactivateTabs() {
    this.tabs.forEach(tab => (tab.active = false));
  }

  navItems: NavItem[] = [
    {  "Parentid":0,
    "id": 0,  
    "name": "Home",  
    "icon":"ion-ios-analytics-outline",
    route:""
  },
    {  
      "Parentid": 0,
      "id":1,  
      "name": "Form", 
      "icon":"icon ion-ios-gear-outline", 
       children: [
        {
          "Parentid":1,
          "id": 2,
          "name": 'Form Details',
         
          children:[
            {
              "Parentid":2,
              "id":1,
              "name":"Form Elements",
              "route":"formElements"
             
            },
            {
              "Parentid":2,
              "id":2,
              "name":"Form Layout",
              "route":"formLayout"
            },
            {
              "Parentid":2,
              "id":1,
              "name":"Form Validation",
              "route":"formValidation"
             
            },
<<<<<<< HEAD
           
=======
            {
              "Parentid":2,
              "id":2,
              "name":"Form Wizard",
              "route":"formwizards"
            }
>>>>>>> 2f61bbedcd99e7e6e3de26b13e818bec21a8703f
            
          ],
          
        }
       ]
      
      }
  
  ,  
    {  "Parentid":0,
      "id": 2,  
      "name": "UI Elements",  
      "icon":"icon ion-ios-filing-outline",
      "children":[
        {
          "Parentid":2,
          "id":1,
          "name":"Accordion",
          "route" :"Accordion"
        }
<<<<<<< HEAD
=======
      
          
           
            
          ]
        
    
      
>>>>>>> 2f61bbedcd99e7e6e3de26b13e818bec21a8703f
      
       ]

    },  
    {  "Parentid":0,
      "id": 3,  
      "name": "Charts",  
      "icon":"ion-ios-analytics-outline",
       "children":[
        {
          "Parentid":3,
          "id":1,
          "name":"Chart Morris",
          "route" :"chartMorris"
        },
        {
          "Parentid":3,
          "id":2,
          "name":"Rickshaw",
          "route" :"chartRickshaw"
        }
      
       ]
    },  
    { "Parentid":0, 
      "id": 4,  
      "name": "Maps",  
      "icon":"ion-ios-navigate-outline"
    },  
    {  "Parentid":0,
      "id": 5,  
      "name": "Tables",  
      "icon":"ion-ios-list-outline"
    }  
      
  ];
  
 

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



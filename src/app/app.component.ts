import { Component, VERSION } from '@angular/core';
import { MultilevelMenuService, ExpandCollapseStatusEnum, MultilevelNodes, Configuration } from 'ng-material-multilevel-menu';
import {SlideInOut, ExpandedRTL, ExpandedLTR } from 'ng-material-multilevel-menu';
import { NavItem } from './nav-item';


//import studentsData from './Data.json';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
  animations: [
    SlideInOut,
    ExpandedLTR,
    ExpandedRTL,
  ]
})
export class AppComponent {
  title = 'Demo';
  navItems: NavItem[] = [
    {  
      "Parentid": 0,
      "id":1,  
      "name": "Form", 
      "icon":"ion-ios-gear-outline", 
       children: [
        {
          "Parentid":1,
          "id": 2,
          "name": 'Form Details',
          "route":"/formElements",
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
            }
            
          ],
          
        }
       ]
      
      }
  
  ,  
    {  "Parentid":0,
      "id": 2,  
      "name": "UI Elements",  
      "icon":"ion-ios-filing-outline",
      "children":[
        {
          "Parentid":2,
          "id":1,
          "name":"UI Elements",
          
          "children":[
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
            }
            
          ]
        }
    
      ]
      
    },  
    {  "Parentid":0,
      "id": 3,  
      "name": "Charts",  
      "icon":"ion-ios-analytics-outline"
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

  constructor(){

  }
  
}

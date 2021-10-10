export interface listdata {
    ParentId:Number;
    id:number;
    name: string;
    route?: string;
    icon?:string;
   
   
  }

 export  const data = [
    {
        id:1,name:"Home",route:"Home", ParentId:0,icon:"icon ion-ios-home-outline"
    },
    {
        id: 2, name: "Forms",  ParentId: 0,icon:"icon ion-ios-gear-outline"
    },
    {
        id: 3, name: "Form Details", ParentId: 2
    },
    {
        id: 4, name: "Form Elements",
        route: "Form Elements",
        ParentId: 3
    },
    {
        id: 5, name: "Form Layout",
        route: "Form Layout",
        ParentId: 3
    },
    {
      id: 6,
      name: "Form Validation",
      route : "Form Validation",
      ParentId : 3
    },
    {
        id: 7,
        name: "UI Elements",ParentId : 0,icon:"icon ion-ios-filing-outline"
    },
    {
        id: 8, 
        name: "Accordion",
        route: "Accordion",
        ParentId: 7
    },
    {
        id: 9,
        name: "Button",
        route: "Button",
        ParentId: 7
    },
    {
        id: 10,
        name: "Charts",  ParentId: 0,icon:"icon ion-ios-analytics-outline"
    },
    {
        id: 11,
        name: "Chart Morris",
        route: "Chart Morris",
        ParentId: 10
    },
    {
        id: 12,
        name: "Chart Rickshaw",
        route: "Chart Rickshaw",
        ParentId: 10
    },
    {
        id: 13,
        name: "Maps", ParentId: 0, icon:"icon ion-ios-navigate-outline"
    },
    {
        id: 14,
        name: "Tables", ParentId: 0,icon:"icon ion-ios-list-outline"
    },
    {
        id: 15,
        name: "Basic Table",
        route: "Basic Table",
        ParentId: 14
    },
   

];


export const listToTree = function list_to_tree(menus: any[]) {
    let parentMenus: string | any[];
    parentMenus = menus.filter((x: { ParentId: string; }) => x.ParentId == "0");
    for (var i = 0; i < parentMenus.length; i++) {
      let childMenus: string | any[];
      
      childMenus = menus.filter(
        (x: { ParentId: any; }) => x.ParentId === parentMenus[i].id
      );
      parentMenus[i].childMenus = childMenus;
    
      for (var j = 0; j<childMenus.length;j++){
       let subChildMenus = menus.filter(
            (x: { ParentId: any; }) => x.ParentId === childMenus[j].id
          );
          if(subChildMenus.length >=1){
            parentMenus[i].childMenus[j].subChildMenus = subChildMenus;
          }
          
      }
     
    }
    return parentMenus;
  }

 
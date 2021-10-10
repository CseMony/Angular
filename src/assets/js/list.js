const data = [
    {
        id:1,name:"Home",url:"Home", ParentId:0
    },
    {
        id: 2, name: "Forms",  ParentId: 0
    },
    {
        id: 3, name: "Form Details", ParentId: 2
    },
    {
        id: 4, name: "Form Elements",
        url: "Form Elements",
        ParentId: 3
    },
    {
        id: 5, name: "Form Layout",
        url: "Form Layout",
        ParentId: 3
    },
    {
      id: 6,
      name: "Form Validation",
      url : "Form Validation",
      ParentId : 3
    },
    {
        id: 7,
        name: "UI Elements",
        
        ParentId : 0
    },
    {
        id: 8, 
        name: "Accordion",
        url: "Accordion",
        ParentId: 7
    },
    {
        id: 9,
        name: "Button",
        url: "Button",
        ParentId: 7
    },
    {
        id: 10,
        name: "Charts",
        
        ParentId: 0
    },
    {
        id: 11,
        name: "Chart Morris",
        url: "Chart Morris",
        ParentId: 10
    },
    {
        id: 12,
        name: "Chart Rickshaw",
        url: "Chart Rickshaw",
        ParentId: 10
    },
    {
        id: 13,
        name: "Maps",
      
        ParentId: 0
    },
    {
        id: 14,
        name: "Tables",
      
        ParentId: 0
    },
    {
        id: 15,
        name: "Basic Table",
        url: "Basic Table",
        ParentId: 14
    },
   

];


 const listToTree = function list_to_tree(menus) {
    let parentMenus;
    parentMenus = menus.filter((x) => x.ParentId == "0");
    for (var i = 0; i < parentMenus.length; i++) {
      let childMenus;
      
      childMenus = menus.filter(
        (x) => x.ParentId === parentMenus[i].id
      );
      parentMenus[i].childMenus = childMenus;
    
      for (var j = 0; j<childMenus.length;j++){
       let subChildMenus = menus.filter(
            (x) => x.ParentId === childMenus[j].id
          );
          if(subChildMenus.length >=1){
            parentMenus[i].childMenus[j].subChildMenus = subChildMenus;
          }
          
      }
     
    }
    return parentMenus;
  }

 
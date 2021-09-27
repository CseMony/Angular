export interface NavItem {
    Parentid:Number;
    id:number;
    name: string;
    route?: string;
    icon?: string;
   
    children?: NavItem[];
  }
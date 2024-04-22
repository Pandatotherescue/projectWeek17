export interface Item{
    itemId: number;
    title: string;
    description:string;
    startPrice:number;
    actualPrice:number;
    expires:Date; 
    category: Enumerator;
    image: string;
    
    active:boolean; // Status
    
    
    winner:string;
};

  
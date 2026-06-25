export type productT = {
  id?: string;
  name: string;
  price: string | number ;
  importance: "High" | "Medium" | "Low" ;
  category: string;
  purchaseDate: string;
  durationMonths: number;
  receipt?: string;
}


export type productsInStateT = {

    products : productT[];

}





import { product } from "../models/product";

const taxRate = 4.75;
const groceriesTaxRate = 3;

//making sure only groceries are taxed 3 percent 
export function calculateTax(product: product): number {
  let taxRate = 4.75;          

  if (product.category === "groceries") {
    taxRate = 3;               
  }

  return product.price * (taxRate / 100);
}
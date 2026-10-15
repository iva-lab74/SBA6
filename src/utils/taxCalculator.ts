import { Product } from "/src/Product";

const taxRate = 4.75;
const groceriesTaxRate = 3;

//making sure only groceries are taxed 3 percent 
export function calculateTax(product: Product): number {
    const taxRate = product.category !== "groceries" ? taxRate : groceriesTaxRate;
    const taxAmount = product.price * (taxRate / 100);
    return Math.round(taxAmount * 100) / 100;
}
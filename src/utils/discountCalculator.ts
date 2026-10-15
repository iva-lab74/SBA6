import { Product } from ".../src/models/Product";

//making a discount to be used, dollar amount taken off

export function calculateDiscount(product: Product): number {
    const discountAmount = product.price * ( product.discountPercentage / 100);
    return Math.round(discountAmount * 100) 100;
}


   
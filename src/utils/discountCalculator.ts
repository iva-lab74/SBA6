import { product } from "../models/product";

//making a discount to be used, dollar amount taken off

export function calculateDiscount(product: product): number {
    const discountAmount = product.price * ( product.discountPercentage / 100);
    return Math.round(discountAmount * 100) / 100;
}


   
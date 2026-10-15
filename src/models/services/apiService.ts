import { product } from "../models/product";

const apiurl = "https://dummyjson.com/products";

//getting the data, turning into objects
export async function fetchProductData(): Promise<product[]> {
    try {
        const response = await fetch(apiurl);
        const data = await response.json();

        const products: product[] = [];
        for ( const item of data. products) {
            const Product = new product (
                item.id,
                item.title,
                item.price,
                item.discountPercentage,
                item.category
            );
            products.push(Product);
        }
        
        //error handling 
        return products;
    }   catch (error) {
        console.error("Could not fetch products:", error);
        return[];
    }
}



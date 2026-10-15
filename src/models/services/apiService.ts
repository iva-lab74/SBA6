import { Product } from "../models/Product";

const apiurl = "https://dummyjson.com/products";

//getting the data, turning into objects
export async function fetchProductData(): Promise<Product[]> {
    try {
        const response = await fetch(apiurl);
        const data = await response.json();

        const products: Product[] = [];
        for ( const item of data. products) {
            const product = new Product (
                item.id,
                item.title,
                item.price,
                item.discountPercentage,
                item.category
            );
            products.push(product);
        }
        
        //error handling 
        return products;
    }   catch (error) {
        console.error("Could not fetch products:", error);
        return[];
    }
}



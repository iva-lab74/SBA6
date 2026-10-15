import { product } from "./models/product";
import { fetchProducts } from "./models/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { apiError, errorhandler } from "./utils/errorHandler";

//getting the first three
async function main() {
    const products: product[] = await fetchProducts();

    for (const product of products.slice(0, 3)) {
        product.displayDetails();
        console.log("Discount: $" + calculateDiscount(product).toFixed(2));
        console.log("tax: $" + calculateTax(product). toFixed(2));
        console.log("");
    }

    //pretend error handling
    console.log("Invalid product");
    

    try {
        throw new apiError ("Testing");
    } catch (error) {
        errorhandler(error);
    }
}

//need main for the program to start
main();


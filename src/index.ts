import { product } from "./models/Product";
import { fetchProducts, fetchProductNyId } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxcalculator";
import { apiError, errorhandler } from "./utils/errorhandler";

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


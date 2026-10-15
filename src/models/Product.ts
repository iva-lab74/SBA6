
export class product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;

    constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string
    ){
        
     this.id = id;
     this.title = title;
     this.description = description;
     this.price = price;
     this.discountPercentage = discountPercentage;
     this.rating = rating;
     this.stock = stock;
     this.brand = brand;
     this.category = category;
    }

//displaying product details for the user
    displayDetails(): void {
        console.log(`${this.title} (${this.brand})`);
        console.log(`Category: ${this.category}`);
        console.log(`Original price: $${this.price}`);
        console.log(`Discounted price: $${this.getPriceWithDiscount()}`);
        console.log(`Rating: ${this.rating}/5`);
        console.log(`In Stock: ${this.stock}`);
    }

//total price with discount method
    getPriceWithDiscount(): number {
        const discountAmount = this.price * (this.discountPercentage / 100);
        return this.price - discountAmount;
    }
}


//custom error message
export class apiError extends Error {
    constructor (message : string) {
        super(message); 
    }
}

//showing the error
export function errorHandler(error: any): void {
    if (error instanceof apiError ) {
        console.log("API error:" + error.message);
    } else {
        console.log("Something went wrong: " + error.message);
    }
}
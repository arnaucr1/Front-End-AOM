export class Subscription {
    subscriptionID:number = 0;
    subscriptionName:string = "";
    description:string = "";
    cycle:number = 0;
    firstBill:Date = new Date();
    remainMe:number = 0;
    price:number = 0;
    userID:number = 0;

    constructor(subscriptionID:number, subscriptionName:string, description:string="", cycle:number, firstBill:Date, remainMe:number, price:number, userID:number) {
        this.subscriptionID = subscriptionID;
        this.subscriptionName = subscriptionName;
        this.description = description;
        this.cycle = cycle;
        this.firstBill = firstBill;
        this.remainMe = remainMe;
        this.price = price;
        this.userID = userID;
    }
}
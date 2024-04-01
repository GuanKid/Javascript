class TotalCostCalculator {
    #item1Price;
    #item2Price;

    constructor(item1Price, item2Price) {
        this.#item1Price = item1Price;
        this.#item2Price = item2Price;
    }

        calculateTotalCost(quantityItem1, quantityItem2) {
        return (quantityItem1 * this.#item1Price) + (quantityItem2 * this.#item2Price);
    }

       get totalCost() {
        return this.calculateTotalCost(this.quantityItem1, this.quantityItem2);
    }
}

const order1 = new TotalCostCalculator(10, 15);
order1.quantityItem1 = 2;
order1.quantityItem2 = 3;
console.log("Total cost for order 1:", order1.totalCost);

const order2 = new TotalCostCalculator(8, 12);
order2.quantityItem1 = 4;
order2.quantityItem2 = 2;
console.log("Total cost for order 2:", order2.totalCost);

const order3 = new TotalCostCalculator(7, 10);
order3.quantityItem1 = 1;
order3.quantityItem2 = 5;
console.log("Total cost for order 3:", order3.totalCost);

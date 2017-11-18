import {
    CurrencyMap
} from 'app/constants';

export class Product {
    get normalizedPrice() {
        return CurrencyMap[this.price.currency] + this.price.decimals;
    }

    constructor(objectDefinition) {
        this.id = objectDefinition.id
        this.title = objectDefinition.title;
        this.price = objectDefinition.price;
        this.picture = objectDefinition.picture;
    }
}

export class ProductDetails extends Product {}
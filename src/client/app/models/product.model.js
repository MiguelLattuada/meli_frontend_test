import {
    CurrencyMap
} from 'app/constants';

export class Product {
    constructor(objectDefinition) {
        this.id = objectDefinition.id
        this.title = objectDefinition.title;
        this.price = objectDefinition.price;
        this.thumbnail = objectDefinition.thumbnail;
        this.currency = CurrencyMap[objectDefinition.currency_id];
    }
}

export class ProductDetails extends Product {}
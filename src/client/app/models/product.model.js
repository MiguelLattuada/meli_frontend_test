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

export class ProductListResponse {
    constructor(response) {
        this.author = response.author;
        this.categories = response.categories;
        this.items = response.items.map(item => new Product(item));
    }
}

export class ProductDetails extends Product {}
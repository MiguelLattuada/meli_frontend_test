import {
    CurrencyMap
} from 'app/constants';

export class Product {
    get normalizedPrice() {
        return CurrencyMap[this.price.currency] + ' ' + this.price.decimals;
    }

    constructor(objectDefinition) {
        this.id = objectDefinition.id
        this.title = objectDefinition.title;
        this.free_shipping = objectDefinition.free_shipping;
        this.price = objectDefinition.price;
        this.condition = objectDefinition.condition;
        this.picture = objectDefinition.picture;
        this.category = objectDefinition.category_id;
    }
}

export class ProductListResponse {
    constructor(response) {
        this.author = response.author;
        this.categories = response.categories;
        this.items = response.items && response.items.map(item => new Product(item));
    }
}

export class ProductDetails extends Product {
    constructor(objectDefinition) {
        super(objectDefinition);
        this.description = objectDefinition.description;
        this.sold_quantity = objectDefinition.sold_quantity;
        this.category = objectDefinition.category;
    }
}

export class ProductDetailResponse {
    constructor(response) {
        this.author = response.author;
        this.item = new ProductDetails(response.item);
    }
}
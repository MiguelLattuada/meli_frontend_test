/**
 * Author
 * 
 * @class Author
 */
class Author {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    toJson() {
        const {
            name,
            lastname
        } = this;
        return {
            name,
            lastname
        };
    }
}
/**
 * Item
 * 
 * @class Item
 */
class Item {
    constructor(json) {
        this.id = json.id;
        this.title = json.title;
        this.free_shipping = json.shipping.free_shipping;
        this.price = {
            currency: json.installments.currency_id,
            amount: json.installments.amount,
            decimals: json.price
        };
        this.condition = json.condition;
        this.picture = json.thumbnail;
        this.category = json.category_id;
    }

    toJson() {
        const {
            id,
            title,
            price,
            picture,
            condition,
            free_shipping
        } = this;
        return {
            id,
            title,
            price,
            picture,
            condition,
            free_shipping
        };
    }
}
/**
 * Item details
 * 
 * @class ItemDetail
 * @extends {Item}
 */
class ItemDetail extends Item {
    constructor(json) {
        json.installments = {};
        super(json);
        this.price = {
            currency: json.currency_id,
            decimals: json.price
        }
        this.description = json.description;
        this.sold_quantity = json.sold_quantity;
    }

    toJson() {
        const _result = super.toJson(),
            {
                description,
                sold_quantity
            } = this;
        return Object.assign({
            description,
            sold_quantity
        }, _result);
    }
}
/**
 * Item detail response
 * 
 * @class ItemDetailResponse
 */
class ItemDetailResponse {
    constructor(json) {
        this.author = new Author('Miguel', 'Lattuada');
        this.item = new ItemDetail(json);
    }
    toJson() {
        return {
            author: this.author.toJson(),
            item: this.item.toJson()
        };
    }
}
/**
 * Response
 * 
 * @class ItemsSearchResponse
 */
class ItemsSearchResponse {
    constructor(json) {
        this.author = new Author('Miguel', 'Lattuada');
        this.categories = this._getMostPopularCategory(json);
        this.items = this._constructItemsArray(json.results);
    }
    /**
     * Creates an array of Items
     * 
     * @returns {Array<Item>}
     * @memberof ItemsSearchResponse
     */
    _constructItemsArray(results) {
        return results.map(result => new Item(result));
    }
    /**
     * Get category filter from response
     * 
     * @param {any} json 
     * @returns 
     * @memberof ItemsSearchResponse
     */
    _getMostPopularCategory(json) {
        try {
            const categoryFilter = json.filters.find(ft => ft.id === 'category'),
                value = categoryFilter.values[0];
            return value.path_from_root.map(path => path.name);
        } catch (e) {
            return [];
        }
    }

    toJson() {
        return {
            author: this.author.toJson(),
            categories: this.categories,
            items: this.items.map(item => item.toJson())
        };
    }
}

exports.Author = Author;
exports.Item = Item;
exports.ItemDetail = ItemDetail;
exports.ItemDetailResponse = ItemDetailResponse;
exports.ItemsSearchResponse = ItemsSearchResponse;
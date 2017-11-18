import {
    Product
} from 'app/models/product.model';

export class ProductHTTPService {
    /**
     * Get a set of products based on search
     * 
     * @static
     * @param {any} query 
     * @returns {Promise<Product>}
     * @memberof ProductHTTPService
     */
    static getProducts(query) {
        return fetch(`https://api.mercadolibre.com/sites/MLU/search?q=${query}`)
            .then(ProductHTTPService.normalizeResponse)
            .then(ProductHTTPService.normalizeJson);
    }

    /**
     * Convert Response object into json
     * 
     * @static
     * @param {Response} response 
     * @memberof ProductHTTPService
     */
    static normalizeResponse(response) {
        return response.json();
    }

    /**
     * Convert json object into Product
     * 
     * @static
     * @param {any} json 
     * @memberof ProductHTTPService
     */
    static normalizeJson(json) {
        return new Promise((resolve, reject) => {
            try {
                resolve(json.results.map(result => new Product(result)));
            } catch (e) {
                reject('Could not normaliize json response. ' + e);
            }
        });
    }
}
import {
    ProductListResponse
} from 'app/models/product.model';
import {
    URLS
} from 'app/constants';

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
        return fetch(URLS.API.search.concat(query))
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
                resolve(new ProductListResponse(json));
            } catch (e) {
                reject('Could not normaliize json response. ' + e);
            }
        });
    }
}
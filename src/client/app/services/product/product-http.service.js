import {
    ProductListResponse
} from 'app/models/product.model';
import {
    URLS
} from 'app/constants';

export class ProductHTTPService {
    /**
     * Get product detail for id
     * 
     * @static
     * @param {string} id 
     * @returns {Promise<>}
     * @memberof ProductHTTPService
     */
    static getProductDetail(id) {
        return fetch(URLS.API.details.concat(id))
            .then(ProductHTTPService.normalizeResponse)
            .then((json) => ProductHTTPService.normalizeJson(json, ProductListResponse));
    }
    /**
     * Get a set of products based on search
     * 
     * @static
     * @param {any} query 
     * @returns {Promise<ProductListResponse>}
     * @memberof ProductHTTPService
     */
    static getProducts(query) {
        return fetch(URLS.API.search.concat(query))
            .then(ProductHTTPService.normalizeResponse)
            .then((json) => ProductHTTPService.normalizeJson(json, ProductListResponse));
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
     * Convert json object into a model
     * 
     * @static
     * @param {any} json 
     * @param {Function} constructor
     * @memberof ProductHTTPService
     */
    static normalizeJson(json, fn) {
        return new Promise((resolve, constructor) => {
            try {
                resolve(new fn(json));
            } catch (e) {
                reject('Could not normaliize json response. ' + e);
            }
        });
    }
}
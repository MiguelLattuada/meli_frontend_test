const https = require('https'),
    {
        ItemsSearchResponse,
        ItemDetailResponse,
        ItemDetailResponseError
    } = require('./model');

// ML urls
const URLS = {
    search: 'https://api.mercadolibre.com/sites/MLA/search?limit=4&q=',
    category: 'https://api.mercadolibre.com/categories/',
    details: 'https://api.mercadolibre.com/items/',
    description: 'https://api.mercadolibre.com/items/:id/description'
};
/**
 * Call a given constructor with data and return a promise
 * 
 * @param {any} json 
 * @param {Function} fn 
 * @returns {Promise}
 */
function _serializeTo(json, fn) {
    const _localPromise = new Promise((resolve, reject) => {
        try {
            resolve(new fn(json));
        } catch (e) {
            reject(e);
        }
    });
    return _localPromise;
}
/**
 * Convert json response into ItemSearchResponse
 * 
 * @param {any} json 
 * @returns 
 */
const serializeItemsSearchResponse = (json) => {
    return _serializeTo(json, ItemsSearchResponse);
};
/**
 * Convert json response into ItemDetailResponse
 * 
 * @param {any} json 
 * @returns 
 */
const serializeItemDetailResponse = (json) => {
    if (json.error) {
        return _serializeTo(json, ItemDetailResponseError);
    }
    return _serializeTo(json, ItemDetailResponse);
};
/**
 * Make an http GET request through https node module
 * 
 * @param {any} url 
 * @returns 
 */
const request = (url) => {
    const _localPromise = new Promise((resolve, reject) => {
        https.get(url, (response) => {
            response.setEncoding('utf-8');
            let _incomingData = '';
            // Accumulate chuncks
            response.on('data', (_cod) => {
                _incomingData += _cod;
            });
            // Parse all data
            response.on('end', () => {
                try {
                    resolve(JSON.parse(_incomingData));
                } catch (e) {
                    reject(e);
                }
            });
        });
    });
    return _localPromise;
};
/**
 * Get category info for items
 * 
 * @param {ItemDetailResponse} itemDetail 
 * @returns 
 */
const fetchCategoryInformation = (itemDetail) => {
    if (itemDetail instanceof ItemDetailResponseError) return itemDetail;

    return request(URLS.category.concat(itemDetail.item.category)).then(categoryResult => {
        itemDetail.item.category = categoryResult;
        return itemDetail;
    });
};
/**
 * Get full description for item.
 * 
 * @param {ItemDetailResponse} itemDetail 
 * @returns 
 */
const fetchDescriptionInformation = (itemDetail) => {
    if (itemDetail instanceof ItemDetailResponseError) return itemDetail;

    const url = URLS.description.replace(/:id/, itemDetail.item.id);
    return request(url).then(descResult => {
        itemDetail.item.description = descResult.text;
        return itemDetail;
    });
};

exports.URLS = URLS;
exports.request = request;
exports.serializeItemsSearchResponse = serializeItemsSearchResponse;
exports.serializeItemDetailResponse = serializeItemDetailResponse;
exports.fetchCategoryInformation = fetchCategoryInformation;
exports.fetchDescriptionInformation = fetchDescriptionInformation;
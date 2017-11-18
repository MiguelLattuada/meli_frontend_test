const https = require('https'),
    {
        ItemsSearchResponse
    } = require('./model');

// ML urls
const URLS = {
    search: 'https://api.mercadolibre.com/sites/MLA/search?limit=4&q=',
    details: '',
    category: 'https://api.mercadolibre.com/categories/'
};
/**
 * Convert json response into ItemSearchResponse
 * 
 * @param {any} json 
 * @returns 
 */
const serializeItemsSearchResponse = (json) => {
    const _localPromise = new Promise((resolve, reject) => {
        try {
            resolve(new ItemsSearchResponse(json));
        } catch (e) {
            reject(e);
        }
    });
    return _localPromise;
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
 * Get information for categories.
 * 
 * @param {ItemsSearchResponse} response 
 * @returns 
 */
const fetchCategoryInformation = (category) => {
    request(URLS.category.concat(category));
};

exports.URLS = URLS;
exports.request = request;
exports.serializeItemsSearchResponse = serializeItemsSearchResponse;
exports.fetchCategoryInformation = fetchCategoryInformation;
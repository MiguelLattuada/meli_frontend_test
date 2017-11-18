const https = require('https');

// ML urls
const URLS = {
    search: 'https://api.mercadolibre.com/sites/MLA/search?q=',
    details: ''
}

/**
 * Make an http GET request through https node module
 * 
 * @param {any} url 
 * @returns 
 */
function request(url) {
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
}

/**
 * Search for items
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
function searchItems(req, res) {
    const {
        q
    } = req.query;
    request(URLS.search.concat(q)).then(json => {
        res.json(json);
    }).catch(error => {
        res.status(500).send(error);
    })
}

exports.searchItems = searchItems;
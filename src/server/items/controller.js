const {
    serializeItemsSearchResponse,
    fetchCategoriesInformation,
    request,
    URLS
} = require('./utils');

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
    request(URLS.search.concat(q))
        .then(serializeItemsSearchResponse)
        .then(fetchCategoriesInformation)
        .then(json => {
            res.json(json);
        }).catch(error => {
            res.status(500).send(error);
        })
}

exports.searchItems = searchItems;
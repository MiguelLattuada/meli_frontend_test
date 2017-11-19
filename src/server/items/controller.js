const {
    serializeItemsSearchResponse,
    serializeItemDetailResponse,
    fetchCategoryInformation,
    fetchDescriptionInformation,
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
        .then(json => {
            res.json(json);
        }).catch(error => {
            res.status(500).send(error);
        });
}
/**
 * Get item details
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
function getItem(req, res) {
    const {
        id
    } = req.params;
    request(URLS.details.concat(id))
        .then(serializeItemDetailResponse)
        .then(fetchDescriptionInformation)
        .then(fetchCategoryInformation)
        .then(json => {
            res.json(json);
        }).catch(error => {
            res.status(500).send(error);
        });
}

exports.searchItems = searchItems;
exports.getItem = getItem;
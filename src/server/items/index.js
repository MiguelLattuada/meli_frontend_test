const router = require('express').Router(),
    controller = require('./controller');
// Routes
router.get('/', controller.searchItems);
router.get('/:id', controller.getItem);
module.exports = router;
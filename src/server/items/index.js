const router = require('express').Router(),
    controller = require('./controller');
// Routes
router.get('/items', controller.searchItems);
module.exports = router;
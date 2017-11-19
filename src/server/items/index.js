const router = require('express').Router(),
    controller = require('./controller');
// Routes
router.get('/', controller.searchItems);
module.exports = router;
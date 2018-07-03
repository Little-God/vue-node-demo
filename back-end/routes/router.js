let express = require('express');
let goods = require('../controls/goods')
let action = require('../controls/action')
let router = express.Router();

router.get('/goods-list', goods.fetchAll);
router.post('/addgoods', goods.addOne);
router.post('/deletegoods', goods.deletegoods);

router.get('/action-list', action.fetchAll);
router.post('/addaction', action.addOne);
router.post('/deleteaction', action.deletegoods);
router.post('/test', action.testajax);

module.exports = router;
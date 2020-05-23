const router = require('express').Router();
const ApplicationController = require('../../controllers/ApplicationController');

router.get('/', ApplicationController.get);
router.post('/', ApplicationController.store);
router.put('/', ApplicationController.update);

module.exports = router;


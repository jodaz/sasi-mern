const router = require('express').Router();
const ParishController = require('../../controllers/ParishController');

router.get('/', ParishController.get);
router.post('/', ParishController.store);
router.put('/', ParishController.update);

module.exports = router;


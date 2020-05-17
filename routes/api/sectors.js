const router = require('express').Router();
const SectorController = require('../../controllers/SectorController');

router.get('/', SectorController.get);
router.post('/', SectorController.store);

module.exports = router;


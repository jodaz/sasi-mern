const router = require('express').Router();
const SectorController = require('../../controllers/SectorController');

router.get('/', SectorController.get);
router.post('/', SectorController.store);
router.put('/', SectorController.update);

module.exports = router;


const router = require('express').Router();
const NoveltyController = require('../../controllers/NoveltyController');

router.get('/', NoveltyController.get);
router.post('/', NoveltyController.store);
router.put('/', NoveltyController.update);

module.exports = router;


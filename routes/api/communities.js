const router = require('express').Router();
const CommunityController = require('../../controllers/CommunityController');

router.get('/', CommunityController.get);
router.post('/', CommunityController.store);
router.put('/', CommunityController.update);

module.exports = router;


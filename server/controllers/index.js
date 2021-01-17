const router = require('express').Router()

router.use('/campuses', require('./Campus'));
router.use('/students', require('./Student'));

module.exports = router


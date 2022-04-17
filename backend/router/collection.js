const express = require('express')
const collectionController = require('../controller/collectionController')
const router = express.Router()

router.get('/api/v1/collection/:category', collectionController.allCollection)
router.get('/api/v1/getCollection/:id', collectionController.getCollectionById)
router.post('/api/v1/addCollection', collectionController.addCollection)

module.exports = router

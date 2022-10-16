//lưu thông tin của các trang home, search, contact
const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;

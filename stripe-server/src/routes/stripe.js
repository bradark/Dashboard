const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const { ensureAuthenticated } = require('../../../server/src/routes/ensureAuth');

router.get('/', paymentController.index)
router.get('/stripe/redirect', paymentController.redirect)

module.exports = router;
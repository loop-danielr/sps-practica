const express = require('express');
const router = express.Router();

const ParticipanteService = require('../service/ParticipanteService.js'); 

router.get('/', ParticipanteService.get);
router.post('/', ParticipanteService.post);

module.exports = router;
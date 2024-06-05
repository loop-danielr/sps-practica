const express = require('express');
const router = express.Router();

const HabilidadService = require('../service/HabilidadService.js'); 

router.get('/', HabilidadService.get);
router.get('/byId', HabilidadService.getById);
router.post('/', HabilidadService.post);
router.put('/', HabilidadService.put);
router.delete('/', HabilidadService.delete);

module.exports = router;

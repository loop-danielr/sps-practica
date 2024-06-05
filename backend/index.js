const HablidadController = require('./src/controller/HabilidadController.js');

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3307;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/habilidad', HablidadController);

app.listen(port, () => {
    console.log(`Server on port ${port}`)
});

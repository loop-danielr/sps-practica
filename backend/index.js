const HablidadController = require('./src/controller/HabilidadController.js');
const ParticipanteController = require('./src/controller/ParticipanteController.js');
const ParticipanteHabilidadController = require('./src/controller/ParticipanteHabilidadController.js');

const express = require('express');
const cors = require('cors');

// Puerto a ejecutar
const port = process.env.BACK_PORT;
// Instanciar express
const app = express();

app.use(cors());
// obtener el body del request en formato json
app.use(express.json());

// Rutas habilitadas por el controlador
app.use('/habilidad', HablidadController);
app.use('/participante', ParticipanteController);
app.use('/participanteHabilidad', ParticipanteHabilidadController);

// Ejecucion del proyecto
app.listen(port, () => {
    console.log(`-- EXPRESS LISTENING ON PORT ${port} --`);
});

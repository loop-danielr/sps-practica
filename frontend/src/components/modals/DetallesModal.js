import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import Modal from '@mui/material/Modal';

import ErrorIcon from '@mui/icons-material/Error';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const style = {
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: '#fff',
        border: '0px solid #000',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4
    },
    errorMessage: {
        textAlign: 'center'
    },
    list: {
        overflow: 'auto'
    }
};

function DetallesModal({ nombre, participanteId, fecha, hora }) {
    const [habilidades, setHabilidades] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        fetch("http://localhost:3307/participanteHabilidad/byParticipanteId", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ participanteId })
        })
            .then((res) => res.json())
            .then((data) => setHabilidades(data));
        setOpen(true);
    };

    const handleClose = () => {
        setHabilidades([]);
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" startIcon={<InfoIcon />} onClick={handleOpen}>
                Detalles
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ ...style.box }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <h4>Nombre</h4>
                            {nombre}
                        </Grid>
                        <Grid item xs={6}>
                            <h4>Fecha y Hora Agendada:</h4>
                            {fecha} {hora}
                        </Grid>
                        <Grid item xs={12}>
                            <List sx={{ ...style.list }}>
                                <h4>Habilidades:</h4>
                                {
                                    habilidades.length == 0 &&
                                    <ListItem sx={{ ...style.errorMessage }}>
                                        <ListItemText
                                            primary={
                                                <div>
                                                    <ErrorIcon /><br />No se encontraron habilidades registradas
                                                </div>
                                            }
                                        />
                                    </ListItem>
                                }
                                {
                                    habilidades.length > 0 && habilidades.map((habilidad) => {
                                        return (
                                            <ListItem key={habilidad.id}>
                                                {habilidad.nombre}
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" onClick={handleClose}>Cerrar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default DetallesModal;

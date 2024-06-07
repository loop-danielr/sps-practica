import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import dayjs from 'dayjs';

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

function AgregarModal({ handleParticipantesChange }) {
    const [nombre, setNombre] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [fecha, setFecha] = useState(dayjs(new Date()));
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setNombre('');
        setApellido1('');
        setApellido2('');
        setFecha(null);
        setOpen(false);
    };

    const handleNameChange = ({ target }) => setNombre(target.value);
    const handleApellido1Change = ({ target }) => setApellido1(target.value);
    const handleApellido2Change = ({ target }) => setApellido2(target.value);

    const handleSubmit = (e) => {
        const fechaAgendada = `${fecha.toISOString().substring(0, 10)}`;
        e.preventDefault();
        if (nombre == '') window.alert('El campo nombre esta vacio');
        else if (apellido1 == '') window.alert('El campo Primer Apellido esta vacio');
        else if (apellido2 == '') window.alert('El campo Segundo Apellido esta vacio');
        else {
            fetch("http://ec2-3-131-158-117.us-east-2.compute.amazonaws.com:3307/participante", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        nombre,
                        apellido1,
                        apellido2,
                        'fecha': fechaAgendada
                    }
                )
            })
                .then((res) => res.json())
                .then((data) => {
                    handleParticipantesChange(data, nombre, apellido1, apellido2, fechaAgendada);
                    handleClose();
                });
        }
    }

    return (
        <div>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
                Agregar Participante
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ ...style.box }}>
                    <form onSubmit={handleSubmit}>
                        <h2>Registro de participante</h2>
                        <Grid container>
                            <Grid item xs={12}>
                                <h4>Datos Personales:</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Nombre" variant="outlined" margin="dense" value={nombre} onChange={handleNameChange} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Primer Apellido" variant="outlined" margin="dense" value={apellido1} onChange={handleApellido1Change} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Segundo Apellido" variant="outlined" margin="dense" value={apellido2} onChange={handleApellido2Change} />
                            </Grid>
                            <Grid item xs={12}>
                                <h4>Fecha a agendar:</h4>
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker format="MM-DD-YYYY" label="Fecha" minDate={dayjs(new Date())} defaultValue={dayjs(new Date())} value={fecha} onChange={(newValue) => setFecha(newValue)} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}><br /></Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" color="error" onClick={handleClose}>Cerrar</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" color="success" onClick={handleSubmit}>Agregar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default AgregarModal;

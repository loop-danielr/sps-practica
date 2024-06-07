import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ErrorIcon from '@mui/icons-material/Error';
import { useEffect, useState } from 'react';
import DetallesModal from './modals/DetallesModal';
import AgregarModal from './modals/AgregarModal';

const style = {
  mainContainer: {
    width: '100%',
    maxWidth: '600px',
    maxHeight: '400px',
    backgroundColor: '#F0F3F4',
    borderRadius: '10px',
    paddingTop: '10px',
    paddingBottom: '30px'
  },
  list: {
    width: '100%',
    overflow: 'auto',
    maxWidth: 600,
    maxHeight: 360,
    bgcolor: '#F0F3F4',
    borderRadius: '10px'
  },
  errorMessage: {
    textAlign: 'center'
  },
  agregarAlign: {
    textAlign: 'right',
    paddingRight: '10px',
    paddingBottom: '10px'
  }
};

function HomeList() {
  const [participantes, setParticipantes] = useState([]);

  useEffect(() => {
    fetch("http://ec2-3-131-158-117.us-east-2.compute.amazonaws.com:3307/participante")
      .then((res) => res.json())
      .then((data) => setParticipantes(data));
  }, []);

  const handleParticipantesChange = (data, nombre, apellido1, apellido2, fechaAgendada) => {
    console.log(data, nombre, apellido1, apellido2, fechaAgendada);
    setParticipantes([...participantes, {'id': data, nombre, 'apellido_1': apellido1, 'apellido_2':apellido2, 'fecha': fechaAgendada}])
  };
  
  return (
    <div style={style.mainContainer}>
      <div style={style.agregarAlign}>
        <AgregarModal
          handleParticipantesChange={handleParticipantesChange}
        />
      </div>

      <List sx={{ ...style.list }}>
        {participantes.length == 0 &&
          <ListItem sx={{ ...style.errorMessage }}>
            <ListItemText
              primary={
                <div>
                  <ErrorIcon /><br />No se encontraron candidatos disponibles
                </div>
              }
            />
          </ListItem>
        }

        {participantes.length > 0 && participantes.map((participante) => {
          return (
            <ListItem
              key={participante.id}
              secondaryAction={
                <DetallesModal
                  nombre={`${participante.nombre} ${participante.apellido_1} ${participante.apellido_2}`}
                  participanteId={participante.id}
                  fecha={participante.fecha.substring(0, 10)}
                />
              }
            >
              <ListItemAvatar>
                <Avatar
                  // src={participante.fotografia}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${participante.nombre} ${participante.apellido_1} ${participante.apellido_2}`}
                secondary={
                  <span>
                    <i>Fecha Agendada:</i> {participante.fecha.substring(0, 10)} <br />
                  </span>
                }
              />
            </ListItem>
          );
        })
        }
      </List>
    </div>
  );
  // return (

  // );
}

export default HomeList;
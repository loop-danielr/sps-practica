import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

function HomeList() {
  const [participantes, setParticipantes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3307/participante")
      .then((res) => res.json())
    .then((data) => setParticipantes(data));
  }, []);

  return (
    <List sx={{ width: '100%', overflow: 'auto', maxWidth: 600, maxHeight: 360, bgcolor: 'background.paper' }}>

      {participantes.length == 0 &&
        <ListItem>
          <ListItemText
            primary={
              <div>
                <ErrorIcon /><br/>No se encontraron candidatos disponibles
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
              <Button variant="contained" startIcon={<InfoIcon />}>Detalles</Button>
            }
          >
            <ListItemAvatar>
              <Avatar
                src={participante.fotografia}
              />
            </ListItemAvatar>
            <ListItemText
              primary={`${participante.nombre} ${participante.apellido_1} ${participante.apellido_2}`}
              secondary={
                <div>
                  <i>Fecha Agendada:</i> {participante.fecha.substring(0, 10)} <br />
                  <i>Hora Agendada:</i> {new Date(Date.parse(participante.fecha)).toString().substring(16, 21)}
                </div>
              }
            />
          </ListItem>
        );
      })
      }
    </List>
  );
}

export default HomeList;
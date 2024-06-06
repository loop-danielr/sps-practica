import Box from '@mui/material/Box';

import HomeList from './components/HomeList';
import { Button } from '@mui/material';

function App() {
  const styleBox = {
    display: 'flex',
      width: '100vw',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor:'#34495E'
  }

  return (
    <Box
      sx={{...styleBox}}
    >
      <HomeList/>
    </Box>
  );
}

export default App;

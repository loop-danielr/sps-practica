import Box from '@mui/material/Box';

import HomeList from './component/Home/HomeList';

function App() {
  return (
    <Box
      display={'flex'}
      width={'100vw'}
      height={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
      bgcolor={'gray'}
    >
      <HomeList/>
    </Box>
  );
}

export default App;

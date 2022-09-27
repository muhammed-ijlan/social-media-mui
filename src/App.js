import { Box, Stack } from '@mui/material';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar"
import Add from './components/Add';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack flexDirection='row' justifyContent="space-between">

        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;

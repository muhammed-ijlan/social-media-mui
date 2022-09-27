import { Box, Stack } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar"

function App() {
  return (
    <Box>
      <Navbar />
      <Stack flexDirection='row' justifyContent="space-between">

        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>

    </Box>
  );
}

export default App;

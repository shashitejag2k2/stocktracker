import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MainPage from './MainPage';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Addstock } from './Addstock';
import ViewAllStocks from './ViewAllStocks';
import TrackStocks from './TrackStocks';

function App() {

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STOCKS
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
       <Router>
                <Routes>
                    <Route exact path="/" element={<MainPage/>} />
                    <Route exact path="/addstock" element={<Addstock/>} />
                    <Route exact path="/viewAllStocks" element={<ViewAllStocks/>} />
                    <Route exact path="/trackstocks" element={<TrackStocks/>} />
                </Routes>
               
            </Router>
    </div>
  );
}

export default App;

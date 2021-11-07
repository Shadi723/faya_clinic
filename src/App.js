import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PermanentDrawerLeft from './Shared/Drawer';

function App() {
  return (
    <div className="App">
      <PermanentDrawerLeft />
    </div>
  );
}

export default App;

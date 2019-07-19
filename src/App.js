import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Login from './Login';
import './App.css';


class App extends Component{
  render() {
    return (
      <div>
        <AppBar color ="primary" position="static">
        <Typography variant="title" color="inherit">
          <Toolbar>
            <h1>Pine Events</h1>
        </Toolbar>
        </Typography>
        
        </AppBar>
      <Login />
      </div>
    
    );
  }
}



export default App;

import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Login from './Login';
import SignUp from './SignUp';
import './App.css';
import Button from '@material-ui/core/Button';
import Link from'@material-ui/core/Link';


class App extends Component{
 render() {

    return (
      <div>
      <div style={{
        backgroundImage: "url(" + "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingBottom:10,
        }}>
      
        <Typography >
          <Toolbar>
            <h1 style = {{color: 'white', fontWeight:400, }}>Welcome to Pine Events</h1>
            
        </Toolbar>
        </Typography>
        <h4 style = {{color: 'white',margin:20,fontWeight:300,fontSize:20}}>The plartform that lets you plan and organise</h4>
        <h4  style = {{color: 'white',margin:20,fontWeight:300,fontSize:20}}> events in the shortest time possible</h4>
       
        <div 
        style={{
          margin:20
        }}> 
        
        <Button variant="contained" size="medium" >
        
        GET STARTED
        
        </Button>
        

        </div>
        <div 
        style={{
          margin:20,
          
        }}>
        <Button variant="contained" color="primary" size="medium" >
        LOGIN
        </Button>
        </div>
        
      </div>
        {/* <Login /> */}

        {/* <SignUp /> */}

      </div>

      
    
    );
  }
}



export default App;

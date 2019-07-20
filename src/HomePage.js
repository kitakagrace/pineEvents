import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

class HomePage extends Component {
  state = {
    redirectToLoginPage: false
  };
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage:
              'url(' +
              'https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' +
              ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingBottom: 10
          }}>
          <Typography>
            <Toolbar>
              <h1 style={{ color: 'white', fontWeight: 400 }}>
                Welcome to Pine Events
              </h1>
            </Toolbar>
          </Typography>
          <h4
            style={{
              color: 'white',
              margin: 20,
              fontWeight: 300,
              fontSize: 20
            }}>
            The plartform that lets you plan and organise
          </h4>
          <h4
            style={{
              color: 'white',
              margin: 20,
              fontWeight: 300,
              fontSize: 20
            }}>
            {' '}
            events in the shortest time possible
          </h4>

          <div
            style={{
              margin: 20
            }}>
            <Button variant="contained" size="medium">
              GET STARTED
            </Button>
          </div>
          <div
            style={{
              margin: 20
            }}>
            {this.state.redirectToLoginPage && <Redirect to="/login" />}
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => this.setState({ redirectToLoginPage: true })}>
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;

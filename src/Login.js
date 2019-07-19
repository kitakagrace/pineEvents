import React from "react";
import {
    FormControl,
    InputLabel,
    Input,
    Button
    } from '@material-ui/core';

class Login extends React.Component{
    render (){
        return (
            <div
            style={{
                display:"flex",
                justifyContent: "center",
                margin:20,
                padding:20
            }}>
                <form style={{width: "50%" }}>
                <h1>Login</h1>
                <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" type="email" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" type="password" />
                </FormControl>
                <Button variant="contained" color="primary" size="medium">
                Login
                </Button>
                </form>
            </div>

        );

    }

}

export default Login;
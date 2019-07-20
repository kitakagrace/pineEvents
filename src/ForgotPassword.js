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
                <Button variant="contained" color="primary" size="large">
                RESET PASSWORD
                </Button>
                </form>
            </div>

        );

    }

}

export default Login;
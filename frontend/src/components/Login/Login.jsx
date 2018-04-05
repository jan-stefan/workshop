import React from 'react';
import {Button, FormControl, FormGroup} from 'react-bootstrap';


const Login = props => (
    <div>
        <FormGroup>
            <FormControl
                type="text"
                value={props.username}
                placeholder="Username"
                onChange={props.usernameHandler}
            />
        </FormGroup>
        <FormGroup>
            <FormControl
                type="password"
                value={props.password}
                placeholder="Password"
                onChange={props.passwordHandler}
            />

        </FormGroup>
        <FormGroup>
            <Button bsStyle="primary" onClick={props.submitHandler}>
                Login
            </Button>
        </FormGroup>
    </div>
)

export default Login;
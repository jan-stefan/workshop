import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import Centering from '../Centering/Centering';

const Login = props => (
    <Centering>
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
    </Centering>
)

export default Login;
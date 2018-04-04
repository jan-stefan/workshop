import React from 'react';
import style from './style.css';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

const Login = props => (
    <div className={style.App}>
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
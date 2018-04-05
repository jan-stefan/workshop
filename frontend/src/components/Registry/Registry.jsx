import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

const Registry = props => (
    <div>
        <FormGroup>
            <FormControl
                type="text"
                value={props.firstname}
                placeholder="Firstname"
                onChange={props.firstnameHandler}
            />
        </FormGroup>
        <FormGroup>
            <FormControl
                type="text"
                value={props.lastname}
                placeholder="Lastname"
                onChange={props.lastnameHandler}
            />
        </FormGroup>
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
            <FormControl
                type="password"
                value={props.repeatPassword}
                placeholder="Repeat Password"
                onChange={props.repeatPasswordHandler}
            />

        </FormGroup>
        <FormGroup>
            <Button
                bsStyle="primary"
                onClick={props.submitHandler}
                disabled={props.disableSubmit}
            >
                Register
            </Button>
        </FormGroup>
    </div>
)

export default Registry;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistryDump from '../../components/Registry/Registry.jsx';
import { actions } from '../../actions';
import Centering from '../../components/Centering/Centering';
import { Collapse, Alert } from 'react-bootstrap';
import { ScaleLoader } from 'react-spinners';

const proxyToValue = proxy => proxy.target.value;


class Registry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            repeatPassword: ''
        }
        this.usernameHandler = this.usernameHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.firstnameHandler = this.firstnameHandler.bind(this);
        this.repeatPasswordHandler = this.repeatPasswordHandler.bind(this);
        this.lastnameHandler = this.lastnameHandler.bind(this);


    }

    usernameHandler(proxy) {
        this.setState({ username: proxyToValue(proxy) })
    }
    passwordHandler(proxy) {
        this.setState({ password: proxyToValue(proxy) })
    }
    submitHandler() {
        let state = this.state;
        delete state['repeatPassword'];
        this.props.startSendRegistration(state);
    }
    firstnameHandler(proxy) {
        this.setState({ firstname: proxyToValue(proxy) })
    }
    lastnameHandler(proxy) {
        this.setState({ lastname: proxyToValue(proxy) })
    }
    repeatPasswordHandler(proxy) {
        this.setState({ repeatPassword: proxyToValue(proxy) })
    }

    shouldDisableSubmit() {
        return !(this.state.repeatPassword === this.state.password
            && this.state.firstname !== ''
            && this.state.lastname !== ''
            && this.state.username !== ''
            && this.state.password !== '');
    }

    render() {
        return (
            <Centering>
                {
                    this.props.loading ?
                        <ScaleLoader/>
                        :
                        <RegistryDump
                            usernameHandler={this.usernameHandler}
                            passwordHandler={this.passwordHandler}
                            firstnameHandler={this.firstnameHandler}
                            lastnameHandler={this.lastnameHandler}
                            repeatPasswordHandler={this.repeatPasswordHandler}
                            submitHandler={this.submitHandler}


                            username={this.state.username}
                            password={this.state.password}
                            repeatPassword={this.state.repeatPassword}
                            firstname={this.state.firstname}
                            lastname={this.state.lastname}


                            disableSubmit={this.shouldDisableSubmit()}
                        />
                }
                <Collapse in={this.props.error}>
                    <Alert
                        bsStyle="danger"
                    >
                        <strong>Oh snap! There went something wrong!</strong>
                    </Alert>
                </Collapse>
                <Collapse in={this.props.success}>
                    <Alert
                        bsStyle="success"
                    >
                        <strong>Registration successful</strong>
                    </Alert>
                </Collapse>
            </Centering>
        );
    }
}

function mapStateToProps(state) {
    return state.ui.registry;
}

function mapDispatchToProps(dispatch) {
    return {
        startSendRegistration: registrationData => { dispatch(actions.startSendRegistration(registrationData)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registry)
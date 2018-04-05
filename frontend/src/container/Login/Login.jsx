import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginDump from '../../components/Login/Login.jsx';
import {ScaleLoader} from 'react-spinners';
import {actions} from '../../actions';
import Centering from '../../components/Centering/Centering';
import {Alert, Collapse} from 'react-bootstrap';


const proxyToValue = proxy => proxy.target.value;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.usernameHandler = this.usernameHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    usernameHandler(proxy) {
        this.setState({username: proxyToValue(proxy)})
    }

    passwordHandler(proxy) {
        this.setState({password: proxyToValue(proxy)})
    }

    submitHandler() {
        this.props.startSendlogin(this.state);
    }

    render() {
        return (
            <Centering>
                {
                    this.props.loading ?
                        <ScaleLoader/>
                        :
                        this.props.success ?
                            <Alert
                                bsStyle="success"
                            >
                                <strong>Login successful</strong>
                            </Alert>
                            :
                            <span>
                                <LoginDump
                                    usernameHandler={this.usernameHandler}
                                    passwordHandler={this.passwordHandler}
                                    username={this.state.username}
                                    password={this.state.password}
                                    submitHandler={this.submitHandler}
                                />
                                <Collapse in={this.props.error}>
                                    <Alert
                                        bsStyle="danger"
                                    >
                                        <strong>Oh snap! There went something wrong!</strong>
                                    </Alert>
                                </Collapse>
                            </span>
                }
            </Centering>
        );
    }
}

function mapStateToProps(state) {
    return state.ui.login;
}

function mapDispatchToProps(dispatch) {
    return {
        startSendlogin: loginData => {
            dispatch(actions.startSendlogin(loginData))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
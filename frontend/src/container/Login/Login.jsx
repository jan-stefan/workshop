import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginDump from '../../components/Login/Login.jsx';

import { actions } from '../../actions';

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
    usernameHandler(proxy){
        this.setState({username: proxyToValue(proxy)})
    }
    passwordHandler(proxy){
        this.setState({password: proxyToValue(proxy)})
    }
    submitHandler(){
        console.log(this.state);
    }
    render() {
        return (
            <LoginDump
                usernameHandler={this.usernameHandler}
                passwordHandler={this.passwordHandler}
                username={this.state.username}
                password={this.state.password}
                submitHandler={this.submitHandler}
            />
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        fetchServerSideTime: () => { dispatch(actions.fetchServerSideTime()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
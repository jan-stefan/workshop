import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../Login/Login.jsx';
import Registry from '../Registry/Registry.jsx';
import {Navbar} from 'react-bootstrap';


import {actions} from '../../actions';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Workshop</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                </Navbar>
                <Router>
                    <div>
                        <Route path="/login" component={Login}/>
                        <Route path="/registry" component={Registry}/>
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        fetchServerSideTime: () => {
            dispatch(actions.fetchServerSideTime())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import PostList from '../PostList/PostList.jsx';
import Registry from '../Registry/Registry.jsx';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';


import { actions } from '../../actions';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Navbar inverse collapseOnSelect>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    Workshop
                            </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <NavItem eventKey={1}>
                                        <Link to='/'>Index</Link>
                                    </NavItem>
                                    <NavItem eventKey={1}>
                                        <Link to='/registry'>Register</Link>
                                    </NavItem>
                                    <NavItem eventKey={2}>
                                        {
                                            this.props.username === null || this.props.username === null ?
                                                <Link to='/login'>Login</Link>
                                                :
                                                <Link to='/login' onClick={this.props.removeLoginData}>Logout</Link>
                                        }
                                    </NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>


                        <Route exact path="/registry" component={Registry} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/" component={PostList} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.data;
}

function mapDispatchToProps(dispatch) {
    return {
        removeLoginData: () => { dispatch(actions.removeLoginData()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
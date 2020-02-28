import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import { HashRouter as Router,
  Link,
  Switch,
  Route } from 'react-router-dom'

import Home from './components/Home'
import Join from './components/Join'
import Mission from './components/Mission'
import Program from './components/Program'
import Staff from './components/Staff'
import Stories from './components/Stories'
import About from './components/About'
import Contact from './components/Contact'

import './App.css';

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">uliftu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/program'>Program</Link></Nav.Link>
              <Nav.Link><Link to='/join'>Join</Link></Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><Link to='/staff'>Staff</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><Link to='/mission'>Mission</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><Link to='/contact'>Contact</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Additional Links</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/join' component={Join}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/stories' component={Stories}/>
          <Route path='/staff' component={Staff}/>
          <Route path='/mission' component={Mission} />
          <Route path='/program' component={Program}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

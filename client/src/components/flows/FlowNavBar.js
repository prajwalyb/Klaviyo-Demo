import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { saveFlow } from '../../actions/flowActions.js';

const NavComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const ddtoggle = () => setDropdownOpen(prevState => !prevState);

    const saveFlow =(e)=>{
        e.preventDefault();
        props.saveFlow();
        props.history.push('/flow')
    }

  return (
    <div className="topbar">
        <div className="container-fluid">
            <Navbar light expand="md" >
                <div className="header-secondary-container">
                    <NavbarBrand href="/" style={{color: '#DFE3E6'}}>Klaviyo</NavbarBrand>
                    <Dropdown isOpen={dropdownOpen} toggle={ddtoggle}>
                        <DropdownToggle caret>
                           {
                               (props.flowName) ? props.flowName : "404"
                           }
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Some Action</DropdownItem>                            
                            <DropdownItem>Foo Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="header-primary-container">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="nav">
                    <Nav className="ml-auto Nav" navbar>
                        <NavItem className="NavItem">
                            <NavLink href="/" className="NavLink">Show Analytics</NavLink>
                        </NavItem>
                        <NavItem className="NavItem">
                            <NavLink href="/" className="NavLink">Manage Flow</NavLink>
                        </NavItem>            
                        <NavItem className="NavItem">
                            <NavLink href="/" className="NavLink" onClick={saveFlow}>Save & Exit</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  flowName: state.flow.flow_name
})


export default connect ( mapStateToProps , { saveFlow })(withRouter(NavComp));
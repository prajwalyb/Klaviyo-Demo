import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const NavComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="topbar">
        <div className="container-fluid">
            <Navbar light expand="md" >
                <div className="header-secondary-container">
                    <NavbarBrand href="/" style={{color: '#DFE3E6'}}>Klaviyo</NavbarBrand>
                    <input
                        type="text"
                        placeholder="Search for Someone"
                        className="navsearch"
                    />
                </div>
                <div className="header-primary-container">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="nav">
                    <Nav className="ml-auto Nav" navbar>
                        <NavItem className="NavItem">
                            <NavLink href="/" className="NavLink">Upgrade</NavLink>
                        </NavItem>
                        <NavItem className="NavItem">
                            <NavLink href="/" className="NavLink">Support</NavLink>
                        </NavItem>            
                        <NavItem className="NavItem">
                            <NavLink href="/" className="NavLink">Blog</NavLink>
                        </NavItem>
                        <NavItem className="NavItem">
                            <NavLink href="/" className="NavLink">Account</NavLink>
                        </NavItem>                        
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
        </div>
    </div>
  );
}

export default NavComp;
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
                    <NavbarBrand href="/React-DND-Flowchart" style={{color: '#DFE3E6'}}>Klaviyo</NavbarBrand>
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
                            <NavLink href="/React-DND-Flowchart" className="NavLink">Upgrade</NavLink>
                        </NavItem>
                        <NavItem className="NavItem">
                            <NavLink className="NavLink" href="/React-DND-Flowchart">Support</NavLink>
                        </NavItem>            
                        <NavItem className="NavItem">
                            <NavLink href="/React-DND-Flowchart" className="NavLink">Blog</NavLink>
                        </NavItem>
                        <NavItem className="NavItem">
                            <NavLink href="/React-DND-Flowchart" className="NavLink">Account</NavLink>
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
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


const NavComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const ddtoggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div className="topbar">
        <div className="container-fluid">
            <Navbar light expand="md" >
                <div className="header-secondary-container">
                    <NavbarBrand href="/" style={{color: '#DFE3E6'}}>Klaviyo</NavbarBrand>
                    <Dropdown isOpen={dropdownOpen} toggle={ddtoggle}>
                        <DropdownToggle caret>
                            Flow#1
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
                            <NavLink href="/" className="NavLink">Save & Exit</NavLink>
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
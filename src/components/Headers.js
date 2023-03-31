import { useState } from 'react'
import Enlace from './Enlace';



import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

  

const Headers = () => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
          <Navbar color="faded" light>
            <img src='/logo.ico' alt="logo" className='logo'/>
            <NavbarBrand href="#" className="me-auto titulo">
            
              ANANTA </NavbarBrand>
            
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <Enlace isHeader={true}/>
                    </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );


}

export default Headers
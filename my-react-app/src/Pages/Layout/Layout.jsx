import React from 'react';
import { Outlet} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BasicExample from '../Component/Dropdown/Nav';
import Aboutus from '../Component/Dropdown/About-us';
import Warning from '../Component/Dropdown/Warning';
import Tools from '../Component/Dropdown/Tools';
import Custommer from '../Component/Dropdown/Custommer';



const Layout = () => {
  return (
    <>

    <Navbar className="Navbar-ticky"  bg="light" data-bs-theme="dark">

    <Navbar.Brand href="Home" ><img className="logo" src="Flexible.jpg" alt="Home" />
    </Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link  href="Home" className="text-navbar">TRANG CHỦ</Nav.Link>
    <BasicExample />
    <Warning />
    <Custommer />
    <Tools />
    <Aboutus />

    </Nav>
    </Navbar>
    <Outlet />
    </>
  )
};

export default Layout;

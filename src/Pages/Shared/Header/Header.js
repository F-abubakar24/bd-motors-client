import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="nav-Wrapper" collapseOnSelect expand="lg" sticky="top" style={{backgroundColor: "#1BA370"}} variant="dark">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home"><img style={{width: '80%'}} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end nav_btn">


                        {/* <NavDropdown title="Home" id="collasible-nav-dropdown" className="btn_nav_dropdown">
                            <NavDropdown.Item as={HashLink} to="/home#home">Home</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/home#aboutUs">AboutUs</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/home#services">Hotels</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/home#works">Works</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/bikes">Bikes</Nav.Link>
                        {user?.email && <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>}
                        {user?.email ?
                            <>
                                <p className="user_display_name">{user.displayName || user.email} -</p>
                                <Nav.Link onClick={logOut} as={HashLink} to="/logIn" className="login">LogOut</Nav.Link>
                            </>
                                :
                            <>
                                <Nav.Link as={HashLink} to="/logIn" className="login">LogIn</Nav.Link>
                                <Nav.Link as={HashLink} to="/register" className="register">Register</Nav.Link>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

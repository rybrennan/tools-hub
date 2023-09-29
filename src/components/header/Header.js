import React, {useState,useEffect} from "react";
import './header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

import WhiteLogo from '../../assets/images/white-logo.png';
import DarkLogo from '../../assets/images/dark-logo.png';

const Header = () => {
  const location = useLocation();
  //const isHome = location.pathname === '/';
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  const [bodyClass, setBodyClass] = useState('home-page');

  useEffect(() => {
    // Update bodyClass based on the route
    if (location.pathname === '/') {
      setBodyClass('home-page');
    } else {
      setBodyClass('other-page');
    }
  }, [location.pathname]);
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" className="p-0">
          <Container className="self-container">
            <Navbar.Brand href="/">
              {bodyClass === 'home-page' ? (
                <img src={WhiteLogo} alt="AI Tools" className="def"/>
              ) : (
                <img src={DarkLogo} alt="AI Tools" className="abc"/>
              )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav className="">
                <Link to="/" className={isActive('/')}>Home</Link>
                <Link to="/" className={isActive('/about')}>About</Link>
                <Link to="/product" className={isActive('/product')}>Product</Link>
                <Link to="/" className={isActive('/blog')}>Blog</Link>
                <Link to="/" className={isActive('/contact')}>Contact</Link>
              </Nav>
              <Nav className="btn-container">
                <div className="btn-wrap">
                  <Nav.Link href="#" className="btn">Log In</Nav.Link>
                </div>
                <Nav.Link href="#" className="grident-btn btn">Get Started</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;

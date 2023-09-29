import React from 'react';
import './footer.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Facebook from '../../assets/images/fb.svg';
import Twiter from '../../assets/images/twt.svg';
import instagram from '../../assets/images/insta2.svg';
import { Link } from 'react-router-dom';
import DarkLogo from '../../assets/images/dark-logo.png';
import FooterShadow1 from '../../assets/images/footer-shadow.png';


const Footer = () => {
  return (
    <>
     <footer>
      <div className='bottom-pattern'></div>
      <div className='right-pattern'></div>
        <Container className="self-container position-relative">
          <Row>
            <Col>
              <div className='footer-inner'>
                <div className='footer-left'>
                  <Link to="/">
                    <img src={DarkLogo} alt='logo'/>
                  </Link>
                  <p>Lorem ipsum dolor sit amet consectetur. Eu nunc nisl mi amet quis volutpat arcu accumsan.</p>
                  <div className='footer-social'>
                    
                    <a href='#'>
                    <img src={Facebook}  alt='facebook'/>
                  </a>
                  <a href='#'>
                    <img src={Twiter}  alt='facebook'/>
                  </a>
                  <a href='#'>
                    <img src={instagram}  alt='facebook'/>
                  </a>
                  </div>
                </div>
                <div className='footer-right '>
                   <div className='footer-links-wrap d-flex flex-column align-items-start'>
                      <Link to="/" className='active'>Home</Link>
                      <Link to="/">Blog</Link>
                      <Link to="/">About</Link>
                      <Link to="/">Careers</Link>
                   </div>
                   <div className='footer-links-wrap d-flex flex-column align-items-start'>
                      <Link to="/" className='active'>Product</Link>
                      <Link to="/">Contact us</Link>
                      <Link to="/">Support Career</Link>
                   </div>
                   <div className='footer-links-wrap d-flex flex-column align-items-start'>
                      <Link to="/" className='active'>Term of Service</Link>
                      <Link to="/">Privacy Policy</Link>
                      <Link to="/">Quick Chat</Link>
                   </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className='footer-bottom text-center'>
          <p className='p-0 m-0'>Copyright@2023 | All rights reserved</p>
        </div>
     </footer>
    </>
  );
};

export default Footer;

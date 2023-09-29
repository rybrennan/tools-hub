import React from "react";
import "./home.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftImage from "../../assets/images/left-pattern.svg";
import CenterImage from "../../assets/images/home-bottom-curve.svg";
import RightImage from "../../assets/images/right-pattern.svg";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-banner">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="title">The Nexus of AI Innovation </h1>
              <p>
                This nexus is a testament to the collaborative efforts of
                academia, industry, and <br />
                government bodies, all recognizing the profound potential of AI.
              </p>
              <button className="grident-btn">Explore More</button>
            </Col>
          </Row>
        </Container>
        <div className="bottom-curve">
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

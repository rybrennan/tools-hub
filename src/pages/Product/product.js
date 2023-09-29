import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Video from "../../components/video/Video";
import MobileSlider from "../../components/slider/Slider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MyComponent } from "../../components/rating/Rating";
import LogoOne from "../../assets/images/indeed-logo.svg";
import LogoTwo from "../../assets/images/logo2.svg";
import LogoThree from "../../assets/images/logo3.svg";
import LogoFour from "../../assets/images/logo4.svg";
import ProfileOne from "../../assets/images/profile1.jpg";
import "./product.scss";

const Product = () => {
  return (
    <>
      <Header />
      <div className="projuct-wrap">
        <div className="video-wrap">
          <div className="video-pattern-top"></div>
          <div className="video-pattern-bottom"></div>
          <Container className="self-container">
            <Row>
              <Col>
                <div className="text-center video-inner">
                  <h3 className="title">Emphasizing the primary benefit</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pretium aenean
                    egestas blandit gravida. Ac id feugiat amet consequat.{" "}
                  </p>
                  <Video />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="customers-wrap">
          <div className="customer-pattern-bottom"></div>
          <Container className="self-container">
            <Row>
              <Col>
                <h3 className="text-center title">
                  What Our Customers Are Saying
                </h3>
                <p className="text-center">
                  Enim mattis nisi praesent hac aliquam dolor. Parturient auctor
                  consectetur sit in tortor mauris vestibulum maecenas. <br />{" "}
                  Quam in laoreet tristique duis aliquam nisi mauris. Venenatis
                  nec aliquam erat turpis.
                </p>

                <div className="customers-review">
                  <div className="customer-pattern"></div>
                  <div className="customers-review-box">
                    <div className="customers-review-top">
                      <img src={ProfileOne} alt="" />
                      <span>Jane Cooper</span>
                    </div>
                    <div className="customers-review-mid">
                      <p>
                        Ut sagittis euismod dui ullamcorper. Convallis ornare ac
                        odio egestas in sed bibendum ultricies.
                      </p>
                    </div>
                    <div className="customers-review-bottom">
                      <MyComponent active={4} />
                      <button>Read More</button>
                    </div>
                  </div>
                  <div className="customers-review-box">
                    <div className="customers-review-top">
                      <img src={ProfileOne} alt="" />
                      <span>Jane Cooper</span>
                    </div>
                    <div className="customers-review-mid">
                      <p>
                        Ut sagittis euismod dui ullamcorper. Convallis ornare ac
                        odio egestas in sed bibendum ultricies.
                      </p>
                    </div>
                    <div className="customers-review-bottom">
                      <MyComponent active={5} />
                      <button>Read More</button>
                    </div>
                  </div>
                  <div className="customers-review-box">
                    <div className="customers-review-top">
                      <img src={ProfileOne} alt="" />
                      <span>Jane Cooper</span>
                    </div>
                    <div className="customers-review-mid">
                      <p>
                        Ut sagittis euismod dui ullamcorper. Convallis ornare ac
                        odio egestas in sed bibendum ultricies.
                      </p>
                    </div>
                    <div className="customers-review-bottom">
                      <MyComponent active={3} />
                      <button>Read More</button>
                    </div>
                  </div>
                  <div className="customers-review-box">
                    <div className="customers-review-top">
                      <img src={ProfileOne} alt="" />
                      <span>Jane Cooper</span>
                    </div>
                    <div className="customers-review-mid">
                      <p>
                        Ut sagittis euismod dui ullamcorper. Convallis ornare ac
                        odio egestas in sed bibendum ultricies.
                      </p>
                    </div>
                    <div className="customers-review-bottom">
                      <MyComponent active={5} />
                      <button>Read More</button>
                    </div>
                  </div>
                  <div className="customers-review-box">
                    <div className="customers-review-top">
                      <img src={ProfileOne} alt="" />
                      <span>Jane Cooper</span>
                    </div>
                    <div className="customers-review-mid">
                      <p>
                        Ut sagittis euismod dui ullamcorper. Convallis ornare ac
                        odio egestas in sed bibendum ultricies.
                      </p>
                    </div>
                    <div className="customers-review-bottom">
                      <MyComponent active={4} />
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                <div className="slider">
                  <MobileSlider />
                </div>
                <div className="d-none d-md-flex align-items-center justify-content-center">
                  <button className="grident-btn">Show All</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="sponsorship-wrap">
          <div className="sponsorship-shadow"></div>
          <Container className="self-container">
            <Row>
              <Col>
                <div className="sponsorship-inner">
                  <div className="sponsorship-left">
                    <h3 className="title text-white">
                      Clearly Define Sponsorship Levels
                    </h3>
                    <p>
                      Non ac sit sit nisi lectus laoreet. Diam tristique amet
                      pellentesque adipiscing pulvinar quis. At egestas
                      suspendisse nec scelerisque duis. Erat pelle
                    </p>
                    <button className="grident-btn">Learn More</button>
                  </div>
                  <div className="sponsorship-right">
                    <a href="#" className="sponsorship-box">
                      <img src={LogoOne} alt="" />
                    </a>
                    <a href="#" className="sponsorship-box">
                      <img src={LogoTwo} alt="" />
                    </a>
                    <a href="#" className="sponsorship-box">
                      <img src={LogoThree} alt="" />
                    </a>
                    <a href="#" className="sponsorship-box">
                      <img src={LogoFour} alt="" />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;

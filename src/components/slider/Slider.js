import React, { Component } from "react";
import Slider from "react-slick";
import './slider.scss';
import ProfileOne from '../../assets/images/profile1.jpg';
import { MyComponent } from '../../components/rating/Rating';

export default class MobileSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <div className='customers-review-box'>
                    <div className='customers-review-top'>
                      <img src={ProfileOne} />
                      <span>Jane Cooper</span>
                    </div>
                    <div className='customers-review-mid'>
                      <p>Ut sagittis euismod dui ullamcorper. Convallis ornare ac odio egestas in sed bibendum ultricies.</p>
                    </div>
                    <div className='customers-review-bottom'>
                        <MyComponent active={4}/>
                        <button>Read More</button>
                    </div>
                </div>
          </div>
          <div>
          <div className='customers-review-box'>
                    <div className='customers-review-top'>
                      <img src={ProfileOne} />
                      <span>Jane Cooper</span>
                    </div>
                    <div className='customers-review-mid'>
                      <p>Ut sagittis euismod dui ullamcorper. Convallis ornare ac odio egestas in sed bibendum ultricies.</p>
                    </div>
                    <div className='customers-review-bottom'>
                        <MyComponent active={5}/>
                        <button>Read More</button>
                    </div>
                </div>
          </div>
          <div>
          <div className='customers-review-box'>
                    <div className='customers-review-top'>
                      <img src={ProfileOne} />
                      <span>Jane Cooper</span>
                    </div>
                    <div className='customers-review-mid'>
                      <p>Ut sagittis euismod dui ullamcorper. Convallis ornare ac odio egestas in sed bibendum ultricies.</p>
                    </div>
                    <div className='customers-review-bottom'>
                        <MyComponent active={3}/>
                        <button>Read More</button>
                    </div>
                </div>
          </div>
          <div>
          <div className='customers-review-box'>
                    <div className='customers-review-top'>
                      <img src={ProfileOne} />
                      <span>Jane Cooper</span>
                    </div>
                    <div className='customers-review-mid'>
                      <p>Ut sagittis euismod dui ullamcorper. Convallis ornare ac odio egestas in sed bibendum ultricies.</p>
                    </div>
                    <div className='customers-review-bottom'>
                        <MyComponent active={5}/>
                        <button>Read More</button>
                    </div>
                </div>
          </div>
          <div>
          <div className='customers-review-box'>
                    <div className='customers-review-top'>
                      <img src={ProfileOne} />
                      <span>Jane Cooper</span>
                    </div>
                    <div className='customers-review-mid'>
                      <p>Ut sagittis euismod dui ullamcorper. Convallis ornare ac odio egestas in sed bibendum ultricies.</p>
                    </div>
                    <div className='customers-review-bottom'>
                        <MyComponent active={5}/>
                        <button>Read More</button>
                    </div>
                </div>
          </div>
          <div>
          <div className='customers-review-box'>
                    <div className='customers-review-top'>
                      <img src={ProfileOne} />
                      <span>Jane Cooper</span>
                    </div>
                    <div className='customers-review-mid'>
                      <p>Ut sagittis euismod dui ullamcorper. Convallis ornare ac odio egestas in sed bibendum ultricies.</p>
                    </div>
                    <div className='customers-review-bottom'>
                        <MyComponent active={5}/>
                        <button>Read More</button>
                    </div>
                </div>
          </div>
        </Slider>
      </div>
    );
  }
}
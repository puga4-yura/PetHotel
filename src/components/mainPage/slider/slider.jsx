
import React, { Component } from "react";
import Slider from "react-slick/lib";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
      arrows: true
    };
    return (
      <div>
        <Slider {...settings} arrows={true}>
              <img width='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpYD_g4vYnRMVvF43i9hqQP8-B039fXfB42pexCBwDID4ew2j8&usqp=CAU' alt="q"/>
              <img width='100%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpYD_g4vYnRMVvF43i9hqQP8-B039fXfB42pexCBwDID4ew2j8&usqp=CAU" alt="q"/>
              <img width='100%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpYD_g4vYnRMVvF43i9hqQP8-B039fXfB42pexCBwDID4ew2j8&usqp=CAU" alt="q"/>
        </Slider>
      </div>
    );
  }
}
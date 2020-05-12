
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
    //debugger;
    return (

      <div>
        <Slider {...settings} arrows={true}>
          {this.props.img.map((photo)=>{
            return (
              <img width='100%' src={photo} alt="q"/>
            )
          })}

        </Slider>
      </div>
    );
  }
}
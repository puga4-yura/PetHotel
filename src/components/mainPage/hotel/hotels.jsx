import React, {Component} from 'react';
import s from "./hotels.module.scss"
/*import '~slick-carousel/slick/slick.css';
import "~slick-carousel/slick/slick-theme.css";*/
import Slider from "react-slick";
import * as axios from 'axios'
import SimpleSlider from '../slider/slider'
import {hideDescriptionAC} from "../../../redux/hotel-reducer";
import TabService from "./tabService/tabService";

//import {changeVisibility} from "../../../redux/hotel-reducer";

class Hotel extends React.Component {

  componentDidMount() {
    this.props.fetchData("https://randomuser.me/api/?results=100");
  };

  show = (id) => {
    this.props.showDescription(id)
  };

  hide = (id) => {
    console.log(1);
    this.props.hideDescription(id)
  };

  render() {
    if (typeof this.props.state.hotel !== "undefined" && typeof this.props.state.hotel !== "undefined") {
      return (
        <div>

          <div className={s.hotel_containerScroll}>
            <div className={s.hotel_titleContainer}>
              <span className={s.hotel_title}>Отели</span>
              <span className={s.hotel_subTitle}>32 результата</span>
            </div>
            <div className={s.hotel_wrapScroll}>
              {this.props.state.hotel.map((hotel) => {
                return (
                  <section>
                    <div className={s.hotel_wrap}>
                      <div className={s.hotel_photoMainContainer}>
                        <SimpleSlider img={hotel.performance_image}/>
                      </div>
                      <div className={s.hotel_wrapDesc}>
                        <div className={s.hotel_mainDescriptionWrap}>
                          <div className={s.hotel_mainDescription}>{hotel.name}</div>
                          <div><span className={s.hotel_star}></span>4.48 <span
                            className={s.hotel_countVisit}>(885)</span>
                          </div>
                        </div>
                        <div className={s.hotel_titleDescription}>Телефон</div>
                        <div className={s.hotel_subTitleDescription}>{hotel.phone}</div>
                        <div className={s.hotel_titleDescription}>Адерс</div>
                        <div className={s.hotel_subTitleDescription}>{hotel.main_address}</div>
                        <div className={s.hotel_titleDescription}>Сайт</div>
                        <div className={s.hotel_subTitleDescription}>{hotel.url}</div>
                        <div className={s.hotel_price}>От: {hotel.min_price}грн</div>
                      </div>

                    </div>
                    {this.props.state.openHotel === hotel.id
                      ? <div>
                        <TabService/>
                        <div onClick={() => this.hide(hotel.id)} className={s.hotel_changeVisibButton}></div>
                      </div>
                      : <div onClick={() => this.show(hotel.id)} className={`${s.hotel_changeVisibButton} ${s.rotate}`}></div>}

                  </section>
                )

              })}
            </div>
          </div>


        </div>

      )
    } else {
      return 'Loading...';
    }

  }
}

export default Hotel;
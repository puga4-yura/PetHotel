import React, {Component} from 'react';
import s from "./hotels.module.scss"
/*import '~slick-carousel/slick/slick.css';
import "~slick-carousel/slick/slick-theme.css";*/
import Slider from "react-slick";
import * as axios from 'axios'
import SimpleSlider from '../slider/slider'
import {hideDescriptionAC} from "../../../redux/hotel-reducer";
//import {changeVisibility} from "../../../redux/hotel-reducer";

const Hotel = (props) => {


  let show = () => {
    props.showDescriptionAC()
  };

  let hide = () => {
    props.hideDescriptionAC()
  };

  //debugger;

  /*    if (typeof this.props.state.clients !== "undefined" && typeof this.props.state.clients.results !== "undefined") {*/
  return (
    <div className={s.hotel_containerScroll}>
      <div className={s.hotel_titleContainer}>
        <span className={s.hotel_title}>Отели</span>
        <span className={s.hotel_subTitle}>32 результата</span>
      </div>
      <div className={s.hotel_wrapScroll}>
        <section>
          <div className={s.hotel_wrap}>
            <div className={s.hotel_photoMainContainer}>
              <SimpleSlider/>
            </div>
            <div className={s.hotel_wrapDesc}>
              <div className={s.hotel_mainDescriptionWrap}>
                <div className={s.hotel_mainDescription}>Друг - центр ветеринарнои медицини</div>
                <div><span className={s.hotel_star}></span>4.48 <span className={s.hotel_countVisit}>(885)</span>
                </div>
              </div>
              <div className={s.hotel_titleDescription}>Телефон</div>
              <div className={s.hotel_subTitleDescription}>(044)383-71-72</div>
              <div className={s.hotel_titleDescription}>Адерс</div>
              <div className={s.hotel_subTitleDescription}>м.Киев, вул Лариси Pуденко 11</div>
              <div className={s.hotel_titleDescription}>Сайт</div>
              <div className={s.hotel_subTitleDescription}>https://app.zeplin.io/project/</div>
              <div className={s.hotel_price}>От 120грн</div>
            </div>

          </div>
          {props.state.isShow
            ? <div>
              <div className={s.hotel_tabsWrap}>
                <div className={s.hotel_tabContainer}>
                  <div className={s.hotel_switchContainer}>
                    <a href="#content-1" onclick="event.preventDefault()" className={s.serviceTab}></a>
                    <a href="#content-2" onclick="event.preventDefault()" className={s.hotelTab}></a>
                    <a href="#content-3" onclick="event.preventDefault()" className={s.ratingTab}></a>
                    <a href="#content-4" onclick="event.preventDefault()" className={s.locationTab}></a>
                  </div>

                  <div id="content-1" className={s.hotel_tabServicesContainer}>
                    <div className={s.hotel_serviceItem}>
                      <div className={s.hotel_tabsMainNameService}>Услуги</div>
                      <div className={s.hotel_tabsNameServiceWrap}><span
                        className={s.hotel_tabsNameService}>Передержка</span><span>от 120грн</span></div>
                      <div className={s.hotel_tabsNameServiceWrap}><span
                        className={s.hotel_tabsNameService}>Ветеренар</span><span>от 140грн</span></div>
                      <div className={s.hotel_tabsNameServiceWrap}><span
                        className={s.hotel_tabsNameService}>Стрижка</span><span>от 400грн</span></div>
                      <div className={s.hotel_tabsNameServiceWrap}><span
                        className={s.hotel_tabsNameService}>Выгул</span><span>250 грн/год</span></div>
                      <div className={s.hotel_tabsNameServiceWrap}><span
                        className={s.hotel_tabsNameService}>Трансфер</span><span>от 50грн</span></div>
                    </div>
                    <div className={s.hotel_serviceItem}>
                      <div className={s.hotel_tabsMainNameService}>Животные</div>
                      <div className={s.hotel_tabsNameServiceWrap}>
                        <span className={s.hotel_tabsNameService}>Кот</span>
                        <img src="../../../assets/img/path@2x.png" alt="s"/>
                      </div>
                      <div className={s.hotel_tabsNameServiceWrap}>
                        <span className={s.hotel_tabsNameService}>Собака</span>
                        <img src="../../../assets/img/path.svg" alt="s"/>
                      </div>
                      <div className={s.hotel_tabsNameServiceWrap}>
                        <span className={s.hotel_tabsNameService}>Птици</span>
                        <img src="../../../assets/img/path.svg" alt="s"/>
                      </div>
                      <div className={s.hotel_tabsNameServiceWrap}>
                        <span className={s.hotel_tabsNameService}>Рептилии </span>
                        <img src="../../../assets/img/path.svg" alt="s"/></div>
                    </div>
                  </div>
                  <div id="content-2" className={s.hotel_tabServicesContainer}>
                    <div>
                      <div className={s.hotel_tabsMainNameService}>Про Отели</div>

                      <div className={s.hotel_tabsNameService}>Готель для домашніх вихованців працює за наступним
                        принципом:
                        у нас обладнані вольєри для тварин (великих і маленьких собак,
                        кішок), куди господар може поселити свого улюбленця на
                        необхідної термін. За гостями центру ведеться постійний догляд:
                        тварин оглядають ветеринари, навчені співробітники
                        підтримують їх чистоту, виводять на прогулянку. Для Ваших
                        улюбленців створені комфортні умови проживання,
                        харчування та відпочинку.
                      </div>
                    </div>
                  </div>

                  <div id="content-3" className={s.hotel_tabServicesContainer}>
                    33333333333
                  </div>
                  <div id="content-4" className={s.hotel_tabServicesContainer}>

                    4444444444
                  </div>


                </div>
                <div className={s.hotel_bookContainer}>
                  <div className={s.hotel_imgBook}></div>
                  <div className={s.hotel_bookButton}>Забронировать</div>
                </div>
              </div>
              <div onClick={hide} className={s.hotel_changeVisibButton}></div>
            </div>
            : <div onClick={show} className={`${s.hotel_changeVisibButton} ${s.rotate}`}></div>}

        </section>

      </div>
    </div>


  )
  /*}*/
  /*    else {
        return 'Loading...';
      }*/

}

export default Hotel;
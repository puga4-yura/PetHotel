import React, {Component} from 'react';
import s from "./hotels.module.scss"
import * as axios from 'axios'

class Hotel extends Component {


  render() {

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
                <div className={s.hotel_imgContainer}></div>
                <div className={s.hotel_wrapDesc}>
                  <div className={s.hotel_mainDescriptionWrap}>
                    <div className={s.hotel_mainDescription}>Друг - центр ветеринарнои медицини</div>
                    <div><span className={s.hotel_star}></span>4.48 <span className={s.hotel_countVisit}>(885)</span></div>
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
            </section>


            <section>
              <div className={s.hotel_titleContainer}>
                <span className={s.hotel_title}>Отели</span>
                <span className={s.hotel_subTitle}>32 результата</span>
              </div>
              <div className={s.hotel_wrap}>
                <div className={s.hotel_imgContainer}></div>
                <div className={s.hotel_wrapDesc}>
                  <div className={s.hotel_mainDescriptionWrap}>
                    <div className={s.hotel_mainDescription}>Друг - центр ветеринарнои медицини</div>
                    <div><span className={s.hotel_star}></span>4.48 <span className={s.hotel_countVisit}>(885)</span></div>
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
            </section>


            <section>
              <div className={s.hotel_titleContainer}>
                <span className={s.hotel_title}>Отели</span>
                <span className={s.hotel_subTitle}>32 результата</span>
              </div>
              <div className={s.hotel_wrap}>
                <div className={s.hotel_imgContainer}></div>
                <div className={s.hotel_wrapDesc}>
                  <div className={s.hotel_mainDescriptionWrap}>
                    <div className={s.hotel_mainDescription}>Друг - центр ветеринарнои медицини</div>
                    <div><span className={s.hotel_star}></span>4.48 <span className={s.hotel_countVisit}>(885)</span></div>
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
            </section>


            <section>
              <div className={s.hotel_titleContainer}>
                <span className={s.hotel_title}>Отели</span>
                <span className={s.hotel_subTitle}>32 результата</span>
              </div>
              <div className={s.hotel_wrap}>
                <div className={s.hotel_imgContainer}></div>
                <div className={s.hotel_wrapDesc}>
                  <div className={s.hotel_mainDescriptionWrap}>
                    <div className={s.hotel_mainDescription}>Друг - центр ветеринарнои медицини</div>
                    <div><span className={s.hotel_star}></span>4.48 <span className={s.hotel_countVisit}>(885)</span></div>
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
            </section>
          </div>
        </div>







      )
    /*}*/
/*    else {
      return 'Loading...';
    }*/
  }

}

export default Hotel;
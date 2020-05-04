import React from "react";
import "./tabService.scss";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabService = () => {
  return (
    <div>
      <div className="hotel_tabsWrap">
        <div className="hotel_tabContainer">
          <Tabs>
            <TabList>
              <div className="hotel_switchContainer">
                <Tab className="serviceTab"></Tab>
                <Tab className="hotelTab"></Tab>
                <Tab className="ratingTab" disabled></Tab>
                <Tab className="locationTab" disabled></Tab>
              </div>
            </TabList>

            <TabPanel>
              <div className="hotel_tabServicesContainer">
                <div className="hotel_serviceItem">
                  <div className="hotel_tabsMainNameService">Услуги</div>
                  <div className="hotel_tabsNameServiceWrap"><span
                    className="hotel_tabsNameService">Передержка</span><span>от 120грн</span></div>
                  <div className="hotel_tabsNameServiceWrap"><span
                    className="hotel_tabsNameService">Ветеренар</span><span>от 140грн</span></div>
                  <div className="hotel_tabsNameServiceWrap"><span
                    className="hotel_tabsNameService">Стрижка</span><span>от 400грн</span></div>
                  <div className="hotel_tabsNameServiceWrap"><span
                    className="hotel_tabsNameService">Выгул</span><span>250 грн/год</span></div>
                  <div className="hotel_tabsNameServiceWrap"><span
                    className="hotel_tabsNameService">Трансфер</span><span>от 50грн</span></div>
                </div>
                <div className="hotel_serviceItem">
                  <div className="hotel_tabsMainNameService">Животные</div>
                  <div className="hotel_tabsNameServiceWrap">
                    <span className="hotel_tabsNameService">Кот</span>
                    <img src="../../../../assets/img/path@2x.png" alt="s"/>
                  </div>
                  <div className="hotel_tabsNameServiceWrap">
                    <span className="hotel_tabsNameService">Собака</span>
                    <img src="../../../../assets/img/path.svg" alt="s"/>
                  </div>
                  <div className="hotel_tabsNameServiceWrap">
                    <span className="hotel_tabsNameService">Птици</span>
                    <img src="../../../../assets/img/path.svg" alt="s"/>
                  </div>
                  <div className="hotel_tabsNameServiceWrap">
                    <span className="hotel_tabsNameService">Рептилии </span>
                    <img src="../../../../assets/img/path.svg" alt="s"/></div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="hotel_tabServicesContainer">
                <div>
                  <div className="hotel_tabsMainNameService">Про Отели</div>

                  <div className="hotel_tabsNameService">Готель для домашніх вихованців працює за наступним
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
            </TabPanel>
            <TabPanel>333</TabPanel>
            <TabPanel>444</TabPanel>
          </Tabs>

        </div>
        <div className="hotel_bookContainer">
          <div className="hotel_imgBook"></div>
          <div className="hotel_bookButton">Забронировать</div>
        </div>
      </div>
    </div>
  )
}

export default TabService;
import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import PersonalPageMenu from "./personalPageMenu/personalPageMenu";
import ProfileContent from "./personalPageContent/profileContent";
import AnimalContent from "./personalPageContent/animalContent";
import HotelContent from "./personalPageContent/hotelContent";
import ExitContainer from "./personalPageContent/exitContent";
import HistoryContent from "./personalPageContent/historyContent";
import s from "./сabinet.module.scss"


class PersonalPage extends React.Component {
  render() {
    return (
      <section className={s.personalContainer}>
        <PersonalPageMenu/>
        <div className={s.contentContainer}>
          <Route path='/Profile' render={() => <ProfileContent/>}/>
          <Route path='/Animal' render={() => <AnimalContent/>}/>
          <Route path='/Hotel' render={() => <HotelContent/>}/>
          <Route path='/History' render={() => <HistoryContent/>}/>
          <Route path='/Exit' render={() => <ExitContainer/>}/>
        </div>
      </section>
    )
  }
}

export default PersonalPage;
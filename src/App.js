import React from 'react';
import './App.scss';
import HeaderContainer from "./components/header/headerContainer";
import hotelsContainer from "./components/mainPage/hotel/hotels.module.scss";
import {BrowserRouter, Route} from "react-router-dom";
import Filter from  "./components/mainPage/filters/filters";
import WrappedMap  from "./components/mainPage/map/map"
import HotelContainer  from "./components/mainPage/hotel/hotelContainer"
import PersonalPage from "./components/mainPage/personalPage/сabinet";



function App(props) {
//debugger
  return (
    <BrowserRouter>
    <div className="App">
        <HeaderContainer/>

        <div className="main-wrapper">
          <div className="main-wrapper_left-info">
            <Filter />
            <HotelContainer />
          </div>
          <div>
            <WrappedMap
              googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
              loadingElement={<div style={{ height: `calc(100vh - 90px)` }} />}
              containerElement={<div style={{ height: `calc(100vh - 90px)`}} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          <PersonalPage  />
        </div>

    </div>
    </BrowserRouter>
  )};

export default App;

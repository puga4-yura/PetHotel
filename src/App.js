import React from 'react';
import './App.scss';
import {Header} from "./components/header/header";
import hotelsContainer from "./components/mainPage/hotel/hotels.module.scss";
import {BrowserRouter, Route} from "react-router-dom";
import Filter from  "./components/mainPage/filters/filters";
import WrappedMap  from "./components/mainPage/map/map"
import Hotel  from "./components/mainPage/hotel/hotels"



function App(props) {
//debugger
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>

        <div className="main-wrapper">
          <div className="main-wrapper_left-info">
            <Filter />
            <Hotel />
          </div>
          <div>
            <WrappedMap
              googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
              loadingElement={<div style={{ height: `calc(100vh - 90px)` }} />}
              containerElement={<div style={{ height: `calc(100vh - 90px)`}} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
{/*           <Route path='/' render={() =>  <hotelsContainer />}/>
           <Route path='/Profile' render={() =>  <Profile />}/>*/}
        </div>

    </div>
  );
}

export default App;

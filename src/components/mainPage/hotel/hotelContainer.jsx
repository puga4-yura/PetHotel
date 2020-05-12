import React from 'react'
import {connect} from "react-redux";
import Hotel from "./hotels";
import {showDescriptionAC, hideDescriptionAC, hotelFetchData} from "../../../redux/hotel-reducer";



let mapStateToProps =(state) => {

  return {
    state: state.hotelReducer
  }
};

let mapDispatchToProps =(dispatch) => {
  return {
    showDescription: (id) => {
      dispatch(showDescriptionAC(id))
    },
    hideDescription: (id) => {
      dispatch(hideDescriptionAC(id))
    },
    fetchData: url => {dispatch(hotelFetchData(url))}
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Hotel)
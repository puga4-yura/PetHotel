import React from 'react'
import {connect} from "react-redux";
import Hotel from "./hotels";
import {showDescriptionAC, hideDescriptionAC} from "../../../redux/hotel-reducer";



let mapStateToProps =(state) => {
  return {
    state: state.hotelReducer
  }
};

/*let mapDispatchToProps =(dispatch) => {
  return {
    changeVisibility: () => {
      dispatch(showDescriptionAC())
    }
  }
};*/


export default connect(mapStateToProps, {showDescriptionAC, hideDescriptionAC})(Hotel)
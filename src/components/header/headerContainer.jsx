import React from 'react'
import {connect} from "react-redux";
import Header from "./header";
import {showModalEnterAC, hideModalEnterAC} from "../../redux/header-reducer";



let mapStateToProps =(state) => {
  return {
    state: state.headerReducer
  }
};

/*let mapDispatchToProps =(dispatch) => {
  return {
    changeVisibility: () => {
      dispatch(showDescriptionAC())
    }
  }
};*/


export default connect(mapStateToProps, {showModalEnterAC})(Header)
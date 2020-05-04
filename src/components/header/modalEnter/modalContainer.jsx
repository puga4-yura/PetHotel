import React from 'react'
import {connect} from "react-redux";
import ModalEnter from "./modalEnter";
import {enterClientAC} from "../../../redux/header-reducer";
import {hideModalCloseAC} from "../../../redux/header-reducer";



let mapStateToProps =(state) => {

  return {
    state: state.headerReducer
  }
};

/*let mapDispatchToProps =(dispatch) => {
  return {
    changeText: (addUser) => {
      dispatch(enterClientAC(addUser))
    }
  }
};*/


export default connect(mapStateToProps, {hideModalCloseAC})(ModalEnter)
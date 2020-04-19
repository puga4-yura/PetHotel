import React from 'react'
import {connect} from "react-redux";
import Clients from "./client"
import {setUsers, personFetchData} from "../../../redux/clients-reducer";

let mapStateToProps = (state) => {
  return {
    results: state.results

  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    fetchData: url => {dispatch(personFetchData(url))}
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Clients)
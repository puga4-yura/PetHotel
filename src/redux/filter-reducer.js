let SEARCH_FILTER = "SEARCH_FILTER"
//let ENTER_USER = "ENTER_USER"

let initialState = {

};

const filterReducer = (state=initialState, action)=> {
  switch (action.type) {
    case SEARCH_FILTER:
      return state;

    default:
      return state;
  }
};


export const searchfilterAC = () => ({type: SHOW_MODAL_ENTER, isShowEnterForm});


export default filterReducer;
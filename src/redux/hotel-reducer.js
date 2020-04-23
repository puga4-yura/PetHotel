let SHOW_DESCRIPTION = "SHOW_DESCRIPTION";
let HIDE_DESCRIPTION = "HIDE_DESCRIPTION";

/*xport function personsFetchSuccess(users) {
  return {
    type: CHANGE_VISIBILITY,
  }
};
*/

//export const setUsers = (users) => ({type: SET_USERS, users});


let initialState = {
  isShow: false
}

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DESCRIPTION:
      return {...state, isShow: true};
    case HIDE_DESCRIPTION:
      return {...state, isShow: false};
    default:
      return state;
  }
};
/*
export const setFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});*/
export const showDescriptionAC = (isShow) => ({type: SHOW_DESCRIPTION, isShow});
export const hideDescriptionAC = (isShow) => ({type: HIDE_DESCRIPTION, isShow});

export default hotelReducer;
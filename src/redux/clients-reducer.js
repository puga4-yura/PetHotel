let SET_USERS = "SET_USERS";

export function personsFetchSuccess(users) {
  return {
    type: "SET_USERS",
    users
  }
};


//export const setUsers = (users) => ({type: SET_USERS, users});

export function personFetchData(url){
  return(dispatch) => {
    fetch(url).then(response => {
      if(!response.ok){
        throw new Error(response.statusText)
      }
      return response;
    })
      .then(response => response.json())
      .then( users=> dispatch(personsFetchSuccess(users)))
  }
}

let initialState = {

}

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
};
/*
export const setFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setUsers = (users) => ({type: SET_USERS, users});*/

export default clientReducer
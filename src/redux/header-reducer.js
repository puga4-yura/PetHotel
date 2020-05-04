let SHOW_MODAL_ENTER = "SHOW_MODAL_ENTER";
let SHOW_MODAL_CLOSE = "SHOW_MODAL_CLOSE";
//let ENTER_USER = "ENTER_USER"

let initialState = {
  isShowEnterForm: false,
  usersData: [{
    id: 1,
    email: " ",
    password: " "
  }]
};
const headerReducer = (state=initialState, action)=> {
  switch (action.type) {
    case SHOW_MODAL_ENTER:
      return {...state, isShowEnterForm: true};
    case SHOW_MODAL_CLOSE:
      return {...state, isShowEnterForm: false};

/*    case ENTER_USER: {
      let maxid = 0;
      state.users.forEach(function (current) {
        if (current.id > maxid) {
          maxid = current.id
        }
        return maxid += 1;
      })
      console.log(maxid)

      let newPost = {
        fullName: action.values.name,
        status: action.values.state,
        //location: {country: action.textInfo.country, city: action.textInfo.city}
      }

      return {...state, users: [newPost, ...state.users]}
    }*/
    default:
      return state;
  }
};


export const showModalEnterAC = (isShowEnterForm) => ({type: SHOW_MODAL_ENTER, isShowEnterForm});
//export const enterClientAC = (values) => ({type: ENTER_USER, values});
export const hideModalCloseAC = (isShowEnterForm) => ({type: SHOW_MODAL_CLOSE, isShowEnterForm});

export default headerReducer;
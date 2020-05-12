let SHOW_DESCRIPTION = "SHOW_DESCRIPTION";
let HIDE_DESCRIPTION = "HIDE_DESCRIPTION";
let SET_HOTEL = "SET_HOTEL";

export function hotelFetchSuccess(hotel) {
  return {
    type: SET_HOTEL,
    hotel
  }
};


//export const setUsers = (users) => ({type: SET_USERS, users});

export function hotelFetchData(url) {
  return (dispatch) => {
    fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response;
    })
      .then(response => {
        return [
          {
            id: 1,
            performance_image: [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpYD_g4vYnRMVvF43i9hqQP8-B039fXfB42pexCBwDID4ew2j8&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpYD_g4vYnRMVvF43i9hqQP8-B039fXfB42pexCBwDID4ew2j8&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpYD_g4vYnRMVvF43i9hqQP8-B039fXfB42pexCBwDID4ew2j8&usqp=CAU",
            ],
            name: "chelsea",
            phone: '0637555555',
            main_address: 'kiev',
            url: "www",
            min_price: 2,
            servise: [{
              name: "er",
              min_price: 3
            }]
          },
          {
            id: 2,
            performance_image: [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpYD_g4vYnRMVvF43i9hqQP8-B039fXfB42pexCBwDID4ew2j8&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpYD_g4vYnRMVvF43i9hqQP8-B039fXfB42pexCBwDID4ew2j8&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpYD_g4vYnRMVvF43i9hqQP8-B039fXfB42pexCBwDID4ew2j8&usqp=CAU",
            ],
            name: "chelsea",
            phone: '0637555555',
            main_address: 'kiev',
            url: "www",
            min_price: 2,
            servise: [{
              name: "er",
              min_price: 3
            }]
          }
        ]
        //return
        // response.json()
      })
      .then(hotel => dispatch(hotelFetchSuccess(hotel)))
  }
}

let initialState = {
  isShow: false,
  isFetching: false,
  openHotel: false,
}

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DESCRIPTION:
      if (action.idHotel) {
        return {...state, openHotel: action.idHotel}
      } else {
        return state;
      }

    //{...state, isShow: true};
    case HIDE_DESCRIPTION:
      return {...state, isShow: false, openHotel: false};
    case  SET_HOTEL:
      return {...state, hotel: action.hotel};

    default:
      return state;
  }
};

export const showDescriptionAC = (idHotel) => ({type: SHOW_DESCRIPTION, idHotel});
export const hideDescriptionAC = (isShow) => ({type: HIDE_DESCRIPTION, isShow});

export default hotelReducer;
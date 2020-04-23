import {combineReducers} from "redux";
import hotelReducer  from './hotel-reducer';
import profileReducer from './profile-reducer';



let redusers = combineReducers({
  hotelReducer : hotelReducer ,
  profile: profileReducer,
  //form: formReducer
});

export default redusers;
//let store  = createStore(redusers);

//export default store;

//window.store = store;
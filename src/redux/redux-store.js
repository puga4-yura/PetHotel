import {combineReducers} from "redux";
import clientReducer from './clients-reducer';
import profileReducer from './profile-reducer';



let redusers = combineReducers({
  clients: clientReducer,
  profile: profileReducer,
  //form: formReducer
});

export default redusers;
//let store  = createStore(redusers);

//export default store;

//window.store = store;
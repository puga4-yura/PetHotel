import {combineReducers} from "redux";
import hotelReducer  from './hotel-reducer';
import headerReducer from './header-reducer';
import { reducer as formReducer} from 'redux-form'



let redusers = combineReducers({
  hotelReducer : hotelReducer ,
  headerReducer: headerReducer,
  form: formReducer
});

export default redusers;
//let store  = createStore(redusers);

//export default store;

//window.store = store;
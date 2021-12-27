import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";


//creamos el store que va hacer el encargado de manejar el reducer
//le pasamos applyMiddleware para hacer peticiones ajax
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;


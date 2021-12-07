import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {logger} from 'redux-logger';


import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//Reducers
const getBusRoutesReducer = (state = [], action) => {
  if (action.type === "GET_BUS_ROUTES") {
    console.log("This busRoutesReducer", action.payload);
    return action.payload;
  }
  return state;
};

const setBusRouteReducer = (state = (''), action) => {
  if (action.type === "SET_BUS_ROUTE") {
    console.log("This setBusRoutesReducer", action.payload);
    return action.payload;
  }
  return state;
};

const getBusDirectionReducer = (state = [], action) => {
  if (action.type === "GET_BUS_DIRECTION") {
    console.log("This getBusDirectionReducer", action.payload);
    return action.payload;
  }
  return state;
};

const setBusDirectionReducer = (state = (''), action) => {
  if (action.type === "SET_BUS_DIRECTION") {
    console.log("This setBusDirectionReducer" + action.payload);
    return action.payload;
  }
  return state;
};

const getBusStopReducer = (state = [], action) => {
  if (action.type === "GET_BUS_STOPS") {
    console.log("This getBusDirectionReducer", action.payload);
    return action.payload;
  }
  return state;
};

const setBusStopReducer = (state = (''), action) => {
  if (action.type === "SET_BUS_STOP") {
    console.log("This setBusStopReducer" + action.payload);
    return action.payload;
  }
  return state;
};

const getAllInfoReducer = (state = [], action) => {
  if (action.type === "GET_ALL_INFO") {
    console.log("This getAllInfoReducer", action.payload);
    return action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  getBusRoutesReducer,
  setBusRouteReducer,
  getBusDirectionReducer,
  setBusDirectionReducer,
  getBusStopReducer,
  setBusStopReducer,
  getAllInfoReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);

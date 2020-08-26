import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

const initialState = {
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [
      { id: 1, name: "V-6 engine", price: 1500 }, //
      { id: 4, name: "Rear spoiler", price: 250 },
    ],
  },
  additionalFeatures: [
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
  ],
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        /**
         * Loop thru the current addtionFeatures, and keep the feature whose id
         * is DIFFERENT from the feaure id you want to add (payload)
         */
        additionalFeatures: state.additionalFeatures.filter(
          (feature) => feature.id !== action.payload
        ),
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            /**
             * Loop thru the current addtionFeatures, and keep the feature whose id
             * is the SAME as the feaure id you want to add (payload)
             */
            ...state.additionalFeatures.filter(
              (feature) => feature.id === action.payload
            ),
          ],
        },
      };

    case "REMOVE_FEATURE":
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            (feature) => feature.id !== action.payload
          ),
        },
        additionalFeatures: [
          ...state.additionalFeatures,
          ...state.car.features.filter(
            (feature) => feature.id === action.payload
          ),
        ],
      };

    default:
      return state;
  }
};

const store = createStore(carReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import carReducer from "./reducers/carReducer";
// import App from "./App";

// import "bulma/css/bulma.css";
// import "./styles.scss";

// //  create store        import createStore
// // wrap around Provider  import Provider
// // connect to dispatch  import connect

// const store = createStore(carReducer);

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// );
// // anything between Provider has access to 'store'
// // don't need to connect store to App because its not using it

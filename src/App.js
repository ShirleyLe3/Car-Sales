import React, { useReducer } from "react";
import { connect } from "./react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import carReducer, {
  ADD_FEATURE,
  REMOVE_FEATURE,
  initialState,
} from "./reducer/carReducer";
import { removeFeature, buyItem } from "./actions/carActions";

const App = () => {
  const [state, dispatch] = useReducer(carReducer, initialState);
  // state will represent the current state rather than th initialState. use as top level for things that need it

  // ---------initial state exists in reducer----------
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  //            ---------------------DISPATCH---------------------------

  //   const removeFeature = (feature) => {
  //     //dispatch an action here to remove a feature/feature
  //     dispatch({
  //       type: REMOVE_FEATURE,
  //       payload: feature,
  //     });
  //   };

  //   const buyItem = (feature) => {
  //     // dispatch an action here to add an item/feature
  //     dispatch({
  //       type: ADD_FEATURE,
  //       payload: feature,
  //     }); //  sent to the reducer
  //   };
  //   //    pass props in additionalFeatures   buyItem = {props.buyItem}

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures removeFeature={props.removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          buyItem={buyItem}
          additionalFeatures={props.additionalFeatures} // change state to props
        />
        <Total car={state.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//  create store Index.js         import createStore
// wrap around Provider           import Provider
// connect App   store to reducer, passing functions props to state of the app. mapStateToProps, matchDispatchToProps in App.js
//                                import connect
//                              change state to props under App.js
//                              connect other components (Header, AddedFeatures, Additionalfeatures, Total) listed
//

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToState = {
  // access props
  removeFeature: removeFeature,
  buyItem: buyItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

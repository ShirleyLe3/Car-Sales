import React from "react";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const AdditionalFeature = (props) => {
  const dispatch = useDispatch();

  return (
    <li>
      <button
        className="button"
        /**
         * props.feature.id comes from parent (aka. AddtionalFeatures component)
         */
        onClick={() =>
          dispatch({
            type: "ADD_FEATURE",
            payload: props.feature.id,
          })
        }
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     /**
//      * addFeature is a function that takes in a featureIdToAdd, and will give (return) you
//      * the mail-man (dispatch) with the letter (action of type 'ADD_FEATURE' and payload featureIdToAdd)
//      */
//     addFeature: (featureIdToAdd) =>
//       dispatch({
//         type: "ADD_FEATURE",
//         payload: featureIdToAdd
//       })
//   };
// };

// export default connect(null, mapDispatchToProps)(AdditionalFeature);
export default AdditionalFeature;

// import React from "react";
// import { connect } from "react-redux";
// import { buyItem } from "./actions/carActions";
// import useDispatch from "redux";

// const AdditionalFeature = (props) => {
//   const dispatch = useDispatch();

//   return (
//     <li>
//       {/* Add an onClick that will let you add a feature to your car */}
//       <button onClick={() => props.buyItem(props.feature)} className="button">
//         Add
//       </button>
//       {props.feature.name} (+{props.feature.price})
//     </li>
//   );
// };

// export default // connect(null, {buyItem})     // remove connect for hooks
// AdditionalFeature;

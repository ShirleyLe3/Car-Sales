import React from "react";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  return (
    <li>
      <button
        className="button"
        onClick={() => {
          props.removeFeature(props.feature.id);
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFeature: (featureIdToRemove) =>
      dispatch({
        type: "REMOVE_FEATURE",
        payload: featureIdToRemove,
      }),
  };
};

export default connect(null, mapDispatchToProps)(AddedFeature);

// import React from "react";
// import { connect } from "react-redux";
// import { removeFeature } from "./actions/carActions";

// const AddedFeature = (props) => {
//   return (
//     <li>
//       {/* Add an onClick to run a function to remove a feature */}
//       <button
//         onClick={() => props.removeFeature(props.feature)}
//         className="button"
//       >
//         X
//       </button>
//       {props.feature.name}
//     </li>
//   );
// };

// const mapDispatchToProps = { removeFeature: dispatch => dispatch({removeFeature}) };

// export default connect(null, mapDispatchToProps)(AddedFeature);
// // mapped dispatch to the props features.   props to handle onClick method

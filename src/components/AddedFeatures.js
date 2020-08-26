import React from "react";
import { connect } from "react-redux";

import AddedFeature from "./AddedFeature";

const AddedFeatures = (props) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map((item) => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: {
      features: state.car.features,
    },
  };
};

export default connect(mapStateToProps, null)(AddedFeatures);

// import React from "react";
// import { connect } from "react-redux";
// import { removeFeature } from "./actions/carActions";

// import AddedFeature from "./AddedFeature";

// const AddedFeatures = (props) => {
//   return (
//     <div className="content">
//       <h6>Added features:</h6>
//       {props.car.features.length ? (
//         <ol type="1">
//           {props.car.features.map((item) => (
//             <AddedFeature
//               removeFeature={props.removeFeature}
//               key={item.id}
//               feature={item}
//             />
//           ))}
//         </ol>
//       ) : (
//         <p>You can purchase items from the store.</p>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     features: state.car.features,
//   };
// };

// const mapDispatchToState = {
//   removeFeature,
// };
// //        -----------------has been stated below--------------------------
// //                don't need features from car, so we specify without needed props.car

// export default connect(mapStateToProps, mapDispatchToProps)(AddedFeatures);
// // export default connect(state => {features: state.car.features}, null)  (AddedFeatures);
// // export default connect( (state) => {features: state.car.features;}, { removeFeature })(AddedFeatures);

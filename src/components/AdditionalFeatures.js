import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";

const AdditionalFeatures = (props) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((feature) => (
            <AdditionalFeature key={feature.id} feature={feature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, null)(AdditionalFeatures);

// import React from 'react';
// import { connect } from 'react-redux';
// import { removeFeature } from './actions/carActions';
// import AdditionalFeature from './AdditionalFeature';

// const AdditionalFeatures = props => {
//   return (
//     <div className="content">
//       <h4>Additional Features</h4>
//       {props.features.length ? (      //additionalFeatures to props.features
//         <ol type="1">
//           {props.features.map(item => (
//             <AdditionalFeature key={item.id} feature={item} />
//             //      pass props on AdditionalFeature component.   remove buyItem
//           ))}
//         </ol>
//       ) : (
//         <p>Nice looking car!</p>
//       )}
//     </div>
//   );
// };

// // const mapStateToProps = state => {
// //   return {
// //     features: state.car.features
// //   }
// // }

// // const mapDispatchToState = {
// //   removeFeature
// // }
// export default connect(state => {features: state.car.features}, null)(AdditionalFeatures);

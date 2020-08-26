import React from "react";
import { connect } from "react-redux";

const Total = (props) => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

/**
 * - The Total component needs the original price of the car,
 * and the prices of all the added features to calculate the total price
 */
const mapStateToProps = (state) => {
  let totalAdditionPrice = 0;
  const features = state.car.features;

  for (let i = 0; i < features.length; i++) {
    totalAdditionPrice = totalAdditionPrice + features[i].price;
  }

  return {
    car: {
      price: state.car.price,
    },
    additionalPrice: totalAdditionPrice,
  };
};

export default connect(mapStateToProps, null)(Total);

// import React from 'react';
// import { connect } from 'react-redux';

// const Total = () => {

//   const [price, additionalPrice] = useSelector(state => [state.car.price, state.additionalPrice])

//   return (
//     <div className="content">
//       <h4>Total Amount: ${props.price + props.additionalPrice}</h4>     {/* // remove 'car' from props.car.price */}
//     </div>
//   );
// };

// // const mapStateToProps = state => {
// //       return {
// //         price: state.car.price,
// //         additionalPrice: state.additionalPrice
// //       }
// // }              -------------don't need all this crap with HOOKS------------------

// export default connect(mapsStateToProps, null)(Total);

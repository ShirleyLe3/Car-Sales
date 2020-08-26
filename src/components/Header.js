import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

/**
 * - The Header component only needs image, name.
 * - The mapStateToProps function will take the whole big Redux state, and select only
 * image, price, and name out, then inject it into your Header component as props
 */
const mapStateToProps = (state) => {
  return {
    car: {
      image: state.car.image,
      name: state.car.name,
      price: state.car.price,
    },
  };
};

export default connect(mapStateToProps, null)(Header);

// import React from 'react';
// import { connect } from 'react-redux';

// const Header = props => {

//   const car = useSelector(state => state.car);

//   return (
//     <>
//       <figure className="image is-128x128">
//         <img src={props.car.image} alt={props.car.name} />
//       </figure>
//       <h2>{props.car.name}</h2>
//       <p>Amount: ${props.car.price}</p>
//     </>
//   );
// };

// const mapStateToProps = state => {
//     return{
//       car: state.car
//     }
// }

// export default connect(mapStateToProps, null)(Header);

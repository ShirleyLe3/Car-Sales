export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';


export const intialState = {
    
    additionalPrice: 0,
      car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
      },
      additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
    };
    
    
    
    
    
    //                 Create Add/Remove reducer
    
    //  Add/Remove Feature; send the id of feature object as payload       action = message    payload = data stuff
        // dispatch ({
        //         type: ,
        //         payload: userId   // used to update state.   can be anything you want it to be })

const carReducer = ( state = initialState, action ) => {
    switch (action.type) {
        // case SOME_ACTION_TO_FEATURE:
        //     return state;
            //action will be the payload
            // action.payload = feature.object

            // price will be updated. can pass in state to make it feature-proof
        case ADD_FEATURE:       
            return {
                ...state, car: {...state.car, features: [...state.car.features, action.payload]},  // makes copy of all car values but change features. pull state&spread, car&spread, features&spread, keep features & add action.payload(object add/removed)
                additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id),    // if action do not match then 
                additionalPrice: state.additionalPrice + action.payload.price 
            };    
        case REMOVE_FEATURE:
            return {
                ...state, car: {...state.car, features: state.car.features.filter(feature => feature.id !== action.payload.id)} // complete opposite of add - remove features from features=[] and adding the rest to new array              
                            //  only return the items that do NOT match the items of the action.payload 
                additionalFeatures: [...state.additionalFeatures, action.payload],    // adding two additional features instead of taking away from it
                additionalPrice: state.additionalPrice - action.payload.price 
            };    
        default: 
            return state;
    }
    }

export default carReducer;
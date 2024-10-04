import {
    SET_USERNAME,
    SET_DATA,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
  } from './actions';
  
  const initialState = {
    username: '',
    data: [],
  };
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        case ADD_PRODUCT:
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                data: state.data.map((product) =>
                product.id === action.payload.id ? action.payload : product
                ),
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                data: state.data.filter((product) => product.id !== action.payload),
            };
        default:
            return state;
    }
  };
  
  export default appReducer;
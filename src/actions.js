export const SET_USERNAME = 'SET_USERNAME';
export const SET_DATA = 'SET_DATA';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
// Action Creators
export const setUsername = (username) => ({
    type: SET_USERNAME,
    payload: username,
  });
  export const setData = (data) => ({
    type: SET_DATA,
    payload: data,
  });
  export const addProduct = (newProduct) => ({
    type: ADD_PRODUCT,
    payload: newProduct,
  });
  
  export const updateProduct = (updatedProduct) => ({
    type: UPDATE_PRODUCT,
    payload: updatedProduct,
  });
  
  export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
  });
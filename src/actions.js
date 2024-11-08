export const SET_USERNAME = 'SET_USERNAME';
export const SET_DATA = 'SET_DATA';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

//เพิ่ม action types สำหรับตะกร้าสินค้า
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART ='REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const EDIT_CART = 'EDIT_CART';

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

  // Action creators สำหรับตะกร้าสินค้า
  export const addToCart = (product)=>({
    type:ADD_TO_CART,
    payload:product,
  })

  export const removeFromCart =(productId)=>({
    type:REMOVE_FROM_CART,
    payload:productId,
  })

  export const clearCart =() =>({
    type:CLEAR_CART,
  })
  export const editCart = (editProduct)=>({
    type:EDIT_CART,
    payload:editProduct,
  })

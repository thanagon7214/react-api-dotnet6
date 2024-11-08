import {
    SET_USERNAME,
    SET_DATA,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    EDIT_CART
  } from './actions';
  
  const initialState = {
    username: '',
    data: [],
    cart:[],// เพิ่ม state สำหรับเก็บข้อมูลตะกร้าสินค้า
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
       
        case ADD_TO_CART:
            // return{
            //     ...state,
            //     cart:[...state.cart,action.payload]
            // };
                const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);

            if (existingItemIndex !== -1) {
                // ถ้าพบสินค้าเดิมใน cart ให้เพิ่ม count
                const updatedCart = state.cart.map((item, index) => 
                    index === existingItemIndex 
                    ? { ...item, count: item.count + 1 }
                    : item
                );
                return { ...state, cart: updatedCart };
            } else {
                // ถ้าเป็นสินค้าใหม่ ให้เพิ่มเข้าไปพร้อม count = 1
                return { ...state, cart: [...state.cart, { ...action.payload, count: 1 }] };
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter((item)=>item.id!==action.payload),
            };
        case CLEAR_CART:
            return {
                ...state,
                cart:[],
            };
        case EDIT_CART:
            // return {
            //     ...state,
            //     cart: state.cart.map((product) =>
            //     product.id === action.payload.id ? action.payload : product
            //     ),
            // };
            const ItemIndex = state.cart.findIndex(item => item.id === action.payload.id);

            if (ItemIndex !== -1) {
                // ถ้าพบสินค้าเดิมใน cart ให้เพิ่ม count
                const updatedCart = state.cart.map((item, index) => 
                    index === ItemIndex 
                    ? { ...item, count: action.payload.count }
                    : item
                );
                return { ...state, cart: updatedCart };
            } else {
                // ถ้าเป็นสินค้าใหม่ ให้เพิ่มเข้าไปพร้อม count = 1
                return state;
            }
        default:
            return state;
         
    }
  };
  
  export default appReducer;
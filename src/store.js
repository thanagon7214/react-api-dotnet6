import { configureStore  } from '@reduxjs/toolkit';
import rootReducer  from './reducer';

const store = configureStore({
    reducer: rootReducer,
  });

export default store;

// import { createStore } from 'redux';
// import appReducer from './reducer';

// const store = createStore(appReducer);

// export default store;


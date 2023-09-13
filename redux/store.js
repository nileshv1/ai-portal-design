// store.js

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import apiReducer from './slice/apiSearchSlice'; // Import your API slice
import graphapiReducer from './slice/graphQlSlice'; // Import your API slice

// const store = configureStore({
//   reducer: {
//     api: apiReducer,
//     graphapi: graphapiReducer,
//   },
// });
const rootReducer = combineReducers({
  api: apiReducer,
  graphapi: graphapiReducer,
});

const store = configureStore({
  reducer: rootReducer,
});


export default store;

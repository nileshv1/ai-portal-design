// store.js

import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './slice/apiSearchSlice'; // Import your API slice

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchApiReducer from './slice/apiSearchSlice';
import graphqlApiReducer from './slice/graphqlSlice';

const rootReducer = combineReducers({
  api: searchApiReducer,
  graphqlApi: graphqlApiReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

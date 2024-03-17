import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices';

const store = configureStore({
  reducer: {
    login: loginReducer,
    // Add more reducers if needed
  },
});

export default store;
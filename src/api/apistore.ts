import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { api } from './apiSlice';
import userReducer from './user/userSlice'

const apistore = configureStore({
  reducer: {
    [api.reducerPath]:
    api.reducer,
    // Add your reducers here
    user: userReducer,

  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});



export type RootState = ReturnType<typeof apistore.getState>;

export type AppDispatch = typeof apistore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default apistore;
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import otpReducer from './slices/otpSlice'

const rootReducers = combineReducers({
  // your reducers
  otp: otpReducer,
})

const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV !== 'production',
})

type RootState = ReturnType<typeof store.getState>
type AppDispath = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispath>()

export default store

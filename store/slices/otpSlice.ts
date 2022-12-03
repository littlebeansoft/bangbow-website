import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  otpVerify: false,
  otpData: {
    status: '',
    ref_no: '',
    token: '',
  },
  countDownStatus: false,
  countDown: 60,
}

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOtpVerify: (state, action) => {
      state.otpVerify = action.payload
    },
    setOtpData: (state, action) => {
      state.otpData = action.payload
    },
    setCountDownStatus: (state, action) => {
      state.countDownStatus = action.payload
    },
    setCountDown: (state, action) => {
      state.countDown = action.payload
    },
  },
})

export const { setOtpVerify, setOtpData, setCountDownStatus } = otpSlice.actions
export default otpSlice.reducer

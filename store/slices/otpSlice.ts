import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  otpVerify: false,
  otpData: {
    status: '',
    ref_no: '',
    token: '',
  },
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
  },
})

export const { setOtpVerify, setOtpData } = otpSlice.actions
export default otpSlice.reducer

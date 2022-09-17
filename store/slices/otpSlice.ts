import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  otpVerify: false,
}

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOtpVerify: (state, action) => {
      state.otpVerify = action.payload
    },
  },
})

export const { setOtpVerify } = otpSlice.actions
export default otpSlice.reducer

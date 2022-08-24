import { createSlice } from '@reduxjs/toolkit'

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    workTime: [
      {
          day: "05/17/2022",
          overrideStartTime: "",
          overrideEndTime: ""
      },
      {
          day: "06/17/2022",
          overrideStartTime: "",
          overrideEndTime: ""
      },
      {
          day: "07/17/2022",
          overrideStartTime: "",
          overrideEndTime: ""
      },
      {
          day: "08/17/2022",
          overrideStartTime: "",
          overrideEndTime: ""
      },
      {
          day: "09/17/2022",
          overrideStartTime: "",
          overrideEndTime: ""
      },
      {
          day: "10/17/2022",
          overrideStartTime: "",
          overrideEndTime: ""
      },
      {
          day: "11/17/2022",
          overrideStartTime: "",
          overrideEndTime: ""
      },
  ] 
  },
  reducers: {
    setDayHours: (state, action) => {
      const {index, startTime, endTime} = action.payload;
      state.workTime[index].overrideStartTime = startTime;
      state.workTime[index].overrideEndTime = endTime;
    },
  },
})

export const getCompleteData = (state) => {
  return state.checkout.workTime;
}

// Action creators are generated for each case reducer function
export const { setDayHours} = checkoutSlice.actions;

export default checkoutSlice.reducer
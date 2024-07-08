import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  word: 0,
  character: 0,
  inputValue: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getInputValue: (state, action) => {
        state.inputValue=action.payload
    },
    clearInputValue:(state)=>{
        state.inputValue=''
    },

  },
});


export const { getInputValue, clearInputValue } = counterSlice.actions;

export default counterSlice.reducer;

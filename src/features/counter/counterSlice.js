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
        state.inputValue=action.payload,
        state.word = countWords(action.payload),
        state.character=countCharacter(action.payload)
    },
    clearInputValue:(state)=>{
        state.inputValue=''
        state.word=0,
        state.character=0
    },

  },
});

const countWords = (text)=>{
    return text.trim()===''? 0 : text.trim().split(/\s+/).length
}

const countCharacter =(text)=>{
    return text.length
}

export const { getInputValue, clearInputValue } = counterSlice.actions;

export default counterSlice.reducer;

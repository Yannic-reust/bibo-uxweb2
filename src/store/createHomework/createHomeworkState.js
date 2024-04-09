import { createSlice } from "@reduxjs/toolkit";

export const homework = createSlice({
  name: "homework",
  initialState: {
    value: null,
  },
  reducers: {
    setHomeworkPart1: (state, action) => {
      state.value = action.payload;
    },
    setHomeworkPart2: (state, action) => {
      state.value = action.payload;
    },
    setHomeworkPart2: (state, action) => {
      state.value = action.payload;
    },
    setHomeworkFinish: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setHomework } = homework.actions;

export default homework.reducer;

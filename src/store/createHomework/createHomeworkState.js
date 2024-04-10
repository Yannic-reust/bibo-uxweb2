import { createSlice } from "@reduxjs/toolkit";

export const homework = createSlice({
  name: "homework",
  initialState: {
    value: {
      subject: "",
      taskType: "",
      title: "",
      deadline: "",
      questions: [],
    },
  },
  reducers: {
    setHomeworkPart1: (state, action) => {
      state.value.subject = action.payload.subject;
      state.value.taskType = action.payload.taskType;
      state.value.title = action.payload.title;
      state.value.deadline = action.payload.deadline;
    },
    setHomeworkPart2: (state, action) => {
      state.value.questions = action.payload;
    },

    setHomeworkFinish: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setHomeworkPart1, setHomeworkPart2, setHomeworkFinish } =
  homework.actions;

export default homework.reducer;

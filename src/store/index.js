import { configureStore } from "@reduxjs/toolkit";
import homeworkReducer from "./createHomework/createHomeworkState";

export default configureStore({
  reducer: {
    createHomework: homeworkReducer,
  },
});

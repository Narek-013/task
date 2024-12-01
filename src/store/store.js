import { configureStore } from "@reduxjs/toolkit";
import { actionPlannerReducer } from "./slices/actionPlannerSlice/actionPlannerSlice";
import { modalReducer } from "./slices/modalSlice/modalSlice";

export const store = configureStore({
  reducer: {
    actionPlanner: actionPlannerReducer,
    modal: modalReducer
  },
});

import { createSlice } from "@reduxjs/toolkit";
import { fetchResponseForRow } from "./API";


const actionPlannerSlice = createSlice({
  name: "actionPlanner",
  initialState: {
    data: [
      {
        no: 1,
        category: "Customer Support",
        objective: "Handle urgent tickets",
        action: "Respond to high-priority tickets within 2 hours",
        dependencies: "Access to ticketing system",
        prerequisites: "Login credentials",
        priority: "High",
        risksAndMitigation: "Delayed response; implement alerts",
        frequency: "Daily",
      },
      {
        no: 1,
        category: "Customer Support",
        objective: "Handle urgent tickets",
        action: "Respond to high-priority tickets within 2 hours",
        dependencies: "Access to ticketing system",
        prerequisites: "Login credentials",
        priority: "High",
        risksAndMitigation: "Delayed response; implement alerts",
        frequency: "Daily",
      },
      {
        no: 1,
        category: "Customer Support",
        objective: "Handle urgent tickets",
        action: "Respond to high-priority tickets within 2 hours",
        dependencies: "Access to ticketing system",
        prerequisites: "Login credentials",
        priority: "High",
        risksAndMitigation: "Delayed response; implement alerts",
        frequency: "Daily",
      },
      {
        no: 1,
        category: "Customer Support",
        objective: "Handle urgent tickets",
        action: "Respond to high-priority tickets within 2 hours",
        dependencies: "Access to ticketing system",
        prerequisites: "Login credentials",
        priority: "High",
        risksAndMitigation: "Delayed response; implement alerts",
        frequency: "Daily",
      },
      {
        no: 1,
        category: "Customer Support",
        objective: "Handle urgent tickets",
        action: "Respond to high-priority tickets within 2 hours",
        dependencies: "Access to ticketing system",
        prerequisites: "Login credentials",
        priority: "High",
        risksAndMitigation: "Delayed response; implement alerts",
        frequency: "Daily",
      },
      {
        no: 1,
        category: "Customer Support",
        objective: "Handle urgent tickets",
        action: "Respond to high-priority tickets within 2 hours",
        dependencies: "Access to ticketing system",
        prerequisites: "Login credentials",
        priority: "High",
        risksAndMitigation: "Delayed response; implement alerts",
        frequency: "Daily",
      },
      
    ],
    loadingRow: null,
    responses: {},
    error: null,
  },
  reducers: {
    addRow: (state) => {
      state.data.push({
        no: state.data.length + 1,
        category: "",
        objective: "",
        action: "",
        dependencies: "",
        prerequisites: "",
        priority: "Low",
        risksAndMitigation: "",
        frequency: "One-time",
      });
    },
    updateRow: (state, action) => {
      const { index, field, value } = action.payload;
      state.data[index][field] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResponseForRow.pending, (state, action) => {
        state.loadingRow = action.meta.arg.index;
      })
      .addCase(fetchResponseForRow.fulfilled, (state, action) => {
        state.responses[action.payload.index] = action.payload.responseText;
        state.loadingRow = null;
      })
      .addCase(fetchResponseForRow.rejected, (state, action) => {
        state.responses[action.payload.index] = action.payload.error;
        state.loadingRow = null;
      });
  },
});

export const { addRow, updateRow } = actionPlannerSlice.actions;
export const actionPlannerReducer = actionPlannerSlice.reducer;

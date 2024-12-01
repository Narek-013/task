import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchResponseForRow = createAsyncThunk("actionPlanner/fetchResponseForRow", async ({ index, row }, { rejectWithValue }) => {
  const cohereApiKey = "OyYxXlFPxmLyZsqUEVScUHpFOTt1nz0vyPlaXJ37"; 
  const query = `Category: ${row.category}, Objective: ${row.objective}, Action: ${row.action}, Dependencies: ${row.dependencies}, Prerequisites: ${row.prerequisites}, Priority: ${row.priority}, Risks and Mitigation: ${row.risksAndMitigation}, Frequency: ${row.frequency}.`;

  try {
    const response = await axios.post(
      "https://api.cohere.ai/v1/generate",
      {
        model: "command-xlarge-nightly",
        prompt: query,
        max_tokens: 200,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${cohereApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return { index, responseText: response.data.generations[0].text };
  } catch (error) {
    return rejectWithValue({ index, error: "An error occurred while fetching the data." });
  }
});

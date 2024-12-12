import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PROJECT_TOKEN = import.meta.env.VITE_API_KEY;

export const fetchTrainers = createAsyncThunk("Trainers/fetch", async () => {
  try {
    const response = await axios.get(
      `https://${PROJECT_TOKEN}.mockapi.io/personal-trainers/trainers`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const initialState = {
  trainers: [],
  loading: false,
  error: null,
};

export const trainerSlice = createSlice({
  name: "Trainers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrainers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrainers.fulfilled, (state, action) => {
        state.loading = false;
        state.trainers = action.payload;
      })
      .addCase(fetchTrainers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default trainerSlice.reducer;

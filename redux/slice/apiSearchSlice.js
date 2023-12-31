// apiSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an initial state
const initialState = {
  searchList: null,
  loading: false,
  error: null,
  selectedUser: null,
};

// Create an async thunk for making the API request
export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query, { rejectWithValue }) => {
    try {
      const response = await fetch('api/searchSuggestions', {
        method: "POST",
        body: JSON.stringify(query),
        headers: {
          "Content-Type": "application/json",
          // "api-key": apiKey,
          Authorization: {},
        },
      });

      if (!response.ok) {
        // Handle non-200 status codes (e.g., 404)
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create a slice for managing the state
const apiSearchSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setUser: (state, { payload }) => ({
      ...state,
      selectedUser: payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.searchList = action.payload.value;
        // console.log(action, "action")
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        
      });
  },
});
export const { setUser } = apiSearchSlice.actions;
export default apiSearchSlice.reducer;

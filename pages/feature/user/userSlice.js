import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authState = {
  isLoading: false,
  isError: "",
  usersData: {},
};

export const userSlice = createSlice({
  name: "users",
  initialState: authState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUsersData.rejected, (state, action) => {
      state.isLoading = "Rejected";
      state.isError = action.error.message;
    });
    builder.addCase(getUsersData.fulfilled, (state, action) => {
      state.isLoading = "Completed";
      // console.log(action,"action")
      state.usersData = action.payload;
    });
  },
});
export const getUsersData = createAsyncThunk(
  "getUsersData",
  async (params, thunkAPI) => {
    const apiEndpoint = process.env.API_ENDPOINT;
    // Your Azure Cognitive Search API version
    const apiVersion = process.env.API_VERSION;
    // Your authorization token
    const authToken = process.env.AUTH_TOKEN; // Replace with your actual token
    const apiKey = process.env.API_KEY;
    // Your search query
    const query = "James";
    const headers = {
      "Content-Type": "application/json",
      Authorization: authToken,
      "api-key": apiKey,
    };
    let result = await fetch(
      `${apiEndpoint}?api-version=${apiVersion}&search=${query}*`,
      {
        method: "GET",
        mode: "no-cors",
        headers: headers,
      }
    )
      .then((response) => response.json())
      .then((data) => data)
      .then((error) => error);
    console.log(result, "result");
    return result;
  }
);

export const {} = userSlice.actions;

export const userReducer = userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  searchResults: [],
  isLoading: false,
  error: null,
};

export const fetchSearchProducts = createAsyncThunk(
  "search/fetchSearchProducts",
  async (searchTerm) => {
    const response = await axios.get(`http://localhost:5000/api/products/search?q=${searchTerm}`);
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSearchResults } = searchSlice.actions;
export default searchSlice.reducer; 
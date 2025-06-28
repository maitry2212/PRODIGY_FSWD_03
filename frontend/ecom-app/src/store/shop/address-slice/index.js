import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  addresses: [],
  isLoading: false,
  error: null,
};

export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async (userId) => {
    const response = await axios.get(`http://localhost:5000/api/addresses/${userId}`);
    return response.data;
  }
);

export const addAddress = createAsyncThunk(
  "addresses/addAddress",
  async (addressData) => {
    const response = await axios.post("http://localhost:5000/api/addresses", addressData);
    return response.data;
  }
);

export const updateAddress = createAsyncThunk(
  "addresses/updateAddress",
  async ({ addressId, addressData }) => {
    const response = await axios.put(`http://localhost:5000/api/addresses/${addressId}`, addressData);
    return response.data;
  }
);

export const deleteAddress = createAsyncThunk(
  "addresses/deleteAddress",
  async (addressId) => {
    const response = await axios.delete(`http://localhost:5000/api/addresses/${addressId}`);
    return response.data;
  }
);

const addressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresses = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        // Handle add address success
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        // Handle update address success
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        // Handle delete address success
      });
  },
});

export default addressSlice.reducer; 
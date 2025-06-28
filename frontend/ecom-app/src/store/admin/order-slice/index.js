import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orders: [],
  orderDetails: null,
  isLoading: false,
  error: null,
};

export const fetchOrders = createAsyncThunk(
  "adminOrders/fetchOrders",
  async () => {
    const response = await axios.get("http://localhost:5000/api/admin/orders");
    return response.data;
  }
);

export const getOrderDetailsForAdmin = createAsyncThunk(
  "adminOrders/getOrderDetailsForAdmin",
  async (orderId) => {
    const response = await axios.get(`http://localhost:5000/api/admin/orders/${orderId}`);
    return response.data;
  }
);

export const updateOrderStatus = createAsyncThunk(
  "adminOrders/updateOrderStatus",
  async ({ orderId, status }) => {
    const response = await axios.put(`http://localhost:5000/api/admin/orders/${orderId}`, { status });
    return response.data;
  }
);

const adminOrderSlice = createSlice({
  name: "adminOrders",
  initialState,
  reducers: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getOrderDetailsForAdmin.fulfilled, (state, action) => {
        state.orderDetails = action.payload;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        // Handle status update success
      });
  },
});

export const { resetOrderDetails } = adminOrderSlice.actions;
export default adminOrderSlice.reducer; 
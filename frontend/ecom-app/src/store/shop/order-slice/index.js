import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orders: [],
  orderDetails: null,
  isLoading: false,
  error: null,
};

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (userId) => {
    const response = await axios.get(`http://localhost:5000/api/orders/${userId}`);
    return response.data;
  }
);

export const createNewOrder = createAsyncThunk(
  "orders/createNewOrder",
  async (orderData) => {
    const response = await axios.post("http://localhost:5000/api/orders", orderData);
    return response.data;
  }
);

export const capturePayment = createAsyncThunk(
  "orders/capturePayment",
  async (paymentData) => {
    const response = await axios.post("http://localhost:5000/api/orders/capture-payment", paymentData);
    return response.data;
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearOrderDetails: (state) => {
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
      .addCase(createNewOrder.fulfilled, (state, action) => {
        // Handle order creation success
      })
      .addCase(capturePayment.fulfilled, (state, action) => {
        // Handle payment capture success
      });
  },
});

export const { clearOrderDetails } = orderSlice.actions;
export default orderSlice.reducer; 
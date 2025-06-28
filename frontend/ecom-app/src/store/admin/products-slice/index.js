import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "adminProducts/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/api/admin/products");
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "adminProducts/addProduct",
  async (productData) => {
    const response = await axios.post("http://localhost:5000/api/admin/products", productData);
    return response.data;
  }
);

export const editProduct = createAsyncThunk(
  "adminProducts/editProduct",
  async ({ productId, productData }) => {
    const response = await axios.put(`http://localhost:5000/api/admin/products/${productId}`, productData);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "adminProducts/deleteProduct",
  async (productId) => {
    const response = await axios.delete(`http://localhost:5000/api/admin/products/${productId}`);
    return response.data;
  }
);

const adminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        // Handle add product success
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        // Handle edit product success
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        // Handle delete product success
      });
  },
});

export default adminProductsSlice.reducer; 
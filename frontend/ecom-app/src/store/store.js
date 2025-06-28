import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import cartReducer from './shop/cart-slice';
import productsReducer from './shop/products-slice';
import orderReducer from './shop/order-slice';
import searchReducer from './shop/search-slice';
import addressReducer from './shop/address-slice';
import reviewReducer from './shop/review-slice';
import commonReducer from './common-slice';
import adminOrderReducer from './admin/order-slice';
import adminProductsReducer from './admin/products-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
    orders: orderReducer,
    search: searchReducer,
    addresses: addressReducer,
    reviews: reviewReducer,
    common: commonReducer,
    adminOrders: adminOrderReducer,
    adminProducts: adminProductsReducer,
  },
});

export default store; 
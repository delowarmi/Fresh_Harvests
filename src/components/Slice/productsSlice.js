import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], 
  filteredProducts: [],
  category: "All",
  currentPage: 1,
  productsPerPage: 9
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload; // প্রথমে সব থাকবে
    },
    filterProducts: (state, action) => {
      state.category = action.payload;
      state.currentPage = 1; // ক্যাটেগরি চেঞ্জ হলে প্রথম পেজে যাবে
      if (action.payload === "All") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        );
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setProducts, filterProducts, setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;

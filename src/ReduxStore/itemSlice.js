import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "item",
    initialState: {
        itemData: false,
        itemImage: [],
        ProductsData: [],
    },
    reducers: {
        addItemData: (state, action) => {
            state.itemData = action.payload;
        },
        addProductData: (state, action) => {
            state.ProductsData = action.payload;
        },
        ResmoveProductData: (state, action) => {
            state.ProductsData.length = 0;
        },
        addProductImage: (state, action) => {
            state.itemImage = action.payload;
        },
        removeProductImage: (state, action) => {
            state.itemImage = [];
        },
    }
});

export const { addItemData, addProductData, ResmoveProductData ,addProductImage,removeProductImage} = itemSlice.actions;
export default itemSlice.reducer;
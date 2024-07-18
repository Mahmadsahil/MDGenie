import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";

const Store = configureStore({
    reducer: {
        item:itemSlice,
    }

})

export default Store;
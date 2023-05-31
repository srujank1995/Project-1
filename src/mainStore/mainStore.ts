import { configureStore } from "@reduxjs/toolkit";
import userStore from "./User.store";

const mainStore = configureStore({
    reducer:{
        User: userStore.reducer
    }
        
});

export default mainStore;
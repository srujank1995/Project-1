import { configureStore } from "@reduxjs/toolkit";
import userStore from "./UserStore/User.store";

const mainStore = configureStore({
    reducer:{
        User: userStore.reducer
    }
        
});

export default mainStore;
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name: "userStore",
    initialState:{
        userData:{}
    },
    reducers:{
            SaveUser: (state, action) =>{
                console.log("action", action)
                state.userData = action.payload.userData
            }
    }
});

export const {SaveUser} = userStore.actions
export default userStore;

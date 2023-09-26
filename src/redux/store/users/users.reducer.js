import {createSlice} from "@reduxjs/toolkit";
import initialState from "./users.state";
import builders from "./users.builder";
export const userslice = createSlice({
    name: "users",
    initialState: initialState,
    extraReducers: (builder) => builders(builder),
});
export default userslice.reducer;
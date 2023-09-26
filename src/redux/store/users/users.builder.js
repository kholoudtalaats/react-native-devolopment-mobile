 import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiGetUsers,apiAddUsers,apiUpdateUsers,apiDeleteUsers} from "../users";
 export const deleteuser = createAsyncThunk("users/delete", async (payload) => {
    const {data} = await apiDeleteUsers(payload);
    return data;
 });
 export const updateuser = createAsyncThunk("users/update", async (payload) => {
    const {data} = await apiUpdateUsers(payload);
    return data;
 });
 export const adduser = createAsyncThunk("users/add", async (payload) => {
    const {data} = await apiAddUsers(payload);
    return data;
 });
 export const getusers = createAsyncThunk("users/get", async (payload) => {
    const {data} = await apiGetUsers(payload);
    return data;
 });
 export default ({addCase}) => {
    addCase(getusers.pending, (state, action) => {
        state.usersListLoading = true;
    });
    addCase(getusers.fulfilled, (state, action) => {
        state.usersListLoading = false;
        state.usersListData= action?.payload?.data;
    });
    addCase(getusers.rejected, (state, action) => {
        state.usersListLoading =false;
        state.usersFailures =[action?.error?.message];
    });
    addCase(adduser.pending, (state, action) => {
      state.usersAddLoading = true;
    });
    addCase(adduser.fulfilled, (state, action) => {
      state.usersAddLoading=false;
      state.usersAddSuccess=action;
    });
    addCase(adduser.rejected, (state, action) => {
      state.usersAddLoading=false;
    });
    addCase(updateuser.pending, (state, action) => {
      state.usersUpdateLoading = false;
      state.usersUpdateLoading= action?.payload?.data;
    });
    addCase(updateuser.rejected, (state, action) => {
      state.usersUpdateSuccess=null;
    });
    addCase(updateuser.fulfilled, (state, action) => {
      state.usersUpdateFailed=null;
    });
    addCase(deleteuser.pending, (state, action) => {
      state.usersDeleteLoading = false;
      state.usersDeleteLoading= action?.payload?.data;
    });
    addCase(deleteuser.rejected, (state, action) => {
      state.usersDeleteSuccess=null;
    });
    addCase(deleteuser.fulfilled, (state, action) => {
      state.usersDeleteFailed=null;
    });
 };
import React, { act } from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    user: null,
    error: "",
    loading: false
}
const url = 'http://localhost:5000/users/signin'

export const login = createAsyncThunk("tour/login", async (data) => {
    try {
        const response = await axios.post(url, data.form);
        data.toast.success("login successful")
        data.navigate("/");
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        return console.log(error);
    }
})


const slice1 = createSlice({
    name: "tour",
    initialState: initialState,
    reducers: {},
    extraReducers:(builder) =>{
        builder.
            addCase(login.fulfilled, (state, action) => {
               
                state.loading=false;
                localStorage.setItem("profile",JSON.stringify({...action.payload}));
                state.user=action.payload;
            })
            .addCase(login.pending, (state, action) => {
                state.loading=true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading=false;
                state.error=action.payload.message;
            })
    }


})



export default slice1.reducer;
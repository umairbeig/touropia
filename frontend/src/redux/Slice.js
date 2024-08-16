
import { createAsyncThunk, createSlice, isRejected, isRejectedWithValue, unwrapResult } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    user: null,
    error: "",
    loading: false
}
const url = 'http://localhost:5000/users';
export const login = createAsyncThunk("tour/login", async (data ,{rejectWithValue}) => {
    try{
   
        const response = await axios.post(`${url}/signin`, data.form);
        data.toast.success("Login successful");
        data.navigate("/");
        console.log(response.data)
        return response.data;
    }
    catch(error){
        // data.toast.error("Invalid Login");
        console.log(error.response.data)
        // 
        return rejectWithValue(error.response.data);
    }
    

})
export const register = createAsyncThunk("tour/register", async (data) => {


    const response = await axios.post(`${url}/signup`, data.form);
    data.toast.success(" Signup Successful");
    data.navigate("/login");
    console.log(response.data);
    return response.data;


})
const slice1 = createSlice({
    name: "tour",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(login.fulfilled, (state, action) => {

                state.loading = false;
                localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
                state.user = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
    }
})
export default slice1.reducer;
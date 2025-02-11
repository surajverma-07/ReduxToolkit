import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    amount:1,
}

export const fetchedUserById = createAsyncThunk(
    'account/getUser',
    async(userId,thunkAPI)=>{
       const {data} = await axios.get(`http://localhost:3000/accounts/${userId}`);
       return data.amount;
    }
)
export const deleteUserById = createAsyncThunk(
    'account/deleteUser',
    async(userId,thunkAPI)=>{
       const {data} = await axios.delete(`http://localhost:3000/accounts/${userId}`);
    }
)
export const accountSlice = createSlice({
    name:"account",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.amount += 1;
        },
        decrement:(state,action)=>{
            state.amount -= 1;
        },
        incrementByAmt:(state,action)=>{
            state.amount+= parseInt(action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchedUserById.fulfilled,(state,action)=>{
            state.amount = action.payload;
            state.status = "success";
            state.pending = false;
        }).addCase(fetchedUserById.pending,(state,action)=>{
            state.status = "loading";
            state.pending=true;
        }).addCase(fetchedUserById.rejected,(state,action)=>{
            state.status = "failed";
            state.pending = false;
        });
        
    },
    extraReducers:(builder)=>{
        builder.addCase(deleteUserById.fulfilled,(state,action)=>{
            state.amount=0;
            state.status="success"
            state.pending="false"
        })
    }
})

export const {increment,decrement,incrementByAmt} = accountSlice.actions;

export default accountSlice.reducer

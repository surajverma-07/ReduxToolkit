import { createSlice } from "@reduxjs/toolkit";

const initialState={
    points:1,
}

export const bonusSlice = createSlice({
    name:'bonus',
    initialState,
    reducers:{
        incrementBonus:(state,action)=>{
            state.points+=1
        },
    }
})

export const {incrementBonus} = bonusSlice.actions;
export default bonusSlice.reducer;
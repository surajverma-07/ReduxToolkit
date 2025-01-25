import { createAction,createSlice } from '@reduxjs/toolkit'

const initialState = {
  points: 11,
}

const incrementByAmount = createAction('account/incrementByAmt')

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    incrementBonus: (state) => {
      state.points += 1   //immer
    },
  },
  extraReducers:(builder)=>{
     builder.addCase(incrementByAmount,(state,action)=>{
        if(action.payload>=100){
            state.points+=1;
        }   
     })
  }
})

// Action creators are generated for each case reducer function
export const { incrementBonus } = bonusSlice.actions

export default bonusSlice.reducer
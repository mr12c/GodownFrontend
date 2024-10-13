import { createSlice } from '@reduxjs/toolkit';
 

const initialState = {
   activeProductID:null
};

const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
         setActiveProductID: (state,action)=>{
             state.activeProductID = action.payload;
         }
    }
});

export const {setActiveProductID } = AppSlice.actions;
export default AppSlice.reducer;

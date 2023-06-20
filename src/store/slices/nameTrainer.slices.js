import { createSlice } from "@reduxjs/toolkit";


const nameTrainerSlice = createSlice({
    initialState: "",
    name: "InputValue",
    reducers:{
        getValue:(state,value)=>{
            
            return value.payload
        }
    }
});

export default  nameTrainerSlice.reducer
export const {getValue} = nameTrainerSlice.actions;

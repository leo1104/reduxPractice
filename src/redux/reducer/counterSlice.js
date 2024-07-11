import { createSlice } from "@reduxjs/toolkit"
import { useState } from "react";

const cipher = {
    value:0,
    name:"Prantosh"
}


//with slices only the reducers are made


const counterSlice = createSlice({
    name:'counter',
    initialState:cipher,
    reducers:{
        //define an action
        increment: (state,action)=>{
        //made to increment the value by 1
        console.log(state);
        state.value = state.value+1
        },
        incrementCanVary: (state,action)=>{
            console.log(action);
            state.value = state.value+ action.payload
        }
    }
});


export const {increment,incrementCanVary} = counterSlice.actions

export default counterSlice.reducer
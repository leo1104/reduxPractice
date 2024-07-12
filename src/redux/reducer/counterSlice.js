import { createSlice } from "@reduxjs/toolkit"
import { useState } from "react";
import { newVar } from "../thunk/newThunk";

const cipher = {
    value:0,
    name:"Prantosh",
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
        },
        fetchComments:(state,action)=>{
            state.comments =action.payload
        }
    },



    //promises
//what are the states of promises
//pending/rejected state, fulfilled


    extraReducers:(builder)=>{
        builder.addCase(newVar.pending,(state,action)=>{
            state.id = action.payload
            state.status = 'pending'

        }),
        builder.addCase(newVar.fulfilled,(state,action)=>{
            state.id = action.payload
            state.status = 'fulfilled'
        }),
        builder.addCase(newVar.rejected,(state,action)=>{
            state.status = 'rejected'
        })
    }
});


export const {increment,incrementCanVary,fetchComments} = counterSlice.actions

export default counterSlice.reducer
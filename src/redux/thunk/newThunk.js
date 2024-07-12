import { createAsyncThunk } from "@reduxjs/toolkit";


// createAsyncThunk used for creating thunks callback fn is an async function


//created our thunk


export const newVar = createAsyncThunk('new/apicall',
    async (data)=>{
//return action.payload 
        return {id:data.id,asjd:"as.dkhygasd"}
    }
)

export const newVarq = createAsyncThunk('new/apicall',
    async (id)=>{
//return action.payload 
        return {id,asjd:"as.dkhygasd"}
    }
)
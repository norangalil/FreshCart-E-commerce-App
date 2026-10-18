import { createSlice } from "@reduxjs/toolkit";
import { boolean, string } from "zod";


type  user= {
    name : string,
    email? : string ,
    role : string,
    id? : string
}

type intialstateType ={isAuthenticated : boolean , userInfo: null |user}

const intialstate:intialstateType = {isAuthenticated : false , userInfo: null}

const authslice =createSlice({
name:'auth',
initialState : intialstate , 
reducers : {
setAuthState : function(state , action){
state.isAuthenticated = action.payload.isAuthenticated;
state.userInfo= action.payload.userInfo;
}
}

})
 export const authReducer = authslice.reducer
  export const authActions = authslice.actions
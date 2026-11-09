import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartApiResponse, CartProduct } from "../types/cart.types";


 export type CartInitialValueTypes = {
    status: string,
    message: string,
    numOfCartItems: number,
    cartId: null | string,
    data: {
        products: CartProduct[],
        totalCartPrice: number
    }
}

const CartInitialValue : CartInitialValueTypes =  
{
    status: "",
    message: "",
    numOfCartItems: 0,
    cartId: null,
    data: {
        products: [],
        totalCartPrice: 0
    }
}


const cartSlice = createSlice({

name : 'cart',
initialState : CartInitialValue,
reducers : {
    updateCartInfo: (state , action:PayloadAction<CartApiResponse>)=>{
state.status = action.payload.status
state.message = action.payload.message
state.numOfCartItems = action.payload.numOfCartItems
state.cartId = action.payload.cartId
state.data = action.payload.data
    }
}


})

 export const cartReducer = cartSlice.reducer
 export const CartActions  =  cartSlice.actions
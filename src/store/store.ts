import { authReducer } from '@/features/auth/slices/auth.slice'
import{configureStore} from '@reduxjs/toolkit'
import type  { VerifyTokenResult } from '@/features/auth/server/auth.action'
import { CartInitialValueTypes, cartReducer } from '@/features/cart/slices/cart.slice'


export type PreloadedState ={
 authReducer: VerifyTokenResult
 cartReducer : CartInitialValueTypes
}
 export function CreateStore (PreloadedStateValue : PreloadedState){
const store =  configureStore ({
    reducer : {
    authReducer,
    cartReducer
    },
    preloadedState :PreloadedStateValue ,
})
    return store

}


type appstore = ReturnType< typeof CreateStore>
export type AppState = ReturnType< appstore["getState"]>;

 
import { authReducer } from '@/features/auth/slices/auth.slice'
import{configureStore} from '@reduxjs/toolkit'
import type  { VerifyTokenResult } from '@/features/auth/server/auth.action'


export type PreloadedState ={
 authReducer: VerifyTokenResult
}
 export function CreateStore (PreloadedStateValue : PreloadedState){
const store =  configureStore ({
    reducer : {
    authReducer
    },
    preloadedState :PreloadedStateValue ,
})
    return store

}


type appstore = ReturnType< typeof CreateStore>
export type AppState = ReturnType< appstore["getState"]>;

 
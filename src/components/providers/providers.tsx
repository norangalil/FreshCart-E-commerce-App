'use client';
import { store } from "@/store/store"
import { ReactNode } from "react"
import { Provider } from "react-redux"

type providerProps ={
    children : ReactNode
}
 export default function Providers({children}: providerProps){
    return <>
    <Provider store={store}>
{children}

</Provider>
    </>



}
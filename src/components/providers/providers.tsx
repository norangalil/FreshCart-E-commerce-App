'use client';
import { CreateStore, PreloadedState} from "@/store/store"
import { ReactNode } from "react"
import { Provider } from "react-redux"

type providerProps ={
    children : ReactNode
    PreloadedState: PreloadedState
}
 export default function Providers({children , PreloadedState}: providerProps){
    const store = CreateStore(PreloadedState)
    return <>
    <Provider store={store}>
{children}

</Provider>
    </>

}
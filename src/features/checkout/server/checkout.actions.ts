'use server'
import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { ShippingAddressvalues } from "../schema/checkout.schema";


export async function CreateCashOrder(CartId :string , ShippingAddresss:ShippingAddressvalues){


const cookieStore = await cookies()
const token =  cookieStore.get('token')

if(!token){
    return {
        status : ' fail',
        message : 'Please Login in'
    }
}

try {
    const options:AxiosRequestConfig ={
        url:`https://ecommerce.routemisr.com/api/v1/orders/${CartId}`,
        method:'POST',
        headers : {
            token : token.value
        },
        data : {
            shippingAddress : ShippingAddresss 
        }
    }
const {data} = await axios.request(options)
console.log(data)
return data
    
} catch (error) {
    console.log(error)
}
}


export async function CreateVisaOrder(CartId :string , ShippingAddresss:ShippingAddressvalues , url:string){


const cookieStore = await cookies()
const token =  cookieStore.get('token')

if(!token){
    return {
        status : ' fail',
        message : 'Please Login in'
    }
}

try {
    const options:AxiosRequestConfig ={
        url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CartId}?url=${url}`,
        method:'POST',
        headers : {
            token : token.value
        },
        data : {
            shippingAddress : ShippingAddresss 
        }
    }
const {data} = await axios.request(options)
console.log(data)
return data
    
} catch (error) {
    console.log(error)
}
}
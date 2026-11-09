'use server';

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { CartApiResponse, ErrorCartResponse } from "../types/cart.types";
import { readRouteCacheEntry } from "next/dist/client/components/segment-cache/cache";

 export async function getCartItem(): Promise<CartApiResponse | ErrorCartResponse>
  {

const cookieStore =  await cookies()
const token = cookieStore.get('token')

if(!token){
    return {
   status: "fail",
  message: " Please login "
    }
}

try {
    const options:AxiosRequestConfig = {
 url : `https://ecommerce.routemisr.com/api/v2/cart`,
 method : 'GET',
 headers : {
token : token?.value
 }

    }
   
    const { data } = await axios.request(options)
    console.log(data)
    return data;
} catch (error) {
    return {
   status: "fail",
  message: " Something went wrong , Try Again Later "
    }
}

}


  export async function AddProductToCart(id:string){

  const cookieStore =  await cookies()
  const token = cookieStore.get('token')
  if(!token){
     return {
   status: "fail",
  message: " Please login "
    }
  }
  try {
    const options:AxiosRequestConfig = {
url:`https://ecommerce.routemisr.com/api/v2/cart`,
method : 'Post',
headers :{
token : token.value 
},
data : {
productId : id
}
    }
    const {data} = await axios.request(options)
    return data

  } catch (error) {
      return {
   status: "fail",
  message: " Something went wrong , Try Again Later "
    }
  }
}


export async function DeleteItemFromCart ( id:string ){

    const cookieStore  =  await cookies()
  const token =   cookieStore.get('token')

    const options: AxiosRequestConfig = {
        url :`https://ecommerce.routemisr.com/api/v2/cart/${id}`,
        method : 'DELETE',
        headers :{
            token : token?.value
        }
    }
    const {data} =  await axios.request(options)
    return data
}

export async function ClearCart () {
const cookieStore =   await cookies()
const token = cookieStore.get('token')
const options:AxiosRequestConfig = {
url : 'https://ecommerce.routemisr.com/api/v2/cart',
method : 'DELETE',
headers : {
  token : token?.value
}
}
const {data } = await axios.request(options)
return data
}
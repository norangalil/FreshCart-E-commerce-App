'use server';

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { toast } from "react-toastify";

export async function getAllwishListOfUser(){
const cookieStore = await cookies()
const token =   cookieStore.get('token')

if(!token){

    
    toast.error('Please Login To Add Product To the wishlist')
    return;
}
try {
    const options:AxiosRequestConfig = {
        url :'https://ecommerce.routemisr.com/api/v1/wishlist',
        method :'GET',
        headers :{
        token : token.value
        }
    }

const {data } = await axios.request(options)
return data
} catch (error) {
    console.log(error)
}
}

export async function AddItemToWishList (id:string){
const cookieStore = await cookies()
const token = cookieStore.get('token')
if(!token){
 return {
      status: 'fail',
      message: 'Please Login To Add Product To wish list'
    }
    
}
try {
    const options:AxiosRequestConfig = {
        url:'https://ecommerce.routemisr.com/api/v1/wishlist',
        method :'POST',
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
    console.log(error)
}
}


export async function DeleteItemFromWishList (id:string){
const cookieStore = await cookies()
const token = cookieStore.get('token')
if(!token){
 return {
      status: 'fail',
      message: 'Somethig Go wrong please Try Again'
    }
    
}
try {
    const options:AxiosRequestConfig = {
        url:`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        method :'DELETE',
        headers :{
         token : token.value
        },
        
    }
    const {data} = await axios.request(options)
    return data
} catch (error) {
    console.log(error)
}
}
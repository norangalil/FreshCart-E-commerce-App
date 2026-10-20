import axios, { AxiosRequestConfig } from 'axios'
import React from 'react'
import { ProductApiResponse } from '../types/getAllProductsTypes'

export default async function getAllProducts():Promise<ProductApiResponse> {
 
    const options:AxiosRequestConfig = {
        url :'https://ecommerce.routemisr.com/api/v1/products',
        method :'GET'
    }
    const {data} = await axios.request(options)
    return data
}

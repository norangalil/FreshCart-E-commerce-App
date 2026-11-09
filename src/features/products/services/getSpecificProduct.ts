import React from 'react'
import { SingleProductApiResponse } from '../types/getSpecificProductType';
import axios, { AxiosRequestConfig } from 'axios';

export default async function getSpecificProduct(productId : string):Promise<SingleProductApiResponse> {

const options:AxiosRequestConfig ={
      url :`https://ecommerce.routemisr.com/api/v1/products/${productId}`,
        method :'GET'
}
try {
  const { data } = await axios.request(options);
  return data;
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.log("Status:", error.response?.status);
    console.log("Error data:", error.response?.data);
    console.log("Request URL:", error.config?.url);
  }

  throw error;
}

}


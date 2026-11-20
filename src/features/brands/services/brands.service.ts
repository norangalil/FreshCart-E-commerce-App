 import axios, { AxiosRequestConfig } from "axios";

 
 
 export async function getAllBrand (){
  const options:AxiosRequestConfig = {
    url :`https://ecommerce.routemisr.com/api/v1/brands`,
    method : 'GET'
  }
  const {data} = await axios.request(options)
 return data


}

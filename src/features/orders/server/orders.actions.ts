import axios, { AxiosRequestConfig } from 'axios'

export default async function getUserOrders(userId: string | undefined) {

    try {
        const options:AxiosRequestConfig = {
        url :`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,
         method: 'GET'
        }
        const {data} = await axios.request(options)
        return data
        
    } catch (error) {
        console.log(error)
    }
}

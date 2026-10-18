'use server';

import axios, { AxiosRequestConfig } from "axios";
import { url } from "inspector";
import { cookies } from "next/headers";

export async function setToken(token:string , rememberme:boolean) : Promise<void>{

const cookieStore = await cookies()

if(rememberme){
cookieStore.set('token', token , {
httpOnly :true,
maxAge : 30 * 24 * 60 * 60,
})
} else{
cookieStore.set('token', token , {
httpOnly :true,
maxAge : 1 * 24 * 60 * 60,
})
}
}

export async  function getToken():Promise<string|null> {
    const cookiestore = await cookies()
   const token =  cookiestore.get('token')?.value || null;
   return token  
}

  export async function deleteToken():Promise<void>{
    const cookiestore =  await cookies();
  cookiestore.delete('token')
}

  type user ={
  name : string;
  id: string;
  role : string;
}
 export type VerifyTokenResult = {
  isAuthenticated: boolean;
  userInfo: user | null;
};


 export async function verifyToken():Promise <VerifyTokenResult >{
  const cookiestore = await cookies()
  const token =   cookiestore.get('token')?.value || null;

  if(!token){
    return{
    isAuthenticated : false,
    userInfo : null
    }
    
  }

  try {
    
    const options : AxiosRequestConfig = {
      
      url :'https://ecommerce.routemisr.com/api/v1/auth/verifyToken',
      method :'GET',
      headers : {
      token : token
      }
    }
    const {data} = await axios.request(options)
    if(data.message === 'verified'){
      return {
        isAuthenticated : true,
        userInfo : {
          name : data.decoded.name,
          id : data.decoded.id,
          role : data.decoded.role
        }
      }

    }
    return {
      isAuthenticated: false,
      userInfo: null,
    };
  } catch (error) {
    return {
      isAuthenticated: false,
      userInfo: null,
    };  }
}
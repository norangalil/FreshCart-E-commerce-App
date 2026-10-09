'use server';

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
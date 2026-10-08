
"use client";
import { IconUserPlus , IconLoader2 } from "@tabler/icons-react";
import Link from "next/link";
import{FieldErrors, SubmitHandler, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { schemasignup, signupFormvalues } from "../../schemas/signup.schema";
import axios , {AxiosRequestConfig }from 'axios'
import {toast} from 'react-toastify'
import { useRouter } from "next/navigation";
 export default  function SignupForm() {
const router = useRouter()
const {register , handleSubmit ,formState : {errors , isSubmitting } } = useForm <signupFormvalues>({

defaultValues:{
name: "",
email: "",
password: "",
rePassword: "",
phone: "" ,
terms :false
  },
resolver: zodResolver(schemasignup),
mode: 'onChange' , 
reValidateMode :'onBlur'
  
})


const onsumbit :SubmitHandler<signupFormvalues> =  async (values)=>{
  const {terms , ...requestbody } = values
  try {
    const options:AxiosRequestConfig = {
url :'https://ecommerce.routemisr.com/api/v1/auth/signup',
method : 'POST',
data : requestbody
    }
   const {data} = await axios.request(options)
   console.log(data)
   toast.success('Account Created Succesfully')
   setTimeout(() => {
    router.push('/login')
   }, 2000);
  } 
  catch (error) {
    if(axios.isAxiosError(error)){
  toast.error(error.response?.data.message)
    }
    console.log(error)
  }
}
const onerror = (error: FieldErrors<signupFormvalues>)=>{
  console.log(error)
}
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg px-6 py-10">
        <div className="mb-10">
          <h2 className="text-center text-3xl font-semibold mb-2">
            Create Your Account
          </h2>
          <p className="text-center">Start your fresh journey with us today</p>
        </div>

        <form
          className="space-y-7"
          onSubmit={handleSubmit(onsumbit , onerror)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ali"
              id="name"
              {...register('name')}
            />
            {errors.name && (<p className="text-red-400"> {errors.name.message}</p>)}

           
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              className="form-control"
              placeholder="ali@example.com"
              id="email"
              {...register('email')}
            />

          {errors.email && (<p className="text-red-400"> {errors.email.message}</p>)}

          </div>

          <div className="flex bg-light flex-col gap-2">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              className="form-control"
              placeholder="create a strong password"
              autoComplete="off"
              id="password"
              {...register('password')}
            />
          {errors.password && (<p className="text-red-400"> {errors.password.message}</p>)}


            {/* <div className="password-requirements">
              <div className="flex items-center gap-2">
                <div className="bar grow h-1 bg-gray-200 rounded-md overflow-hidden">
                  <div className={`progress bg-orange-500 w-50 h-full`}></div>
                </div>
                <span>Fair</span>
              </div>
            </div> */}

           
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="rePassword">Confirm Password*</label>
            <input
              type="password"
              className="form-control"
              placeholder="confirm your password"
              autoComplete="off"
              id="rePassword"
              {... register('rePassword')}
            />
          {errors.rePassword && (<p className="text-red-400"> {errors.rePassword.message}</p>)}


          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              className="form-control"
              placeholder="+1 234 567 8900"
              id="phone"
              {...register('phone')}
            />

          {errors.phone && (<p className="text-red-400"> {errors.phone.message}</p>)}

          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="terms"
                className="size-4 accent-primary-600"
                {... register ('terms')}
              
              />

              <label htmlFor="terms" className="ms-2">
                I agree to the{" "}
                <Link href={`/terms`} className="text-primary-600">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href={`/privacy-policy`} className="text-primary-600">
                  Privacy Policy
                </Link>{" "}
                *
              </label>
            </div>
        {errors.terms && (<p className="text-red-400"> {errors.terms.message}</p>)}

          </div>

          <button
            type="submit"
            className="btn flex gap-2 justify-center bg-primary-600 text-white hover:bg-primary-700 cursor-pointer disabled:cursor-not-allowed w-full"
          >

{isSubmitting? <>

<IconLoader2 stroke={2} /> 
<span>Creating ... </span>
</> : <>
<IconUserPlus stroke={2} />
<span>Create My Account</span>
</>}
           
          </button>
        </form>

        <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
          Already have an account?{" "}
          <Link href={`/login`} className="text-primary-600" onClick={() => router.push('/login')}>
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
}

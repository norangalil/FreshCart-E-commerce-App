'use client'
import ShippingAddress from "@/features/checkout/components/ShippingAddress";
import PaymentMethod from "@/features/checkout/components/PaymentMethod";
import CheckoutOrderSummary from "@/features/checkout/components/CheckoutOrderSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faReceipt,
  faArrowLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShippingAddressSchema, ShippingAddressvalues } from "../schema/checkout.schema";
import { useEffect, useState } from "react";
import { CreateCashOrder, CreateVisaOrder } from "../server/checkout.actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/store/store";
import { toast } from "react-toastify";
import { CartActions } from "@/features/cart/slices/cart.slice";
import { getCartItem } from "@/features/cart/server/cart.actions";
import { CartApiResponse, ErrorCartResponse } from "@/features/cart/types/cart.types";

export default  function CheckoutScreen() {
  const [CartInfo , setCartInfo] = useState <CartApiResponse | ErrorCartResponse |null  >(null )

async function HandleGetAllOrders(){
  const response = await getCartItem()
  setCartInfo(response)
}

  useEffect(() => {
    HandleGetAllOrders()
  }, [])

console.log(CartInfo)
 const {ClearCart}  = CartActions
 const dispatch = useDispatch()
const [PaymentMethood, setPaymentMethod] = useState < 'cash' | 'visa' > ('cash');

const {cartId} = useSelector((state: AppState )=> state.cartReducer)
const { register , handleSubmit , formState:{errors}} = useForm ({
  defaultValues: {
   details: "",
     phone: "",
    city: ""
  },
  resolver : zodResolver(ShippingAddressSchema),
  mode : 'onSubmit',
  reValidateMode : 'onChange'

})

const Onsumbit:SubmitHandler<ShippingAddressvalues> =  async (values)=>{
  try { 
 if(!cartId){
return;
  }
     if(PaymentMethood=== 'cash'){
 const responseCash =  await CreateCashOrder( cartId ,  values)
 console.log(values)
 if(responseCash.status === 'success'){
   toast.success('Order created Successfully')
  dispatch (ClearCart())
 console.log(responseCash)
 }

  }
  
  else {
 const responseVisa = await  CreateVisaOrder(cartId ,  values , location.origin)
 if(responseVisa.status === 'success'){
   toast.loading('Redirecting to Payment Page')
   
setTimeout(() => {
 location.href= responseVisa.session.url
}, 2000);
  dispatch (ClearCart())

 }
 console.log(responseVisa)
  }
  } catch (error) {
    console.log(error)
  }
 
console.log(values)
}

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-8 lg:px-12">

      <div className="mx-auto max-w-7xl">

        {/* Page Header */}

            <div className="mb-6">
        
              {/* Breadcrumb */}
              <nav className="mb-4 flex items-center gap-2 text-xs text-gray-500">
        
                <Link href={'/'} className="hover:text-green-800">Home</Link>
        
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[9px] text-gray-300"
                />
        
                <Link href="/cart" className="hover:text-green-800">
                  Cart
                </Link>
        
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[9px] text-gray-300"
                />
        
                <span className="font-medium text-gray-900">
                  Checkout
                </span>
        
              </nav>
        
              {/* Title & Back Button */}
              <div className="flex flex-wrap items-center justify-between gap-4">
        
                <div className="flex items-center gap-3">
        
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white shadow-sm">
        
                    <FontAwesomeIcon
                      icon={faReceipt}
                      className="text-lg"
                    />
        
                  </div>
        
                  <div>
        
                    <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Complete Your Order
                    </h1>
        
                    <p className="mt-1 text-xs text-gray-500">
                      Review your items and complete your purchase
                    </p>
        
                  </div>
        
                </div>
        
                <button
                  type="button"
                  className="flex items-center gap-2 text-xs font-medium text-green-600 transition-colors hover:text-green-700"
                >
        
                  <FontAwesomeIcon icon={faArrowLeft} />
        
                  Back to Cart
        
                </button>
        
              </div>
        
            </div>

        {/* Checkout Layout */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* Left Column */}
          <div className="min-w-0 space-y-4" >

            <ShippingAddress register ={register}  errors = {errors}/>

            <PaymentMethod  Selectedmethod = {PaymentMethood} changePaymentMethod ={setPaymentMethod}/>
          

          </div>

          {/* Right Column */}
          <form className="w-full lg:sticky lg:top-5" onSubmit={handleSubmit(Onsumbit)}>
            <CheckoutOrderSummary cartInfo ={CartInfo} />
          </form>

        </div>

      </div>

    </main>
  );
}

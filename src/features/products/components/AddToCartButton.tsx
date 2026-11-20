'use client'

import { AddProductToCart } from "@/features/cart/server/cart.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faCartShopping,

} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { CartActions } from "@/features/cart/slices/cart.slice";
import { useDispatch } from "react-redux";




export default function AddToCartButton({ productId }: { productId: string }) {
const {updateCartInfo}= CartActions
 const dispatch =  useDispatch()
     
async function HandleResponseAddtoCart () {
     const respone = await AddProductToCart(productId)
     if(respone.status=== 'fail'){
toast.error('Please Login To Add product to The Cart')
     }
     
     else{
    toast.success('Product Added  To The Cart ')
dispatch(updateCartInfo(respone))
console.log(respone)
     }
         } 
  

  return (
      <button 
            onClick={HandleResponseAddtoCart}
            className="flex h-10 items-center justify-center gap-2 rounded-lg bg-green-600 text-sm font-medium text-white shadow-md">
              <FontAwesomeIcon icon={faCartShopping} />
              Add to Cart
            </button>
  );
}